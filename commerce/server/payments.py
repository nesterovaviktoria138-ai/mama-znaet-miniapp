"""Telegram Stars payment foundation. No third-party runtime dependencies.
Not connected to the public Mini App; launch remains deliberately disabled.
"""
import calendar
from contextlib import contextmanager
import hashlib
import hmac
import json
import os
import secrets
import sqlite3
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# Remove only after protected delivery, support, terms and Telegram E2E tests.
LAUNCH_READY = False


class Rejected(Exception):
    pass


def validate_init_data(raw, token, now):
    if not token or not isinstance(raw, str) or len(raw) > 16384:
        raise Rejected('Откройте приложение заново через Telegram.')
    pairs = urllib.parse.parse_qsl(raw, keep_blank_values=True, strict_parsing=True)
    values = dict(pairs)
    if len(values) != len(pairs):
        raise Rejected('Некорректная подпись Telegram.')
    received = values.pop('hash', '')
    key = hmac.new(b'WebAppData', token.encode(), hashlib.sha256).digest()
    check = '\n'.join(f'{k}={v}' for k, v in sorted(values.items()))
    expected = hmac.new(key, check.encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(expected, received):
        raise Rejected('Некорректная подпись Telegram.')
    age = now - int(values.get('auth_date', '0'))
    if age < -30 or age > 3600:
        raise Rejected('Откройте приложение заново через Telegram.')
    user = json.loads(values.get('user', '{}'))
    uid = user.get('id')
    if type(uid) is not int or not 0 < uid < 2**52 or user.get('is_bot'):
        raise Rejected('Не удалось проверить покупателя.')
    return uid


def anniversary(timestamp):
    date = datetime.fromtimestamp(timestamp, timezone.utc)
    year = date.year + 1
    return int(date.replace(year=year, day=min(date.day, calendar.monthrange(year, date.month)[1])).timestamp())


SCHEMA = '''
CREATE TABLE IF NOT EXISTS orders (
 id TEXT PRIMARY KEY, user_id INTEGER NOT NULL, product TEXT NOT NULL,
 stars INTEGER NOT NULL CHECK(stars > 0), scopes TEXT NOT NULL,
 created INTEGER NOT NULL, terms TEXT NOT NULL, checkout_id TEXT,
 paid_charge TEXT UNIQUE
);
CREATE TABLE IF NOT EXISTS charges (
 id TEXT PRIMARY KEY, order_id TEXT NOT NULL, user_id INTEGER NOT NULL,
 stars INTEGER NOT NULL, paid_at INTEGER NOT NULL, expires INTEGER NOT NULL,
 scopes TEXT NOT NULL, deliverable INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS refunds (
 charge_id TEXT PRIMARY KEY, order_id TEXT NOT NULL, stars INTEGER NOT NULL
);
'''


class Ledger:
    def __init__(self, path, catalog):
        self.path, self.catalog = str(path), catalog
        with self.connect() as db:
            db.executescript(SCHEMA)

    @contextmanager
    def connect(self):
        db = sqlite3.connect(self.path, timeout=5)
        db.row_factory = sqlite3.Row
        db.execute('PRAGMA foreign_keys=ON')
        try:
            with db:
                yield db
        finally:
            db.close()

    def new_order(self, uid, product_id, terms, now):
        # Called only by server routes after their launch and identity checks.
        product = next((p for p in self.catalog['products'] if p['id'] == product_id), None)
        if not product or type(product['stars']) is not int or product['stars'] <= 0:
            raise Rejected('Цена ещё не настроена. Оплата недоступна.')
        with self.connect() as db:
            db.execute('BEGIN IMMEDIATE')
            active = self.access(uid, now, db)
            if all(s in active for s in product['includes']):
                raise Rejected('Этот доступ у вас уже есть.')
            if db.execute('SELECT count(*) FROM orders WHERE user_id=? AND created>?', (uid, now-3600)).fetchone()[0] >= 10:
                raise Rejected('Слишком много попыток. Попробуйте позже.')
            oid = secrets.token_urlsafe(24)
            db.execute('INSERT INTO orders(id,user_id,product,stars,scopes,created,terms) VALUES(?,?,?,?,?,?,?)',
                       (oid, uid, product_id, product['stars'], json.dumps(product['includes']), now, terms))
        return {'title': product['title'], 'description': 'Доступ на 12 месяцев. Без автопродления.',
                'payload': oid, 'provider_token': '', 'currency': 'XTR',
                'prices': [{'label': product['title'], 'amount': product['stars']}]}

    @staticmethod
    def match(db, data, uid=None):
        order = db.execute('SELECT * FROM orders WHERE id=?', (data['invoice_payload'],)).fetchone()
        if (not order or data.get('currency') != 'XTR' or type(data.get('total_amount')) is not int
                or data['total_amount'] != order['stars'] or (uid is not None and uid != order['user_id'])):
            raise Rejected('Покупка не прошла проверку. Обратитесь в поддержку.')
        return order

    def checkout(self, query, now):
        with self.connect() as db:
            db.execute('BEGIN IMMEDIATE')
            order = self.match(db, query, query['from']['id'])
            if order['paid_charge'] or now - order['created'] > 1800 or now < order['created']:
                raise Rejected('Счёт уже оплачен или устарел. Откройте покупку заново.')
            if order['checkout_id'] and order['checkout_id'] != query['id']:
                raise Rejected('Этот счёт уже обрабатывается. Откройте покупку заново.')
            if all(s in self.access(order['user_id'], now, db) for s in json.loads(order['scopes'])):
                raise Rejected('Этот доступ у вас уже есть.')
            db.execute('UPDATE orders SET checkout_id=? WHERE id=?', (query['id'], order['id']))

    def paid(self, payment, uid, paid_at, now):
        charge = payment['telegram_payment_charge_id']
        if not isinstance(charge, str) or not charge or len(charge) > 512:
            raise Rejected('Некорректный платёж.')
        if type(paid_at) is not int or paid_at > now + 30 or payment.get('is_recurring'):
            raise Rejected('Некорректная дата или тип платежа.')
        with self.connect() as db:
            db.execute('BEGIN IMMEDIATE')
            order = self.match(db, payment, uid)
            if not order['checkout_id'] or paid_at < order['created']:
                raise Rejected('Не найдено подтверждение заказа.')
            old = db.execute('SELECT * FROM charges WHERE id=?', (charge,)).fetchone()
            if old:
                if old['order_id'] != order['id']:
                    raise Rejected('Конфликт идентификатора платежа.')
                return # Retry does not extend or resurrect access.
            # Unexpected second charge is retained for manual refund, never extends access.
            deliverable = int(order['paid_charge'] is None)
            db.execute('INSERT INTO charges VALUES(?,?,?,?,?,?,?,?)',
                       (charge, order['id'], uid, order['stars'], paid_at, anniversary(paid_at), order['scopes'], deliverable))
            if deliverable:
                db.execute('UPDATE orders SET paid_charge=? WHERE id=?', (charge, order['id']))

    def refunded(self, payment):
        # Refund can arrive before successful_payment; tombstone prevents reactivation.
        charge = payment['telegram_payment_charge_id']
        if not isinstance(charge, str) or not charge or len(charge) > 512:
            raise Rejected('Некорректный возврат.')
        with self.connect() as db:
            db.execute('BEGIN IMMEDIATE')
            order = self.match(db, payment)
            old = db.execute('SELECT * FROM charges WHERE id=?', (charge,)).fetchone()
            if old and old['order_id'] != order['id']:
                raise Rejected('Конфликт возврата.')
            previous = db.execute('SELECT * FROM refunds WHERE charge_id=?', (charge,)).fetchone()
            if previous and (previous['order_id'] != order['id'] or previous['stars'] != order['stars']):
                raise Rejected('Конфликт возврата.')
            db.execute('INSERT OR IGNORE INTO refunds VALUES(?,?,?)', (charge, order['id'], order['stars']))

    def access(self, uid, now, db=None):
        if db is None:
            with self.connect() as conn:
                return self.access(uid, now, conn)
        scopes = {}
        for row in db.execute('''SELECT c.* FROM charges c LEFT JOIN refunds r ON r.charge_id=c.id
            WHERE c.user_id=? AND c.deliverable=1 AND c.paid_at<=? AND c.expires>? AND r.charge_id IS NULL''', (uid, now, now)):
            for scope in json.loads(row['scopes']):
                scopes[scope] = max(scopes.get(scope, 0), row['expires'])
        return scopes


def telegram_call(token, method, body):
    # Never log the URL: it contains the bot token.
    req = urllib.request.Request('https://api.telegram.org/bot' + token + '/' + method,
                                 data=json.dumps(body).encode(), headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=5) as response:
        result = json.load(response)
    if not result.get('ok'):
        raise RuntimeError('Telegram API unavailable')
    return result['result']


class Application:
    def __init__(self, ledger, token, webhook_secret, origin, terms_version='', call=telegram_call):
        self.ledger, self.token, self.secret = ledger, token, webhook_secret
        self.origin, self.terms, self.call = origin, terms_version, call

    def __call__(self, env, start):
        headers = [('Content-Type', 'application/json; charset=utf-8'), ('Cache-Control', 'no-store')]
        origin = env.get('HTTP_ORIGIN')
        if origin == self.origin:
            headers += [('Access-Control-Allow-Origin', origin), ('Vary', 'Origin'),
                        ('Access-Control-Allow-Headers', 'Content-Type'), ('Access-Control-Allow-Methods', 'POST, OPTIONS')]
        status = '200 OK'
        try:
            path, method = env.get('PATH_INFO'), env.get('REQUEST_METHOD')
            if method == 'OPTIONS' and origin == self.origin:
                result = {}
            elif path == '/health' and method == 'GET':
                result = {'ok': True, 'sales_enabled': False, 'stage': 'backend_preparation'}
            elif method != 'POST' or path not in ('/telegram/webhook', '/api/access', '/api/invoice'):
                status, result = '404 Not Found', {'error': 'Не найдено.'}
            else:
                if path == '/telegram/webhook':
                    supplied = env.get('HTTP_X_TELEGRAM_BOT_API_SECRET_TOKEN', '')
                    if not self.secret or not hmac.compare_digest(self.secret, supplied):
                        raise Rejected('Доступ запрещён.')
                elif origin and origin != self.origin:
                    raise Rejected('Доступ запрещён.')
                length = int(env.get('CONTENT_LENGTH') or 0)
                if not 0 < length <= 65536:
                    raise Rejected('Некорректный размер запроса.')
                body = json.loads(env['wsgi.input'].read(length))
                if not isinstance(body, dict):
                    raise Rejected('Некорректный запрос.')
                now = int(time.time())
                if path == '/telegram/webhook':
                    result = self.webhook(body, now)
                else:
                    uid = validate_init_data(body.get('init_data'), self.token, now)
                    if path == '/api/access':
                        result = {'scopes': self.ledger.access(uid, now)}
                    else:
                        if not LAUNCH_READY or not self.ledger.catalog.get('sales_enabled'):
                            raise Rejected('Продажи ещё не открыты.')
                        if not self.terms or body.get('accepted_terms') != self.terms:
                            raise Rejected('Подтвердите условия покупки.')
                        invoice = self.ledger.new_order(uid, body.get('product_id'), self.terms, now)
                        result = {'invoice_url': self.call(self.token, 'createInvoiceLink', invoice)}
        except (Rejected, ValueError, KeyError, TypeError, OverflowError):
            # Generic webhook failure leaves Telegram free to retry; no raw payload logging.
            status, result = '400 Bad Request', {'error': 'Запрос не прошёл проверку. Откройте приложение заново или обратитесь в поддержку.'}
        except Exception:
            status, result = '503 Service Unavailable', {'error': 'Сервис временно недоступен. Попробуйте позже.'}
        start(status, headers)
        return [json.dumps(result, ensure_ascii=False).encode()]

    def webhook(self, update, now):
        query = update.get('pre_checkout_query')
        if query:
            answer = {'pre_checkout_query_id': query['id'], 'ok': False}
            try:
                if not LAUNCH_READY or not self.ledger.catalog.get('sales_enabled'):
                    raise Rejected('Продажи ещё не открыты.')
                self.ledger.checkout(query, now)
                answer['ok'] = True
            except (Rejected, ValueError, KeyError, TypeError) as exc:
                answer['error_message'] = str(exc) if isinstance(exc, Rejected) else 'Не удалось проверить заказ.'
            self.call(self.token, 'answerPreCheckoutQuery', answer)
        msg = update.get('message', {})
        text = msg.get('text', '')
        command = text.split(maxsplit=1)[0].lower() if isinstance(text, str) and text.strip() else ''
        chat = msg.get('chat', {})
        if (chat.get('type') == 'private'
                and command in ('/start', '/start@mamatochnoznaetbot')
                and type(chat.get('id')) is int
                and chat['id'] == msg.get('from', {}).get('id')
                and not msg.get('from', {}).get('is_bot')):
            self.call(self.token, 'sendMessage', {
                'chat_id': chat['id'],
                'text': (
                    'Привет! Это «Мама знает» 🌿\n\n'
                    'Помощник в первый год жизни малыша: сон, прикорм, развитие '
                    'и забота о маме.\n\n'
                    'Открой приложение и выбери то, что волнует тебя сегодня.'
                ),
                'reply_markup': {'inline_keyboard': [[{
                    'text': 'Открыть «Мама знает»',
                    'web_app': {'url': 'https://nesterovaviktoria138-ai.github.io/mama-znaet-miniapp/'}
                }]]}
            })
        if 'successful_payment' in msg:
            self.ledger.paid(msg['successful_payment'], msg['from']['id'], msg['date'], now)
        if 'refunded_payment' in msg:
            self.ledger.refunded(msg['refunded_payment'])
        return {'ok': True}


def from_environment():
    token, secret = os.environ.get('TELEGRAM_BOT_TOKEN', ''), os.environ.get('TELEGRAM_WEBHOOK_SECRET', '')
    if not token or len(secret) < 32:
        raise RuntimeError('Configure protected TELEGRAM_BOT_TOKEN and TELEGRAM_WEBHOOK_SECRET')
    path = os.environ.get('PAYMENTS_DB', '')
    if not path or not Path(path).is_absolute():
        raise RuntimeError('PAYMENTS_DB must point to an absolute persistent-volume path')
    catalog = json.loads((Path(__file__).parent.parent / 'catalog.json').read_text())
    return Application(Ledger(path, catalog), token, secret,
                       'https://nesterovaviktoria138-ai.github.io', os.environ.get('TERMS_VERSION', ''))
