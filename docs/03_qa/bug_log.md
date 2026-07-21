# Registro de incidencias

**Código:** QA-BUG-001  
**Proceso:** Resolución de problemas - ISO/IEC/IEEE 12207:2017  
**Responsable:** Fidel  
**Apoyo:** Yoset Cozco  
**Estado:** **Cerrado y Verificado (100% Resuelto)**  

---

## Tabla de Incidencias Registradas

| ID | Fecha | Severidad | Descripción | Reproducción | Responsable | Estado | Evidencia / Solución |
|---|---|---|---|---|---|---|---|
| **BUG-001** | 21/07/2026 | Media | Conflicto de puertos al desplegar Nginx en puerto 80 local. | `docker compose up` | Fidel / Christian | **Verificado** | Reconfigurado a puerto `8082:80` en `docker-compose.yml`. (`01_docker_ps.png`) |
| **BUG-002** | 21/07/2026 | Alta | Marcas de conflicto Git en `arquitectura.md` tras merge. | `git merge feature/...` | Fidel / Christian | **Verificado** | Conflicto resuelto manualmente en PR #2. Repositorio unificado. |
| **BUG-003** | 21/07/2026 | Baja | Verificación de renderizado de modo oscuro y canvas 3D. | Navegación CP-08 | Fidel / Yoset | **Verificado** | Sin errores de consola, carga completa en puerto 8082. (`03_navegador_dashboard.png`) |

---

## Flujo de estados y Cierre

`Abierto` → `En corrección` → `Resuelto` → `Verificado`.

* **Dictamen del Líder de QA:** No se cierra una incidencia sin prueba de verificación y referencia al commit o PR que la resolvió. Todas las incidencias registradas fueron **corregidas, verificadas e integradas** satisfactoriamente en la versión final desplegada.