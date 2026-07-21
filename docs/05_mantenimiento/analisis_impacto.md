# Análisis de impacto del cambio

**Código:** MANT-IMP-001  
**Proceso:** Mantenimiento, gestión técnica y gestión de riesgos - ISO/IEC/IEEE 12207:2017  
**Responsable:** Yoset Cozco  
**Apoyo:** Christian  
**RFC relacionada:** `docs/04_operacion/RFC-001-modo-oscuro.md`  
**Estado:** Pendiente

## Elementos afectados

| Elemento | Impacto previsto | Riesgo | Mitigación |
|---|---|---|---|
| `index.css` | Variables y colores globales | Contraste insuficiente | Revisar estados y lectura |
| `App.css` | Paneles y controles | Inconsistencia visual | Prueba visual completa |
| `App.jsx` / `HoloDashboard.jsx` | Activación del tema | Estado no persistente o roto | Pruebas funcionales |
| Escena 3D | Relación entre tema y contraste | Pérdida de profundidad | Revisar iluminación |
| Rendimiento | Nuevos estilos/estado | Degradación percibida | Comparar antes/después |

## Decisión

**Recomendación:** Aprobar el cambio condicionado a pruebas de contraste, interacción, build y regresión.

**Evidencia:** archivos afectados, riesgos, decisión, rama y revisión técnica.
