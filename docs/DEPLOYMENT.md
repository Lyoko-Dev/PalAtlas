# Despliegue de PalAtlas

## Requisitos

- Node.js 24 o superior.
- nginx con HTTPS.
- Usuario de servicio con permisos sobre `/opt/apps/palatlas/data`.

## Instalación

```bash
sudo mkdir -p /opt/apps/palatlas
sudo chown -R lyokolab:lyokolab /opt/apps/palatlas
cd /opt/apps/palatlas
npm ci --omit=dev
sudo cp deploy/systemd/palatlas.service /etc/systemd/system/palatlas.service
sudo systemctl daemon-reload
sudo systemctl enable --now palatlas
```

## nginx

Copia `deploy/nginx/palatlas.lyokodev.com` a `sites-available`, crea el enlace en `sites-enabled`, configura TLS y ejecuta:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

La web se sirve como estática y `/api/` se reenvía a Node en `127.0.0.1:4173`.

## Actualización

```bash
git pull --ff-only origin main
npm ci --omit=dev
sudo systemctl restart palatlas
curl -fsS https://palatlas.lyokodev.com/api/news
systemctl --no-pager --full status palatlas
```

Haz backup de `data/palatlas.sqlite` antes de actualizar. No expongas el puerto 4173 directamente; usa HTTPS en nginx.

## Cuenta y recuperación

El endpoint `/api/auth/request-reset` devuelve el token para desarrollo local. En producción debe conectarse a un proveedor de email antes de habilitar recuperación de contraseña para usuarios finales.