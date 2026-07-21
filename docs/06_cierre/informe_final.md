# Informe Final y Cierre del Proyecto

**Código:** CIE-INF-001  
**Producto:** Dashboard Anglo American – Quellaveco  
**Proceso ISO/IEC/IEEE 12207:** Suministro, evaluación, configuración y cierre  
**Líder de Proyecto:** Marco Ponce de León  
**Responsable de Despliegue:** Christian Layme  
**Versión:** 1.0 | 21 de julio de 2026  
**Estado:** Completado para Revisión y Aprobación  

> **Nota de Alcance:** Este informe documenta una entrega académica y demostrativa. El marco ISO/IEC/IEEE 12207:2017 se utiliza como guía de organización, trazabilidad y mejora continua; este documento no constituye una certificación de conformidad.

---

## 1. Resumen Ejecutivo

Se reorganizó y optimizó una aplicación web ejecutiva (React/Vite) dentro de un ciclo de vida formalizado de software. Se formalizaron requisitos y cambios, se documentó la arquitectura base y objetivo, se incorporaron datos semilla controlados, se completaron las pestañas (*Resumen*, *Impacto*, *Inversión*, *Aliados*), se implementaron los modos claro/oscuro con contraste garantizado y se preparó un despliegue local reproducible mediante **Docker Compose** y **Nginx**.

El resultado es una versión demostrable y verificable del dashboard, respaldada por un expediente completo de evidencias visuales, registros de salud (`/health`), trazabilidad de requisitos a pruebas e historial de cambios.

---

## 2. Alcance y Resultados Entregados

| Elemento | Estado | Evidencia Principal |
| :--- | :--- | :--- |
| **Requisitos Definidos (SRS)** | Cumplido | `docs/01_inicio/SRS.md` |
| **Arquitectura Objetivo Documentada** | Cumplido | `docs/02_desarrollo/arquitectura.md` y diagramas SVG/PNG |
| **Pestañas y Datos Semilla** | Cumplido | `docs/03_qa/evidencias/seed-data-verificacion.png` |
| **Modo Claro / Oscuro (RFC-001)** | Cumplido | `docs/03_qa/evidencias/modo-claro-dashboard.png` y `modo-oscuro-dashboard.png` |
| **Pruebas y Matriz de Trazabilidad** | Cumplido | `docs/03_qa/matriz_trazabilidad.md` |
| **Despliegue Docker Aislado (`main-docker`)** | Cumplido | `docs/03_qa/evidencias/main-docker-*.png` |
| **Evaluación de Operación y `/health`** | Cumplido | `docs/04_operacion/evaluacion_operacion.md` |
| **Propuesta de Release (`v1.1.0`)** | Cumplido | `docs/06_cierre/notas_release.md` |

---

## 3. Índice de Evidencias e Infraestructura Docker

Las evidencias visuales y de ejecución del proyecto se encuentran organizadas en `docs/03_qa/evidencias/`:

* **Pruebas de Interfaz y Datos Semilla:**
  * `seed-data-verificacion.png` | `seed-data-inversion.png` | `seed-data-aliados.png`
  * `modo-claro-dashboard.png` | `modo-oscuro-dashboard.png`
* **Pruebas de Despliegue de Infraestructura (`feature/main-docker-christian`):**
  * `main-docker-build.png` | Compilación exitosa de la imagen Docker.
  * `main-docker-up.png` | Puesta en marcha de contenedores Nginx/React.
  * `main-docker-dashboard.png` | Verificación web en el puerto `8082`.
  * `main-docker-health.png` | Verificación de endpoint de salud `http://localhost:8082/health` (`HTTP 200`).
  * `main-docker-logs.png` | Inspección de registros estables sin errores.
  * `main-docker-restart.png` | Prueba de resiliencia y reinicio de servicio.

> **Aclaración Técnica de Puertos:** El entorno base de desarrollo operó en el puerto `8081`, mientras que la verificación del contenedor aislado asignado a Christian Layme se ejecutó de forma independiente en el puerto `8082` (`http://localhost:8082`), demostrando aislamiento de entornos y la ausencia de colisiones de puertos.

---

## 4. Evaluación frente al Marco ISO/IEC/IEEE 12207:2017

* **Gobierno y Gestión (`docs/00_gobierno/`):** Asignación de roles, matriz de riesgos y actas de revisión.
* **Acuerdo e Inicio (`docs/01_inicio/`):** Contrato simulado, catálogo de requisitos y alcance delimitado.
* **Desarrollo y Arquitectura (`docs/02_desarrollo/`):** Especificación de arquitectura objetivo y manuales de usuario.
* **Verificación y QA (`docs/03_qa/`):** Casos de prueba detallados, matriz de trazabilidad y capturas de pantalla.
* **Operación y Mantenimiento (`docs/04_operacion/` y `docs/05_mantenimiento/`):** Evaluación operativa, manual de comandos Docker y gestión de solicitudes de cambio (RFC).
* **Cierre y Entrega (`docs/06_cierre/` y `docs/07_entrega/`):** Informe final, acta de entrega y lista de chequeo.

---

## 5. Lecciones Aprendidas y Mejora Continua

1. **Gestión de Entornos Locales:** Se identificó la importancia de verificar que el daemon de Docker Desktop (`dockerDesktopLinuxEngine`) esté activo en Windows antes de lanzar comandos `docker compose`.
2. **Tokens de Estilo y Accesibilidad:** Definir variables de contraste y color desde la fase de requisitos evita retrabajos en CSS durante etapas avanzadas.
3. **Trazabilidad Continua:** Cada artefacto desarrollado debe contar con su correspondiente prueba, evidencia gráfica y referencia cruzada en la matriz de trazabilidad.

---

## 6. Aprobación y Firma de Cierre

| Rol | Nombre | Fecha | Estado |
| :--- | :--- | :--- | :--- |
| **Cliente / Revisor** | C. Mollo | 21/07/2026 | Aprobado |
| **Líder de Proyecto** | Marco Ponce de León | 21/07/2026 | Aprobado |
| **Despliegue / Docker** | Christian Layme | 21/07/2026 | Aprobado |
| **Desarrollo / Mantenimiento** | Yoset Cozco | 21/07/2026 | Aprobado |
| **Análisis Operativo** | Harry Mollo Mayta | 21/07/2026 | Aprobado |
| **Control de Calidad (QA)** | Fidel | 21/07/2026 | Aprobado |