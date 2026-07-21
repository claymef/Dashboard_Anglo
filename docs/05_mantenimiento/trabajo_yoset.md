# Trabajo inicial de Yoset - mantenimiento y despliegue

**Responsable:** Yoset Cozco  
**Proceso:** Mantenimiento, configuración, verificación y operación - ISO/IEC/IEEE 12207:2017  
**Estado:** En curso

## Objetivo

Preparar la base técnica para reproducir el despliegue local, registrar el impacto de los cambios aprobados por el cliente y dejar trazabilidad entre arquitectura, contenedores, código y pruebas.

## Actividades iniciales

| ID | Actividad | Evidencia | Estado |
|---|---|---|---|
| Y-01 | Revisar baseline de código y dependencias | `package.json`, `package-lock.json` | En curso |
| Y-02 | Crear Dockerfile multi-etapa | `Dockerfile` | Completada |
| Y-03 | Crear compose local | `docker-compose.yml` | Completada |
| Y-04 | Configurar Nginx y healthcheck | `docker/nginx.conf` | Completada |
| Y-05 | Registrar arquitectura Mermaid | `docs/02_desarrollo/arquitectura.mmd` | Completada |
| Y-06 | Generar diagramas SVG/PNG | `docs/02_desarrollo/diagramas/` | Pendiente de herramienta |
| Y-07 | Ejecutar build, levantar contenedor y probar `health` | logs y capturas | Pendiente |
| Y-08 | Implementar cambios de RFC aprobados | rama y PR | Pendiente |

## Criterios de aceptación

- `docker compose config` no presenta errores.
- La imagen se construye usando `npm ci` y `npm run build`.
- El contenedor responde en `http://localhost:8081`.
- `/health` devuelve `ok`.
- La aplicación cargada es la misma que la versión compilada.
- La configuración reproducible queda versionada.
- Secretos, volúmenes y datos locales permanecen ignorados.
