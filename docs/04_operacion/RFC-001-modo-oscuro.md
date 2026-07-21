# RFC-001 - Solicitud formal de cambio: modo oscuro

**Código:** OPE-RFC-001  
**Proceso:** Operación, gestión de cambios y mantenimiento - ISO/IEC/IEEE 12207:2017  
**Solicitante:** C. Mollo  
**Responsable de análisis:** Yoset Cozco  
**Prioridad:** Media-alta  
**Estado:** Aprobado para análisis de impacto

## Justificación

Incorporar un modo oscuro para reducir el brillo durante la visualización nocturna en salas de control y conservar la legibilidad de indicadores y controles.

## Solicitud del cliente

El cliente Harry Mollo Mayta solicita que el usuario pueda activar el modo oscuro durante una presentación nocturna sin modificar los indicadores ni recargar la página.

## Alcance del cambio

Incluye estilos globales, componentes visuales, estados de interacción y revisión de contraste. No cambia datos, arquitectura de negocio ni controles funcionales.

## Criterios de aceptación

- El usuario puede activar el modo oscuro.
- El tema se aplica de manera consistente.
- KPIs, pestañas, mini-gráficas y controles 3D continúan siendo legibles.
- Las pruebas de regresión no detectan defectos críticos.
- El cambio se libera en `v1.1.0`.
- La interfaz identifica que los datos son demostrativos.
- La preferencia no necesita persistir entre sesiones en esta versión.

## Aprobación

| Rol | Nombre | Fecha | Resultado |
|---|---|---|---|
| Cliente | C. Mollo | Pendiente | Pendiente |
| Mantenimiento | Yoset Cozco | Pendiente | Pendiente |
