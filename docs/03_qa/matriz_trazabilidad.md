# Matriz de trazabilidad de requisitos y pruebas

**Código:** QA-TRACE-001  
**Proceso:** Verificación, validación, documentación y configuración - ISO/IEC/IEEE 12207:2017  
**Estado:** En revisión

| Requisito/cambio | Diseño | Archivo o módulo | Prueba | Evidencia | Estado |
|---|---|---|---|---|---|
| RF-01 | DEV-ARQ-001 | `App.jsx`, `HoloDashboard.jsx` | CP-01 | Captura/caso | Pendiente |
| RF-02 | DEV-ARQ-002 | `HoloDashboard.jsx` | CP-02, CP-09 | Capturas | Pendiente |
| RF-03 | DEV-ARQ-001 | `HoloDashboard.jsx`, `index.css` | CP-03 | Captura | Pendiente |
| RF-04 | DEV-ARQ-001 | `App.jsx` | CP-04 | Video/captura | Pendiente |
| RF-05 / CHG-001 | DEV-ARQ-002 | `App.jsx`, `HoloDashboard.jsx`, CSS | CP-08 | Antes/después | Pendiente |
| CHG-003 | DEV-ARQ-002 | CSS/layout | CP-10 | Resoluciones | Pendiente |
| CHG-004 | DEV-ARQ-002 | `HoloDashboard.jsx` | CP-11 | Captura | Pendiente |
| RNF-01 | DEV-MAN-001 | `package.json` | CP-06 | Log instalación | Pendiente |
| RNF-02 | DEV-MAN-001 | Proyecto completo | CP-07 | Log build | Pendiente |
| RNF-04 | DEV-ARQ-002 | `index.css`, `App.css` | CP-03, CP-08 | Revisión visual | Pendiente |

## Regla de completitud

Un requisito solo está trazado cuando tiene diseño, implementación, prueba, resultado y aprobación. Un cambio no puede cerrarse solo con un commit.
