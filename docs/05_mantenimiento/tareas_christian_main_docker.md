# Tareas de Christian Layme – rama `feature/main-docker-christian`

Esta lista contiene únicamente actividades nuevas del contenedor aislado `main-docker`. Las pruebas Docker generales ya documentadas en QA no deben repetirse.

## Actividades

1. Ejecutar `docker compose build` desde `main-docker/`.
2. Ejecutar `docker compose up -d` y confirmar el contenedor `dashboard-anglo-main-docker`.
3. Verificar el dashboard en `http://localhost:8082`.
4. Verificar `http://localhost:8082/health` y registrar la respuesta.
5. Revisar logs del contenedor y documentar advertencias o errores.
6. Reiniciar el servicio y comprobar que mantiene su funcionamiento.
7. Probar desde el contenedor las rutas Resumen, Impacto, Inversión y Aliados.
8. Probar desde el contenedor los modos claro y oscuro.
9. Registrar solo diferencias respecto al despliegue principal ya aprobado.
10. Corregir exclusivamente problemas encontrados en esta rama.
11. Actualizar el informe final y el PPTX con los nuevos resultados.
12. Entregar un commit con las correcciones y las evidencias.

## Evidencias nuevas

- `main-docker-build.png`
- `main-docker-up.png`
- `main-docker-dashboard.png`
- `main-docker-health.png`
- `main-docker-logs.png`
- `main-docker-restart.png`

Las capturas deben guardarse en `docs/03_qa/evidencias/` y enlazarse desde el informe final y la presentación de Drive.

## Criterio de aceptación

La rama se considera lista cuando el contenedor construye, inicia, responde en el puerto 8082, devuelve `ok` en `/health`, conserva las funciones principales y dispone de evidencias nuevas sin duplicar las ya existentes.
