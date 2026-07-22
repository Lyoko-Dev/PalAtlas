server {
    server_name palatlas.lyokodev.com;
    root /opt/apps/palatlas;
    index index.html;

    location = /index.html {
        add_header Cache-Control "no-store, no-cache, must-revalidate";
        expires -1;
    }

    location = /public/sw.js {
        add_header Cache-Control "no-store, no-cache, must-revalidate";
        expires -1;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|csv|json|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webmanifest)$ {
        expires 1h;
        add_header Cache-Control "public";
    }
}
