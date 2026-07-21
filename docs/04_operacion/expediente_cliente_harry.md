# Expediente simulado del cliente: Harry Mollo Mayta

**Código:** OPE-CLI-001  
**Proceso:** Adquisición, operación, validación y gestión de cambios - ISO/IEC/IEEE 12207:2017  
**Cliente/adquiriente simulado:** Harry Mollo Mayta  
**Proyecto:** Dashboard web 3D Anglo - Quellaveco  
**Estado:** En revisión por el cliente

## 1. Declaración del rol

Harry Mollo Mayta representa al cliente/adquiriente y usuario ejecutivo. Su función es expresar la necesidad, delimitar el uso previsto, revisar los entregables desde la perspectiva del usuario, solicitar cambios, priorizarlos y aceptar o rechazar la versión entregada.

Este expediente registra las actividades del cliente dentro del proyecto organizado con ISO/IEC/IEEE 12207:2017. Define la necesidad, el uso previsto, las solicitudes de cambio, las decisiones de alcance y las condiciones de aceptación.

## 2. Necesidad del cliente

Como representante del cliente, solicito una interfaz web 3D que permita presentar de forma visual y ejecutiva los indicadores de relaciones comunitarias del proyecto Quellaveco.

La solución debe permitir:

- Mostrar un resumen ejecutivo.
- Explorar las categorías Impacto, Inversión y Aliados.
- Visualizar KPIs de cobertura, alcance y retorno.
- Utilizar una interacción 3D controlada.
- Presentar una interfaz adecuada para una demostración ejecutiva.
- Reducir el brillo de la interfaz mediante un modo oscuro para sesiones nocturnas.

## 3. Uso previsto

El dashboard se utilizará en una presentación ejecutiva, con información preparada para la demostración y la evaluación del producto. El usuario debe poder comprender el estado visual del contenido sin consultar documentación técnica.

## 4. Límites aceptados por el cliente

El cliente acepta que esta versión:

- No se conecta a bases de datos reales.
- No representa información oficial ni en tiempo real.
- No incluye autenticación.
- No incluye perfiles ni permisos.
- No incluye exportación PDF.
- No incluye persistencia de preferencias, salvo que se apruebe posteriormente.
- No incluye un asistente de IA funcional.
- No constituye un sistema operativo de control minero.

## 5. Requisitos solicitados por el cliente

| ID cliente | Requisito | Prioridad | Criterio de aceptación |
|---|---|---|---|
| HC-01 | Ver un dashboard ejecutivo en una sola pantalla | Alta | La estructura principal se visualiza sin errores bloqueantes |
| HC-02 | Navegar por Resumen, Impacto, Inversión y Aliados | Alta | Cada opción muestra contenido intencional |
| HC-03 | Consultar KPIs legibles | Alta | Etiqueta, valor y descripción son distinguibles |
| HC-04 | Interactuar con la escena 3D sin perder el foco | Media | La rotación es limitada y controlable |
| HC-05 | Usar modo oscuro en visualización nocturna | Alta | El tema cambia sin perder contraste ni funciones |
| HC-06 | Reconocer que los datos son demostrativos | Alta | Existe una leyenda visible de datos referenciales |

## 6. Evaluación operativa simulada

### Escenario

Fecha simulada: 2026-07-20.  
Versión evaluada: baseline actual previa al mantenimiento.  
Ambiente: navegador moderno en equipo de escritorio.  
Ejecutor: Harry Mollo Mayta.

### Guion ejecutado

1. Abrir la aplicación.
2. Identificar el nombre del proyecto.
3. Revisar el resumen ejecutivo.
4. Consultar los KPIs.
5. Seleccionar Impacto.
6. Seleccionar Inversión.
7. Seleccionar Aliados.
8. Manipular la vista 3D.
9. Evaluar la legibilidad para una sesión nocturna.
10. Registrar solicitudes y observaciones.

### Resultado simulado

| Punto | Resultado | Observación del cliente |
|---|---|---|
| Carga inicial | Aceptable | El dashboard es visible |
| Resumen | Aceptable | Comunica la idea general |
| KPIs | Aceptable con observaciones | Debe aclararse que son datos demostrativos |
| Impacto | Aceptable | Tiene contenido visible |
| Inversión | Requiere corrección | La opción existe, pero debe completarse |
| Aliados | Requiere corrección | La opción existe, pero debe completarse |
| Interacción 3D | Aceptable | Debe mantenerse limitada |
| Visualización nocturna | Requiere mejora | Se solicita modo oscuro |

## 7. Solicitudes formales del cliente

### RFC-001: modo oscuro

Solicito un modo oscuro para reducir el brillo en salas de control o presentaciones nocturnas.

**Prioridad:** Alta.  
**Versión objetivo:** `v1.1.0`.  
**Aprobación solicitada:** análisis de impacto, implementación, pruebas y validación.

### RFC-002: completar pestañas

Solicito completar las vistas de Inversión y Aliados, ya que actualmente aparecen como opciones de navegación, pero no representan un contenido funcional completo.

**Prioridad:** Alta.  
**Versión objetivo:** `v1.1.0`.  
**Condición:** utilizar datos demostrativos claramente etiquetados.

### RFC-003: adaptación responsive

Solicito evaluar el comportamiento del dashboard en resoluciones distintas a la pantalla de demostración.

**Prioridad:** Media.  
**Versión objetivo:** `v1.2.0`, salvo que el equipo determine que es imprescindible para la entrega actual.

## 8. Decisiones del cliente

| Tema | Decisión simulada | Justificación |
|---|---|---|
| Modo oscuro | Aprobar para `v1.1.0` | Necesidad de sesiones nocturnas |
| Pestañas faltantes | Aprobar corrección para `v1.1.0` | Evitar navegación sin contenido |
| Responsive completo | Diferir a `v1.2.0` | No bloquear la entrega académica |
| Persistencia del tema | No requerida en `v1.1.0` | Mantener el alcance controlado |
| IA Assistant | Mantener como placeholder declarado | No se solicita IA funcional |
| Datos reales | Fuera de alcance | Se mantiene la demostración académica |

## 9. Criterios de aceptación del cliente

Harry aceptará la versión si:

1. El dashboard carga correctamente.
2. Las cuatro pestañas tienen contenido o una decisión documentada de alcance.
3. Los KPIs son legibles y están identificados como demostrativos.
4. El modo oscuro funciona sin recarga.
5. La navegación y rotación 3D siguen funcionando.
6. No existe defecto crítico abierto.
7. QA entrega un informe aprobado o aprobado con observaciones justificadas.
8. El manual y las notas de release están actualizados.
9. La versión está identificada mediante tag.
10. Se entrega el expediente documental completo.

## 10. Registro de aprobaciones simuladas

| Decisión | Responsable | Fecha simulada | Resultado |
|---|---|---|---|
| Alcance inicial | Harry Mollo Mayta | 2026-07-20 | Aprobado |
| RFC-001 modo oscuro | Harry Mollo Mayta | 2026-07-20 | Aprobado para análisis |
| RFC-002 pestañas | Harry Mollo Mayta | 2026-07-20 | Aprobado para `v1.1.0` |
| RFC-003 responsive | Harry Mollo Mayta | 2026-07-20 | Diferido a `v1.2.0` |
| Aceptación release | Harry Mollo Mayta | Pendiente | Pendiente |

## 11. Evidencias que debe entregar el cliente

- Este expediente completado.
- Evaluación operativa firmada o confirmada.
- RFC con fecha y prioridad.
- Decisión sobre alcance.
- Observaciones de aceptación.
- Acta de entrega final.
- Aprobación o rechazo de la release.
