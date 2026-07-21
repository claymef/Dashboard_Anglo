# RFC-002 - Completar pestañas del dashboard

**Código:** OPE-RFC-002  
**Proceso:** Operación, requisitos, validación y mantenimiento - ISO/IEC/IEEE 12207:2017  
**Solicitante:** Cliente simulado  
**Prioridad:** Alta  
**Estado:** Pendiente de decisión

## Situación actual

La interfaz contiene botones para Resumen, Impacto, Inversión y Aliados, pero el código actual solo presenta contenido para Resumen e Impacto.

## Solicitud

Completar los contenidos de Inversión y Aliados con información demostrativa, consistente con el alcance académico.

## Alcance incluido

- Dos vistas nuevas.
- Títulos y textos demostrativos.
- Estado activo de navegación.
- Pruebas funcionales y visuales.
- Actualización del SRS, arquitectura, manual y QA.

## Fuera de alcance

- Conexión a fuentes reales.
- Filtros avanzados.
- Persistencia de datos.
- Exportación de reportes.

## Criterios de aceptación

- Las cuatro pestañas presentan contenido.
- La navegación no produce panel vacío.
- Los contenidos son claramente demostrativos.
- La transición funciona en cada pestaña.
- Las pruebas CP-02 y CP-09 son aprobadas.

## Archivos previstos

`src/HoloDashboard.jsx`, `docs/01_inicio/SRS.md`, `docs/02_desarrollo/arquitectura_objetivo.md`, `docs/03_qa/casos_prueba_detallados.md`.
