"""Production WSGI entry point; environment validation happens at startup."""
from .payments import from_environment

application = from_environment()
