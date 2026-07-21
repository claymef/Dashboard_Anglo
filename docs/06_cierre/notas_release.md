# Notas de release

**Código:** CIE-REL-001  
**Versión:** `v1.1.0`  
**Proceso:** Suministro, configuración, validación y cierre - ISO/IEC/IEEE 12207:2017  
**Estado:** **Aprobado para Release / Despliegue Exitoso**  
**Fecha de Publicación:** 21 de Julio de 2026  

---

## Incluido en la Versión `v1.1.0`

- **Contenerización y Despliegue Docker:** Empaquetado completo de la aplicación React + Vite sobre un servidor Nginx servido en el puerto host 8082 (`dashboard-anglo-container`).
- **Endpoint Healthcheck:** Configuración y verificación exitosa del endpoint `/health` (HTTP 200 OK).
- **Modo Oscuro e Interfaz Holográfica:** Implementación y validación del selector de tema visual sin recarga ni alteración de métricas.
- **Correcciones y Resolución de Conflictos:** Sincronización completa con `origin/main`, resolución de conflictos Git en `arquitectura.md` y cierre del Bug Log (100% de incidencias resueltas).
- **Documentación Completa ISO 12207:** Actualización e integración de manuales de usuario, arquitectura objetivo, pruebas de QA, matriz de trazabilidad y reporte de evidencias.

---

## No Incluido (Fuera del Alcance Acordado)

- Datos de producción en tiempo real (se utilizan datos demostrativos simulados según CHG-004 / RFC-004).
- Módulo de autenticación y gestión de usuarios.
- Exportación automatizada a reportes PDF.
- Integración directa con APIs externas o bases de datos de backend.
- Funcionalidades de IA / Machine Learning reales.

---

## Evidencia de Release

| Elemento | Valor |
|---|---|
| **Commit de release** | Integrado en `feature/main-docker-christian` y sincronizado con `main` |
| **Tag de versión** | `v1.1.0` |
| **Pull Request** | PR #2 & PR #3 aprobados y fusionados en GitHub (`origin/main`) |
| **Build status** | Exitoso (`docker compose up -d --build`) |
| **Dictamen QA** | 100% Aprobado (Fidel / Christian) |
| **Aceptación Cliente** | Validado y verificado en entorno simulado (C. Mollo) |