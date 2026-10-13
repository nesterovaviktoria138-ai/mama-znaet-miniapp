import copy
import hashlib
import hmac
import io
import json
from pathlib import Path
import tempfile
import unittest
import urllib.parse
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from unittest.mock import patch
from payments import Application, Ledger, Rejected, anniversary, validate_init_data

TOKEN = 'test-only-fake-token'
NOW = 1791849600


def auth(uid=123, at=NOW):
    data = {'auth_date': str(at), 'user': json.dumps({'id': uid}), 'signature': 'test-signature'}
    key = hmac.new(b'WebAppData', TOKEN.encode(), hashlib.sha256).digest()
    check = '\n'.join(f'{k}={v}' for k, v in sorted(data.items()))
    data['hash'] = hmac.new(key, check.encode(), hashlib.sha256).hexdigest()
    return urllib.parse.urlencode(data)


class PaymentTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.catalog = json.loads((Path(__file__).parent.parent / 'catalog.json').read_text())
        # Synthetic test prices; never written to the real catalog.
        for p in self.catalog['products']:
            p['stars'] = 1
        self.ledger = Ledger(Path(self.tmp.name) / 'ledger.sqlite', self.catalog)
        self.calls = []
        self.app = Application(self.ledger, TOKEN, 's'*32, 'https://example.test',
                               call=lambda *args: self.calls.append(args) or True)

    def tearDown(self):
        self.tmp.cleanup()

    def purchase(self, product='sleep_12m', uid=123, charge='charge1', now=NOW):
        invoice = self.ledger.new_order(uid, product, 'terms-test', now)
        data = {'invoice_payload': invoice['payload'], 'currency': 'XTR', 'total_amount': 1,
                'telegram_payment_charge_id': charge}
        query = dict(data, id='query-'+charge, **{'from': {'id': uid}})
        self.ledger.checkout(query, now)
        return data

    def request(self, path, body, secret=None):
        raw = json.dumps(body).encode()
        env = {'PATH_INFO': path, 'REQUEST_METHOD': 'POST', 'CONTENT_LENGTH': str(len(raw)), 'wsgi.input': io.BytesIO(raw)}
        if secret is not None:
            env['HTTP_X_TELEGRAM_BOT_API_SECRET_TOKEN'] = secret
        result = []
        with patch('payments.time.time', return_value=NOW):
            response = b''.join(self.app(env, lambda status, headers: result.append((status, headers))))
        return result[0][0], json.loads(response)

    def test_auth_valid_tampered_expired_future_duplicate(self):
        self.assertEqual(validate_init_data(auth(), TOKEN, NOW), 123)
        for raw in [auth().replace('123', '124'), auth(at=NOW-3601), auth(at=NOW+31), auth()+'&user=x']:
            with self.subTest(raw=raw), self.assertRaises(Rejected):
                validate_init_data(raw, TOKEN, NOW)

    def test_no_access_before_success_and_retry_does_not_extend(self):
        data = self.purchase()
        self.assertEqual(self.ledger.access(123, NOW), {})
        self.ledger.paid(data, 123, NOW, NOW)
        first = self.ledger.access(123, NOW)
        self.ledger.paid(data, 123, NOW, NOW+100)
        self.assertEqual(first, self.ledger.access(123, NOW+100))
        self.assertEqual(set(first), {'sleep_analyzer'})
        self.assertEqual(self.ledger.access(124, NOW), {})
        self.assertEqual(self.ledger.access(123, anniversary(NOW)), {})

    def test_full_and_separate_scopes(self):
        for i, product in enumerate(self.catalog['products']):
            data = self.purchase(product['id'], uid=200+i, charge=str(i))
            self.ledger.paid(data, 200+i, NOW, NOW)
            self.assertEqual(set(self.ledger.access(200+i, NOW)), set(product['includes']))

    def test_wrong_amount_currency_buyer_unknown_order(self):
        data = self.purchase()
        for changes in [{'total_amount': 2}, {'total_amount': True}, {'currency': 'RUB'}, {'invoice_payload': 'invented'}]:
            with self.subTest(changes=changes), self.assertRaises(Rejected):
                self.ledger.paid(dict(data, **changes), 123, NOW, NOW)
        with self.assertRaises(Rejected):
            self.ledger.paid(data, 999, NOW, NOW)
        self.assertEqual(self.ledger.access(123, NOW), {})

    def test_refund_out_of_order_and_duplicate(self):
        data = self.purchase()
        self.ledger.refunded(data)
        self.ledger.paid(data, 123, NOW, NOW)
        self.ledger.refunded(data)
        self.ledger.paid(data, 123, NOW, NOW)
        self.assertEqual(self.ledger.access(123, NOW), {})

    def test_refund_preserves_other_purchase_and_survives_restart(self):
        sleep = self.purchase()
        feeding = self.purchase('feeding_12m', charge='charge2')
        self.ledger.paid(sleep, 123, NOW, NOW)
        self.ledger.paid(feeding, 123, NOW, NOW)
        self.ledger.refunded(sleep)
        restarted = Ledger(self.ledger.path, self.catalog)
        self.assertEqual(set(restarted.access(123, NOW)), {'complementary_feeding'})

    def test_concurrent_delivery_exactly_once(self):
        data = self.purchase()
        with ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(lambda _: self.ledger.paid(data, 123, NOW, NOW), range(8)))
        with self.ledger.connect() as db:
            self.assertEqual(db.execute('SELECT count(*) FROM charges').fetchone()[0], 1)

    def test_expired_checkout_and_second_checkout(self):
        invoice = self.ledger.new_order(123, 'sleep_12m', 'terms', NOW)
        q = {'id': 'q', 'from': {'id': 123}, 'invoice_payload': invoice['payload'], 'currency': 'XTR', 'total_amount': 1}
        with self.assertRaises(Rejected):
            self.ledger.checkout(q, NOW+1801)
        self.ledger.checkout(q, NOW)
        self.ledger.checkout(q, NOW)
        with self.assertRaises(Rejected):
            self.ledger.checkout(dict(q, id='another'), NOW)

    def test_extra_charge_retained_without_second_grant(self):
        data = self.purchase()
        self.ledger.paid(data, 123, NOW, NOW)
        self.ledger.paid(dict(data, telegram_payment_charge_id='unexpected-second'), 123, NOW+10, NOW+10)
        with self.ledger.connect() as db:
            self.assertEqual(db.execute('SELECT sum(deliverable),count(*) FROM charges').fetchone()[:], (1, 2))
        self.assertEqual(self.ledger.access(123, NOW)['sleep_analyzer'], anniversary(NOW))

    def test_paid_webhook_auth_and_access_endpoint(self):
        data = self.purchase()
        body = {'message': {'from': {'id': 123}, 'date': NOW, 'successful_payment': data}}
        self.assertTrue(self.request('/telegram/webhook', body, 'wrong')[0].startswith('400'))
        self.assertEqual(self.ledger.access(123, NOW), {})
        self.assertEqual(self.request('/telegram/webhook', body, 's'*32)[0], '200 OK')
        status, result = self.request('/api/access', {'init_data': auth()})
        self.assertEqual(status, '200 OK')
        self.assertEqual(set(result['scopes']), {'sleep_analyzer'})

    def test_sales_closed_even_with_config_enabled(self):
        self.catalog['sales_enabled'] = True
        status, _ = self.request('/api/invoice', {'init_data': auth(), 'product_id': 'sleep_12m'})
        self.assertTrue(status.startswith('400'))
        self.assertEqual(self.calls, [])
        status, _ = self.request('/telegram/webhook', {'pre_checkout_query': {'id': 'q'}}, 's'*32)
        self.assertEqual(status, '200 OK')
        self.assertFalse(self.calls[-1][2]['ok'])

    def test_null_prices_and_leap_year(self):
        self.catalog['products'][0]['stars'] = None
        with self.assertRaises(Rejected):
            self.ledger.new_order(123, 'full_12m', 'terms', NOW)
        leap = int(datetime(2024, 2, 29, 12, tzinfo=timezone.utc).timestamp())
        self.assertEqual(datetime.fromtimestamp(anniversary(leap), timezone.utc).isoformat(), '2025-02-28T12:00:00+00:00')


if __name__ == '__main__':
    unittest.main()
