# Despliegue de PalAtlas

## Requisitos

- Node.js 24 o superior.
- nginx con HTTPS.
- Usuario de servicio con permisos sobre `/home/lyokodev/docker/palatlas/data`.

## Instalación

```bash
mkdir -p /home/lyokodev/docker/palatlas

cd /home/lyokodev/docker/palatlas
npm ci --omit=dev

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

## VPS LyokoDev

El despliegue activo usa el usuario lyokodev y el directorio /home/lyokodev/docker/palatlas. El dominio palatlas.lyokodev.com termina TLS en nginx y reenvía web y API al contenedor en 127.0.0.1:4173. Las credenciales SSH se mantienen fuera de este repositorio, en el inventario operativo del VPS.
