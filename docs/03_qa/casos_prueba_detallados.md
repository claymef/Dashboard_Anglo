# Casos de Prueba Detallados y Resultados de Ejecución

**Código:** QA-CASE-001  
**Proceso:** Verificación y validación - ISO/IEC/IEEE 12207:2017  
**Estado:** **Ejecutado y Aprobado**  
**Fecha de Ejecución:** 21 de Julio de 2026  
**Ambiente:** Docker Container (`dashboard-anglo-container`) / Nginx Port 8082  

---

## 1. Casos de Prueba de Infraestructura y Despliegue

### CP-01 - Despliegue de Contenedor Docker y Nginx
* **Requisito:** RNF-01 / RNF-02  
* **Precondición:** Docker Engine en ejecución en el entorno local.  
* **Pasos:**
  1. Ejecutar `docker compose up -d --build`.
  2. Verificar estado de contenedores con `docker ps`.
* **Resultado esperado:** Contenedor compilado, activo en puerto 8082 y sirviendo la app.
* **Resultado obtenido:** **EXITOSO (PASS)**.
* **Evidencia:** `docs/03_qa/evidencias/01_docker_ps.png` y `02_docker_desktop.png`

---

### CP-02 - Verificación de Endpoint Healthcheck
* **Requisito:** RNF-01  
* **Pasos:** Consultar el endpoint HTTP `http://localhost:8082/health`.
* **Resultado esperado:** Respuesta HTTP 200 OK con el cuerpo del mensaje de estado del servidor Nginx.
* **Resultado obtenido:** **EXITOSO (PASS)**.
* **Evidencia:** `docs/03_qa/evidencias/05_healthcheck_endpoint.png`

---

## 2. Casos de Prueba Funcionales y de Interfaz

### CP-08 - Activación del modo oscuro

**Requisito:** RF-05 / CHG-001  
**Precondición:** Aplicación cargada en la versión candidata dentro del contenedor.  
**Pasos:**
1. Abrir el dashboard (`http://localhost:8082`).
2. Identificar el control de tema.
3. Activar el modo oscuro.
4. Revisar navegación, contenido, KPIs y gráficas.
5. Interactuar con una pestaña y con los controles 3D.
6. Desactivar el modo oscuro.

**Resultado esperado:** El tema cambia sin recarga, conserva la legibilidad y no altera valores ni funciones.  
**Resultado obtenido:** **EXITOSO (PASS)**.  
**Evidencia:** `docs/03_qa/evidencias/03_navegador_dashboard.png`

---

### CP-09 - Contenido completo de pestañas

**Requisito:** RF-02 / CHG-002  
**Pasos:** Seleccionar cada pestaña y verificar título, contenido, estado activo y transición.

**Resultado esperado:** Las cuatro pestañas muestran contenido intencional y no dejan el panel vacío.  
**Resultado obtenido:** **EXITOSO (PASS)**.  
**Evidencia:** `docs/03_qa/evidencias/03_navegador_dashboard.png`

---

### CP-10 - Adaptación de layout

**Requisito:** CHG-003  
**Pasos:** Evaluar 1440x900, 1280x800, 1024x768 y una resolución móvil simulada en el navegador.

**Resultado esperado:** El contenido principal sigue siendo accesible o la limitación está declarada y aprobada.  
**Resultado obtenido:** **EXITOSO (PASS)**.  
**Evidencia:** `docs/03_qa/evidencias/03_navegador_dashboard.png`

---

### CP-11 - Datos demostrativos

**Requisito:** CHG-004  
**Pasos:** Revisar textos, KPIs y etiquetas de fuente en la interfaz desplegada.

**Resultado esperado:** Ningún dato simulado se presenta como información oficial o en tiempo real.  
**Resultado obtenido:** **EXITOSO (PASS)**.  
**Evidencia:** `docs/03_qa/evidencias/03_navegador_dashboard.png`

---

## 3. Registro de Ejecución Final

| Caso | Fecha | Ambiente | Resultado | Evidencia | Ejecutor |
|---|---|---|---|---|---|
| **CP-01** | 21/07/2026 | Docker Port 8082 | **EXITOSO** | `01_docker_ps.png` | Christian / Fidel |
| **CP-02** | 21/07/2026 | Endpoint `/health` | **EXITOSO** | `05_healthcheck_endpoint.png` | Christian / Fidel |
| **CP-08** | 21/07/2026 | Navegador (Nginx) | **EXITOSO** | `03_navegador_dashboard.png` | Fidel / Christian |
| **CP-09** | 21/07/2026 | Navegador (Nginx) | **EXITOSO** | `03_navegador_dashboard.png` | Fidel / Christian |
| **CP-10** | 21/07/2026 | Navegador (Nginx) | **EXITOSO** | `03_navegador_dashboard.png` | Fidel / Christian |
| **CP-11** | 21/07/2026 | Navegador (Nginx) | **EXITOSO** | `03_navegador_dashboard.png` | Fidel / Christian |