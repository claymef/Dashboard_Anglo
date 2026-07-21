# Plan de pruebas

**Código:** QA-PLAN-001  
**Proceso:** Verificación y validación - ISO/IEC/IEEE 12207:2017  
**Responsable:** Fidel  
**Apoyo:** Christian  
**Versión evaluada:** 1.1.0 (Docker Nginx Port 8082)  
**Estado:** **Aprobado y Ejecutado al 100%**  

---

## Estrategia de Pruebas

Se ejecutaron pruebas funcionales, visuales, de interacción, compatibilidad básica, instalación/despliegue en contenedor Docker y pruebas de regresión tras la integración de ramas. Cada resultado cuenta con fecha, ejecutor, versión evaluada y su respectiva evidencia auditable en `docs/03_qa/evidencias/`.

---

## Registro de Pruebas Ejecutadas

| ID | Caso | Pasos resumidos | Resultado esperado | Estado | Evidencia |
|---|---|---|---|---|---|
| **CP-01** | Carga inicial | Despliegue en Docker y apertura de la app en `http://localhost:8082` | Dashboard visible sin errores bloqueantes en Nginx | **Aprobado (PASS)** | `01_docker_ps.png` / `02_docker_desktop.png` |
| **CP-02** | Pestañas | Seleccionar Resumen, Impacto, Inversión y Aliados | Cada vista responde correctamente y muestra contenido dinámico | **Aprobado (PASS)** | `03_navegador_dashboard.png` |
| **CP-03** | KPIs | Revisar tarjetas métricas y mini-gráficas | Datos y etiquetas legibles en la interfaz holográfica | **Aprobado (PASS)** | `03_navegador_dashboard.png` |
| **CP-04** | Rotación 3D | Interactuar con el Canvas Three.js | Rotación y perspectiva fluidas, sin pérdida de rendimiento | **Aprobado (PASS)** | `03_navegador_dashboard.png` |
| **CP-05** | Navegador | Ejecutar en navegador objetivo (Chrome/Edge/Firefox) | Interfaz utilizable, estable y adaptativa | **Aprobado (PASS)** | `03_navegador_dashboard.png` |
| **CP-06** | Build & Health | Ejecutar build de contenedor y consultar `/health` | HTTP 200 OK y compilación limpia de Nginx | **Aprobado (PASS)** | `05_healthcheck_endpoint.png` / `06_terminal_verification.png` |
| **CP-07** | Regresión base | Repetir CP-01 a CP-06 tras resolución de merge | Sin regresiones críticas, logs limpios en Docker | **Aprobado (PASS)** | `04_docker_logs.png` |
| **CP-08** | Modo oscuro | Activar y desactivar el control de tema | Cambio de tema consistente, alta legibilidad y conservación de funciones | **Aprobado (PASS)** | `03_navegador_dashboard.png` |

---

## Criterio de Salida y Dictamen
**Criterio cumplido:** No existe ningún defecto crítico abierto y el 100% de los casos de prueba (8/8) han sido ejecutados y aprobados conforme al plan de aseguramiento de calidad ISO/IEC/IEEE 12207:2017.