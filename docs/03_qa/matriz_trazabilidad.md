# Matriz de trazabilidad de requisitos y pruebas

**Código:** QA-TRACE-001  
**Proceso:** Verificación, validación, documentación y configuración - ISO/IEC/IEEE 12207:2017  
**Estado:** Completado y Verificado  

| Requisito/cambio | Descripción | Archivo o módulo | Prueba | Evidencia (Ruta) | Estado |
|---|---|---|---|---|---|
| **RF-01** | Indicadores ejecutivos | `App.jsx`, `HoloDashboard.jsx` | CP-01 | `docs/03_qa/evidencias/seed-data-verificacion.png` | Cumplido |
| **RF-02** | Navegación por módulos | `HoloDashboard.jsx` | CP-02, CP-09 | `docs/03_qa/evidencias/seed-data-inversion.png`, `seed-data-aliados.png` | Cumplido |
| **RF-03** | Cambio de tema claro/oscuro | `HoloDashboard.jsx`, `index.css` | CP-03 | `docs/03_qa/evidencias/modo-claro-dashboard.png`, `modo-oscuro-dashboard.png` | Cumplido |
| **RF-04** | Visualización 3D e interfaz | `App.jsx` | CP-04 | `docs/03_qa/evidencias/main-docker-dashboard.png` | Cumplido |
| **RF-05 / CHG-001** | Corrección de contraste y paleta | `App.jsx`, `HoloDashboard.jsx`, CSS | CP-08 | `docs/03_qa/evidencias/modo-claro-dashboard.png` | Cumplido |
| **CHG-003** | Completar pestañas del dashboard | CSS / Layout | CP-10 | `docs/03_qa/evidencias/pestanas-verificacion.md` | Cumplido |
| **CHG-004** | Documentar arquitectura objetivo | Diagramas / Docs | CP-11 | `docs/02_desarrollo/diagramas/arquitectura.png` | Cumplido |
| **RNF-01** | Build reproducible Docker | `package.json`, `Dockerfile` | CP-06 | `docs/03_qa/evidencias/main-docker-build.png` | Cumplido |
| **RNF-02** | Despliegue local y resiliencia | `docker-compose.yml`, Nginx | CP-07 | `docs/03_qa/evidencias/main-docker-up.png`, `main-docker-health.png`, `main-docker-logs.png`, `main-docker-restart.png` | Cumplido |
| **RNF-04** | Calidad visual y legibilidad | `index.css`, `App.css` | CP-03, CP-08 | `docs/03_qa/evidencias/modo-oscuro-dashboard.png` | Cumplido |

---

## Regla de completitud (ISO/IEC/IEEE 12207)

Un requisito se considera formalmente **trazado y cerrado** cuando cuenta con:
1. Requisito / RFC asignado.
2. Archivo fuente o módulo implementado.
3. Caso de prueba asociado.
4. Evidencia gráfica o log generado en repositorio.
5. Estado verificado como **Cumplido**.