"""Single instance, shared durable SQLite volume; never log request credentials."""
import os

bind = '0.0.0.0:' + str(int(os.environ.get('PORT', '10000')))
workers = 2
worker_class = 'sync'
timeout = 20
graceful_timeout = 20
keepalive = 2
limit_request_line = 2048
limit_request_fields = 30
limit_request_field_size = 4096
accesslog = None
errorlog = '-'
loglevel = 'warning'
# Do not trust forwarding headers from arbitrary direct clients.
forwarded_allow_ips = '127.0.0.1,::1'
