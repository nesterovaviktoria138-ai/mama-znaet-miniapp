FROM python:3.13-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 PORT=10000
WORKDIR /app
COPY commerce/server/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt \
    && groupadd --gid 10001 mama \
    && useradd --uid 10001 --gid mama --no-create-home mama \
    && mkdir -p /var/lib/mama-payments \
    && chown mama:mama /var/lib/mama-payments
COPY commerce/catalog.json /app/commerce/catalog.json
COPY commerce/server/payments.py commerce/server/wsgi.py commerce/server/gunicorn.conf.py /app/commerce/server/
USER 10001:10001
EXPOSE 10000
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
 CMD python -c "import os,urllib.request; urllib.request.urlopen('http://127.0.0.1:'+os.environ.get('PORT','10000')+'/health',timeout=2)"
CMD ["gunicorn", "--config", "commerce/server/gunicorn.conf.py", "commerce.server.wsgi:application"]
