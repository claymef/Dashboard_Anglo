# Sistema documental del proyecto

La documentación se organiza por fases y procesos del ciclo de vida del software, tomando como marco académico ISO/IEC/IEEE 12207:2017 y la guía `docs/guia/MCDES - Proyecto Práctico Final (1).pdf`.

La norma proporciona procesos, actividades y tareas para definir, controlar y mejorar el ciclo de vida del software. En este proyecto se adapta al alcance de una aplicación web 3D y se utiliza para ordenar responsabilidades y evidencias; no se afirma certificación.

Referencia oficial: [ISO/IEC/IEEE 12207:2017 - Systems and software engineering — Software life cycle processes](https://www.iso.org/standard/63712.html).

## Organización

```text
docs/
├── 00_gobierno/       # Planificación, riesgos, control y revisiones
├── 01_inicio/         # Adquisición, suministro, alcance y requisitos
├── 02_desarrollo/     # Arquitectura, implementación y documentación técnica
├── 03_qa/             # Verificación, validación y resolución de problemas
├── 04_operacion/      # Uso simulado y solicitud formal de cambio
├── 05_mantenimiento/  # Impacto, implementación, regresión y mantenimiento
├── 06_cierre/         # Release, entrega, evaluación e informe final
├── guia/              # Referencia de la actividad académica
├── tareas/            # Matriz de tareas, roles y trazabilidad
└── escenario_inicial.md
```

## Regla documental por carpeta

Cada carpeta debe contener documentos que indiquen:

- Proceso o procesos ISO relacionados.
- Objetivo y alcance del documento.
- Responsable y revisor.
- Entradas y actividades realizadas.
- Criterios de aceptación.
- Evidencias y vínculos con otras fases.
- Estado, versión y aprobación.

La matriz de control principal es [`tareas/matriz_asignacion.md`](tareas/matriz_asignacion.md). El gobierno documental se describe en [`00_gobierno/README.md`](00_gobierno/README.md).

Los documentos complementarios para una simulación completa de cambios son:

- [`01_inicio/registro_cambios_requisitos.md`](01_inicio/registro_cambios_requisitos.md)
- [`02_desarrollo/arquitectura_objetivo.md`](02_desarrollo/arquitectura_objetivo.md)
- [`03_qa/matriz_trazabilidad.md`](03_qa/matriz_trazabilidad.md)
- [`03_qa/casos_prueba_detallados.md`](03_qa/casos_prueba_detallados.md)
- [`04_operacion/propuesta_cambios_cliente.md`](04_operacion/propuesta_cambios_cliente.md)
- [`04_operacion/RFC-002-pestanas.md`](04_operacion/RFC-002-pestanas.md)
- [`04_operacion/RFC-003-responsive.md`](04_operacion/RFC-003-responsive.md)
- [`05_mantenimiento/plan_implementacion_cambios.md`](05_mantenimiento/plan_implementacion_cambios.md)
- [`06_cierre/notas_release.md`](06_cierre/notas_release.md)
- [`06_cierre/acta_entrega.md`](06_cierre/acta_entrega.md)

## Regla de trazabilidad

Cada requisito debe poder seguirse hasta su diseño, implementación, prueba, incidencia —si existe— y versión liberada. Cada cambio debe tener RFC, análisis de impacto, aprobación, implementación, pruebas y cierre.
