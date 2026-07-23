server {
    server_name palatlas.lyokodev.com;

    location / {
        proxy_pass http://127.0.0.1:4173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/palatlas.lyokodev.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/palatlas.lyokodev.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
server {
    if ($host = palatlas.lyokodev.com) {
        return 301 https://$host$request_uri;
    }
    server_name palatlas.lyokodev.com;
    listen 80;
    return 404;
}