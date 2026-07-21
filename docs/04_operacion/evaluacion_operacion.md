# Evaluación de Operación (Simulada y Técnica)

**Código:** OPE-EVAL-001  
**Proceso:** Operación y validación - ISO/IEC/IEEE 12207:2017  
**Responsables:** C. Mollo (Funcional) y Christian Layme (Técnica/Docker)  
**Apoyo:** Fidel  
**Cliente:** Harry Mollo Mayta  
**Estado:** Evaluación completada; pendiente de confirmación formal  

---

## 1. Evaluación de Operación Ejecutiva (Usuario Final)

### Escenario
El usuario ejecutivo consulta el dashboard en una reunión simulada sobre indicadores de relaciones comunitarias de Quellaveco. Debe identificar rápidamente el resumen, cambiar de categoría y comprender los KPIs.

### Evaluación
| Criterio | Resultado | Observación |
|---|---|---|
| Carga y acceso | Aprobado | Verificado mediante servidor web Nginx en contenedor |
| Comprensión de navegación | Aprobado | Navegación fluida por módulos Resumen, Impacto, Inversión y Aliados |
| Legibilidad de KPIs | Aprobado | Contraste adecuado en modo claro y oscuro |
| Utilidad de la vista 3D | Aprobado | Componente interactivo responsivo |
| Rendimiento percibido | Aprobado | Carga rápida sobre servidor Nginx Alpine |
| Necesidad de modo oscuro | Aprobado | Implementado exitosamente según RFC-001 |

### Conclusión del cliente
**Resultado:** Aceptado con observaciones.  
**Observaciones:** completar Inversión y Aliados, implementar modo oscuro y rotular los datos como demostrativos.  
**Aceptación:** autoriza análisis e implementación de RFC-001 y RFC-002; RFC-003 queda diferida a `v1.2.0`.  
**Evidencia:** escenario, fecha, versión, observaciones y confirmación del cliente.  

---

## 2. Evaluación de Operación Técnica e Infraestructura (Docker)

### Entorno Verificado: Contenedor Aislado (`main-docker`)
**Responsable Técnico:** Christian Layme  
**Puerto de Servicio:** `8082`  
**Rama:** `feature/main-docker-christian`  

### Pruebas de Infraestructura y Comandos Operativos
| Paso | Comando | Propósito | Resultado | Evidencia Asociada |
| :--- | :--- | :--- | :--- | :--- |
| **1. Compilación** | `docker compose build` | Construir imagen Nginx/React | Éxito sin errores | `main-docker-build.png` |
| **2. Inicio** | `docker compose up -d` | Levantar servicio en puerto 8082 | Contenedor activo | `main-docker-up.png` |
| **3. Navegación** | HTTP `http://localhost:8082` | Validar UI y pestañas | Carga exitosa | `main-docker-dashboard.png` |
| **4. Health Check** | HTTP `http://localhost:8082/health` | Validar disponibilidad | `HTTP 200 OK` | `main-docker-health.png` |
| **5. Diagnóstico** | `docker compose logs` | Inspeccionar registros | Eventos estables | `main-docker-logs.png` |
| **6. Reinicio** | `docker compose restart` | Probar resiliencia | Servicio recuperado | `main-docker-restart.png` |

### Conclusión Técnica
El entorno `main-docker` en la rama `feature/main-docker-christian` responde de manera aislada en el puerto `8082`, cumpliendo con los criterios de monitoreo (`/health`) y resiliencia requeridos por la norma ISO/IEC/IEEE 12207.