# Dashboard Anglo - Proyecto práctico de mantenimiento

Aplicación web 3D desarrollada con React, Vite, Three.js y React Three Fiber para presentar indicadores ejecutivos relacionados con el proyecto Quellaveco. El producto es una demostración funcional de alcance académico; no sustituye sistemas productivos ni fuentes oficiales de datos.

## Propósito del proyecto

El proyecto aplica un ciclo de vida de software ordenado para analizar, desarrollar, verificar, operar y mantener una página web existente. El trabajo principal de mantenimiento consiste en evaluar e implementar el modo oscuro solicitado por el cliente, documentando el cambio desde la solicitud hasta la liberación de la versión `v1.1.0`.

## Enfoque basado en ISO/IEC/IEEE 12207

La norma ISO/IEC/IEEE 12207 se utiliza como marco para organizar los procesos y evidencias del ciclo de vida del software. En este proyecto se aplica de forma académica y adaptada al tamaño y alcance de la aplicación.

La aplicación de la norma no significa que el producto esté certificado. Significa que cada fase tiene un propósito, responsables, actividades, criterios de aceptación y evidencias revisables.

| Proceso del ciclo de vida | Aplicación en este proyecto | Evidencia principal |
|---|---|---|
| Adquisición | El cliente plantea la necesidad, revisa el alcance y valida los requisitos. | Escenario, SRS y criterios de aceptación |
| Suministro | El equipo planifica el trabajo y entrega una versión verificable. | Contrato simulado, plan y acta de entrega |
| Desarrollo | Se analiza la arquitectura, se implementa la aplicación y se integra el código. | Código, arquitectura, revisión técnica y build |
| Verificación | Se comprueba que el producto cumple requisitos técnicos y diseño previsto. | Casos, resultados y revisión técnica |
| Validación | Se confirma que la aplicación sirve para el uso previsto por el cliente. | Informe QA y evaluación operativa |
| Operación | Se simula el uso ejecutivo del dashboard y se recoge retroalimentación. | Evaluación operativa y registro de observaciones |
| Mantenimiento | Se controla, analiza, implementa y prueba la solicitud de modo oscuro. | RFC, análisis de impacto, PR e informe |
| Gestión de configuración | Se controlan versiones, ramas, commits, entregables y release. | Configuración inicial, historial Git y tag `v1.1.0` |
| Documentación y evaluación | Se conserva la información del proyecto y se revisa el cumplimiento del plan. | README, documentos de fase e informe final |

## Enfoque de implementación del proyecto

El proyecto se ejecuta mediante un flujo incremental con puntos de control:

1. **Inicio y adquisición:** definir necesidad, alcance, restricciones, roles y requisitos.
2. **Desarrollo:** describir la arquitectura, revisar el código base y preparar el entorno.
3. **Verificación y validación:** ejecutar pruebas, registrar defectos y confirmar el uso previsto.
4. **Operación simulada:** evaluar el dashboard desde la perspectiva del usuario/cliente.
5. **Mantenimiento:** gestionar la RFC del modo oscuro, analizar impactos, implementar el cambio y realizar regresión.
6. **Liberación y cierre:** aprobar la versión, actualizar el manual, consolidar evidencias y elaborar el informe final.

Cada tarea se considera completada únicamente cuando existe el entregable, la evidencia está vinculada y el responsable o revisor registra su conformidad.

## Plan de mejora e implementación

| Etapa | Mejora propuesta | Resultado esperado |
|---|---|---|
| 1. Diagnóstico | Revisar requisitos, código, documentación, riesgos y estado de tareas. | Informe de situación inicial |
| 2. Organización | Ordenar `docs/` por proceso y fase del ciclo de vida. | Estructura documental coherente |
| 3. Control documental | Añadir código de documento, versión, autor, revisor, fecha y aprobación. | Documentos controlados |
| 4. Trazabilidad | Relacionar requisito, diseño, código, prueba, incidencia y release. | Matriz de trazabilidad |
| 5. Gestión de calidad | Definir criterios de aceptación, revisiones y evidencias mínimas. | Checklists y actas de revisión |
| 6. Gestión del cambio | Formalizar RFC, impacto, riesgos, aprobación, implementación y regresión. | Expediente completo del modo oscuro |
| 7. Liberación | Preparar checklist, notas de versión, manual actualizado y acta de entrega. | Release `v1.1.0` aprobada |
| 8. Evaluación | Comparar resultados con el plan y documentar lecciones aprendidas. | Informe final y acciones futuras |

## Estructura de la documentación

```text
docs/
├── 01_inicio/          # Necesidad, alcance, requisitos y configuración inicial
├── 02_desarrollo/      # Arquitectura, manual y revisión técnica
├── 03_qa/              # Verificación, validación, pruebas e incidencias
├── 04_operacion/       # Evaluación operativa y solicitud de cambio
├── 05_mantenimiento/   # Impacto, implementación, regresión e informe técnico
├── 06_cierre/          # Release, entrega, conclusiones e informe final
├── guia/                # Material de referencia de la actividad académica
├── tareas/              # Reparto, matriz y control de actividades
└── escenario_inicial.md # Contexto, alcance y restricciones del producto
```

La matriz de control principal es [`docs/tareas/matriz_asignacion.md`](docs/tareas/matriz_asignacion.md). El material de referencia de la actividad se conserva en [`docs/guia/`](docs/guia/).

## Control de tareas y evidencias

Cada registro de tarea debe indicar como mínimo:

- ID de tarea y proceso ISO relacionado.
- Responsable, apoyo y revisor.
- Entregable y criterio de aceptación.
- Estado y fechas planificada/real.
- Evidencia: archivo, captura, resultado de prueba, commit, rama, PR o release.
- Observaciones y aprobación.

Las tareas de código deben vincularse a un commit o Pull Request. Las tareas de pruebas deben registrar fecha, versión evaluada, resultado y responsable.

## Conversión a DOCX y entrega

Markdown es el formato fuente recomendado porque facilita el control de cambios y la revisión en Git. Los documentos terminados pueden convertirse a DOCX o PDF para la presentación final mediante Pandoc y una plantilla institucional. La conversión no reemplaza la revisión editorial de portada, tablas, diagramas, firmas, encabezados, pies de página y evidencias.

## Alcance y restricciones

Incluye dashboard web 3D, navegación por pestañas, KPIs, mini-gráficas, controles limitados de rotación, pruebas, documentación y mantenimiento del modo oscuro.

No incluye conexión a bases de datos reales, autenticación, exportación PDF ni despliegue productivo.

## Ejecución local

```bash
npm install
npm run dev
```

Para validar la compilación:

```bash
npm run build
```

## Responsabilidades

La asignación detallada de integrantes, tareas, apoyos y evidencias se encuentra en [`docs/tareas/reparto_tareas.md`](docs/tareas/reparto_tareas.md) y [`docs/tareas/matriz_asignacion.md`](docs/tareas/matriz_asignacion.md).
