# RFC-003 - Adaptación a resoluciones distintas

**Código:** OPE-RFC-003  
**Proceso:** Operación, requisitos, desarrollo y mantenimiento - ISO/IEC/IEEE 12207:2017  
**Prioridad:** Media  
**Versión propuesta:** `v1.2.0`  
**Estado:** Pendiente de decisión

## Solicitud

Evaluar y adaptar el dashboard para resoluciones distintas a la pantalla de demostración de 1400x850.

## Justificación

La interfaz usa dimensiones fijas. Esto puede provocar recortes, desplazamiento o pérdida de legibilidad en portátiles y pantallas pequeñas.

## Opciones

1. Mantener 1400x850 y declarar la resolución objetivo.
2. Crear layout responsive para escritorio y portátil.
3. Crear una vista alternativa simplificada para pantallas pequeñas.

## Criterios de decisión

- Tiempo disponible.
- Impacto en la escena 3D.
- Legibilidad.
- Complejidad de CSS.
- Alcance académico.

## Archivos probables

`src/index.css`, `src/App.css`, posiblemente `src/App.jsx`, además de arquitectura, manual, pruebas y matriz de riesgos.
