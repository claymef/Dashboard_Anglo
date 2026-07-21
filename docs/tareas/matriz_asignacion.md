# Matriz de tareas y trazabilidad

Esta matriz es el documento de control operativo del proyecto. Se organiza conforme al enfoque de procesos del ciclo de vida de ISO/IEC/IEEE 12207:2017 y a las fases indicadas en la guía académica `docs/guia/MCDES - Proyecto Práctico Final (1).pdf`.

Referencia normativa: [ISO/IEC/IEEE 12207:2017](https://www.iso.org/standard/63712.html).

| ID | Carpeta | Proceso 12207 | Tarea / entregable | Responsable | Revisor | Evidencia | Estado |
|---|---|---|---|---|---|---|---|
| GOV-01 | `00_gobierno` | Gestión / documentación | Alcance y restricciones | Marco | C. Mollo | `escenario_inicial.md` | Pendiente |
| GOV-02 | `00_gobierno` | Gestión / configuración | Roles y responsabilidades | Marco | Equipo | `reparto_tareas.md` | Pendiente |
| A-01 | `01_inicio` | Adquisición / requisitos | Completar SRS | Marco | C. Mollo | `SRS.md` + validación | Pendiente |
| A-02 | `01_inicio` | Suministro | Completar contrato y plan | Marco | C. Mollo | `contrato_simulado.md` | Pendiente |
| A-03 | `01_inicio` | Configuración | Registrar ramas, commits y versiones | Christian | Yoset | `configuracion_inicial.md` | Pendiente |
| A-04 | `01_inicio` | Requisitos / cambio | Controlar solicitudes que modifiquen el SRS | Marco | C. Mollo | `registro_cambios_requisitos.md` | Pendiente |
| B-01 | `02_desarrollo` | Desarrollo | Documentar arquitectura y componentes | Christian | Yoset | `arquitectura.md` | Pendiente |
| B-02 | `02_desarrollo` | Desarrollo / documentación | Actualizar manual de usuario y despliegue | Christian | Fidel | `manual_usuario.md` | Pendiente |
| B-03 | `02_desarrollo` | Verificación | Ejecutar revisión técnica | Christian / Yoset | Marco | `revision_tecnica.md` + checklist | Pendiente |
| B-04 | `02_desarrollo` | Diseño / gestión técnica | Diseñar arquitectura objetivo de cambios aprobados | Christian | Yoset | `arquitectura_objetivo.md` | Pendiente |
| C-01 | `03_qa` | Verificación | Definir casos y resultados de prueba | Fidel | Christian | `plan_pruebas.md` | Pendiente |
| C-02 | `03_qa` | Resolución de problemas | Registrar y cerrar incidencias | Fidel | Yoset | `bug_log.md` | Pendiente |
| C-03 | `03_qa` | Validación | Emitir informe QA | Fidel | C. Mollo | `informe_qa.md` | Pendiente |
| C-04 | `03_qa` | Trazabilidad | Relacionar requisitos, código, pruebas y release | Fidel | Marco | `matriz_trazabilidad.md` | Pendiente |
| C-05 | `03_qa` | Verificación | Ejecutar casos detallados de cambios | Fidel | Christian | `casos_prueba_detallados.md` | Pendiente |
| D-01 | `04_operacion` | Operación | Evaluar uso ejecutivo simulado | C. Mollo | Fidel | `evaluacion_operacion.md` | Pendiente |
| D-02 | `04_operacion` | Mantenimiento / cambio | Registrar solicitud del cliente | C. Mollo | Marco | `RFC-001-modo-oscuro.md` | Pendiente |
| D-03 | `04_operacion` | Gestión de cambios | Aprobar o rechazar propuestas adicionales | C. Mollo | Marco | `propuesta_cambios_cliente.md` | Pendiente |
| D-04 | `04_operacion` | Cambio | Completar pestañas del dashboard | C. Mollo | Christian | `RFC-002-pestanas.md` | Pendiente |
| D-05 | `04_operacion` | Cambio | Decidir adaptación responsive | C. Mollo | Christian | `RFC-003-responsive.md` | Pendiente |
| E-01 | `05_mantenimiento` | Mantenimiento | Analizar impacto y riesgos | Yoset | Christian | `analisis_impacto.md` | Pendiente |
| E-02 | `05_mantenimiento` | Mantenimiento | Implementar modo oscuro | Yoset | Christian | rama, commits y PR | Pendiente |
| E-03 | `05_mantenimiento` | Verificación | Ejecutar regresión e informe técnico | Yoset | Fidel | `informe_mantenimiento.md` | Pendiente |
| E-05 | `05_mantenimiento` | Mantenimiento | Ejecutar plan integrado de cambios | Yoset | Marco | `plan_implementacion_cambios.md` | Pendiente |
| E-06 | `05_mantenimiento` | Configuración | Registrar archivos y baseline afectados | Yoset | Christian | `mapa_archivos_cambio.md` | Pendiente |
| E-04 | `06_cierre` | Configuración / suministro | Preparar release `v1.1.0` | Christian / Yoset | Fidel | tag, notas y manual | Pendiente |
| F-02 | `06_cierre` | Suministro / cierre | Elaborar notas de release | Christian | Fidel | `notas_release.md` | Pendiente |
| F-03 | `06_cierre` | Entrega / validación | Obtener acta de aceptación del cliente | Marco | C. Mollo | `acta_entrega.md` | Pendiente |
| F-01 | `06_cierre` | Evaluación / cierre | Integrar informe final y reflexiones | Marco | Equipo | `informe_final.md` | Pendiente |

## Estados permitidos

`Pendiente` → `En curso` → `En revisión` → `Completada` / `Bloqueada`.

Una tarea no se marca como `Completada` si no contiene entregable, evidencia y revisión.
