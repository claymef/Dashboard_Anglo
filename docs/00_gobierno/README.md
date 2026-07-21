# 00 - Gobierno, planificación y control documental

## Base normativa

Esta carpeta implementa, de forma académica y proporcional al alcance del proyecto, los procesos de gestión, planificación, evaluación, documentación y gestión de configuración relacionados con ISO/IEC/IEEE 12207:2017.

La norma establece un marco común de procesos del ciclo de vida del software y permite definir, controlar y mejorar dichos procesos dentro de un proyecto. No se declara certificación del producto.

Referencia: [ISO/IEC/IEEE 12207:2017 - Software life cycle processes](https://www.iso.org/standard/63712.html).

## Tareas de esta carpeta

| ID | Tarea | Entregable | Criterio de aceptación | Evidencia |
|---|---|---|---|---|
| GOV-01 | Confirmar alcance, restricciones y objetivo del mantenimiento | `docs/escenario_inicial.md` | Alcance incluido/excluido aprobado | Documento revisado |
| GOV-02 | Definir roles, responsabilidades y revisores | `docs/tareas/reparto_tareas.md` | Cada tarea tiene responsable y apoyo | Matriz firmada/revisada |
| GOV-03 | Mantener la matriz de trazabilidad de tareas | `docs/tareas/matriz_asignacion.md` | Cada tarea tiene proceso, entregable y evidencia | Matriz actualizada |
| GOV-04 | Controlar versiones de documentos | `docs/00_gobierno/control_documental.md` | Todo documento tiene versión, fecha y estado | Historial Git |
| GOV-05 | Registrar riesgos y acciones de mitigación | `docs/00_gobierno/matriz_riesgos.md` | Riesgos priorizados y con responsable | Matriz de riesgos |
| GOV-06 | Realizar revisiones de avance y cierre | `docs/00_gobierno/actas_revision.md` | Las decisiones y aprobaciones quedan registradas | Actas |

## Regla de cierre

Una tarea solo puede pasar a `Completada` cuando el entregable existe, la evidencia está vinculada y el revisor registra su conformidad.
