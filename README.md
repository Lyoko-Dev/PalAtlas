# PalAtlas

PalAtlas es un compañero de viaje para tus partidas de Palworld: Paldex, cría, mapa, materiales, tecnologías, objetivos y progreso sincronizable.

## Funciones

- Panel inicial con nivel, desbloqueos y zonas recomendadas.
- Paldex con filtros, colección y estadísticas.
- Breeding lab con pasivas, rutas directas y cruces favoritos.
- Mapa con ubicaciones, niveles mínimos y lugares visitados.
- Tecnologías filtradas por nivel.
- Materiales, recetas y lista de recolección.
- Objetivos personalizados y modo sesión.
- Importación JSON/CSV y copias de seguridad.
- PWA offline con IndexedDB.
- Cuenta, login y sincronización por usuario.

## Desarrollo local

Requisitos: Node.js 24+ (usa `node:sqlite`).

```powershell
npm test
npm start
```

Abre `http://localhost:4173`. La API y la interfaz se sirven desde el mismo proceso.

La cuenta local requiere una contraseña de al menos 8 caracteres. La base SQLite se crea en `data/palatlas.sqlite`; ese archivo no se versiona.

## API

- `POST /api/auth/register` — `{ "email", "password" }`.
- `POST /api/auth/login` — devuelve un token Bearer.
- `POST /api/auth/logout`.
- `GET /api/auth/me`.
- `POST /api/auth/request-reset` — en desarrollo devuelve el token; en producción debe conectarse a un proveedor de email.
- `POST /api/auth/reset`.
- `GET|POST /api/sync` — requiere `Authorization: Bearer <token>`.

## Despliegue

La configuración de producción está en `deploy/`:

- `deploy/nginx/palatlas.lyokodev.com`: archivos estáticos y proxy `/api` hacia Node.
- `deploy/systemd/palatlas.service`: servicio Node con reinicio automático.
- `docs/DEPLOYMENT.md`: pasos de instalación, actualización y comprobación.

En producción se recomienda HTTPS en nginx, almacenamiento persistente para SQLite, backups de `data/palatlas.sqlite` y secretos fuera del repositorio.

## Estado del proyecto

La aplicación está preparada como PWA y como base para empaquetarla con Capacitor/TWA para Android. Antes de publicar en Play Store hay que generar el AAB, configurar Play App Signing, política de privacidad y pruebas en dispositivos reales.