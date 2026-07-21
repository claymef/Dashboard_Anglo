# Evidencia de verificación - datos semilla

**Caso:** CP-11  
**Rama:** `feature/seed-data`  
**Versión de semilla:** `seed-1.0.0`  
**Fecha:** 2026-07-20  
**Ejecutor:** Yoset Cozco  
**Estado:** Verificación técnica aprobada; captura visual pendiente

## Implementación verificada

- Fuente: `src/data/seedData.js`.
- KPIs conectados desde `seedDashboardData.kpis`.
- La aplicación no requiere API ni base de datos.
- Los datos se identifican como demostrativos.

## Verificación de build y contenedor

| Verificación | Resultado |
|---|---|
| `npm ci` dentro de Docker | Aprobado |
| `npm run build` dentro de Docker | Aprobado |
| Imagen `dashboard-anglo:local` | Creada |
| Contenedor `dashboard-anglo-local` | En ejecución |
| Página `http://localhost:8081/` | HTTP 200 |
| Healthcheck `/health` | HTTP 200, `ok` |

## Evidencia visual

El navegador integrado no estuvo disponible durante esta ejecución. Debe capturarse una imagen con el dashboard abierto en `http://localhost:8081/` y anexarse aquí antes de cerrar CP-11.

**Ruta sugerida:** `docs/03_qa/evidencias/seed-data-dashboard.png`.
