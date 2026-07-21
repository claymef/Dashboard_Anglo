# Despliegue

## Estado actual

El proyecto todavía no contiene una configuración de contenedores implementada. El siguiente paso técnico sería añadir un `Dockerfile` para construir la aplicación Vite y un `docker-compose.yml` para ejecutar el servicio web.

## Archivos que deben versionarse

- `Dockerfile`.
- `docker-compose.yml` base, sin secretos.
- `.dockerignore`.
- `deploy/README.md`.
- Documentación del procedimiento y puertos.

## Archivos que no deben versionarse

- `.env` y secretos.
- `docker-compose.override.yml` local.
- Volúmenes y datos generados.
- Logs de contenedores.
- Imágenes exportadas (`*.tar`, `*.tar.gz`).
- Certificados y claves privadas.

## Configuración propuesta

Para una aplicación Vite estática, la opción recomendada es un build de dos etapas:

1. Construir con Node/npm.
2. Servir `dist/` con Nginx o un servidor estático equivalente.

La configuración debe probarse localmente antes de documentarse como release.
