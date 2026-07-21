# Contenedores locales

**Proceso:** Configuración, suministro, operación y mantenimiento - ISO/IEC/IEEE 12207:2017.

## Ejecución

```bash
docker compose build
docker compose up -d
```

Abrir `http://localhost:8081`.

Comprobar salud:

```bash
curl http://localhost:8081/health
```

Detener:

```bash
docker compose down
```

Se versionan `Dockerfile`, `docker-compose.yml`, `.dockerignore` y `docker/nginx.conf` porque forman parte del despliegue reproducible. No se versionan secretos, overrides locales, volúmenes, datos persistentes, logs ni imágenes exportadas.
