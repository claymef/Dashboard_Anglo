# Análisis de contenido y plan de mejora documental

**Código:** GOV-AUD-001  
**Versión:** 1.0  
**Fecha:** 2026-07-20  
**Responsable:** Marco Ponce de León  
**Estado:** En revisión

## 1. Base de evaluación

Este análisis revisa los documentos de `docs/00_gobierno` a `docs/06_cierre`, la matriz de tareas, el escenario inicial y el código fuente actual. El criterio de evaluación es la aplicación académica y proporcional de ISO/IEC/IEEE 12207:2017, junto con la guía MCDES conservada en `docs/guia/`.

ISO/IEC/IEEE 12207:2017 proporciona un marco común de procesos del ciclo de vida del software y puede utilizarse para definir, controlar y mejorar procesos dentro de un proyecto. La norma no prescribe una única metodología ni convierte automáticamente un proyecto académico en un producto certificado. Referencia oficial: [ISO/IEC/IEEE 12207:2017](https://www.iso.org/standard/63712.html).

## 2. Dictamen general

La estructura documental está bien encaminada: separa gobierno, inicio, desarrollo, QA, operación, mantenimiento y cierre. Sin embargo, actualmente se trata de un sistema de plantillas controladas, no de un expediente demostrativo completo. La principal brecha no es la falta de nombres de archivos, sino la ausencia de resultados ejecutados, aprobaciones, trazabilidad completa y correspondencia exacta entre requisitos y código.

**Madurez estimada del expediente:** organizada, pero parcialmente demostrada.

### Fortalezas

- Existe una separación clara por fases del ciclo de vida.
- La RFC del modo oscuro conecta operación con mantenimiento.
- Se incluyeron criterios de aceptación y evidencias mínimas.
- La matriz relaciona tareas con carpetas, procesos, responsables y revisores.
- El alcance académico y las exclusiones están explícitos.

### Brechas críticas

1. Muchos documentos aún tienen estado `Pendiente` y no contienen resultados.
2. La matriz de requisitos no está vinculada a todos los componentes reales.
3. El requisito de cuatro pestañas no está completamente implementado: el código presenta contenido para `RESUMEN` e `IMPACTO`, pero no bloques equivalentes para `INVERSION` y `ALIADOS`.
4. El modo oscuro aparece en la documentación, pero no existe todavía una implementación verificable en `src/`.
5. La matriz de pruebas contiene casos, pero no resultados, fecha, ambiente ni evidencias.
6. La arquitectura no documenta `Suspense`, `Canvas`, `OrbitControls`, `Stars`, `Html`, `framer-motion` ni la relación exacta de estilos.
7. El documento de release y el acta de entrega todavía no existen como archivos independientes.
8. Los documentos muestran caracteres dañados en algunas herramientas (`Ã³`, `â€”`), por lo que se debe normalizar todo a UTF-8.
9. La documentación utiliza nombres como “sistema estable” o “reporte ejecutivo 2025” que deben distinguirse como datos demostrativos, no como datos oficiales.

## 3. Evaluación por carpeta

### 00 - Gobierno

**Situación:** correctamente planteada como capa transversal.

**Debe demostrar:** quién decide, cómo se controla la documentación, cómo se registran riesgos, cómo se revisa el avance y cómo se aprueba el cierre.

**Ajustes requeridos:**

- Añadir una matriz de trazabilidad requisito-diseño-código-prueba-release.
- Añadir actas reales o simuladas con fecha, asistentes, decisiones y acciones.
- Añadir criterios de severidad para riesgos e incidencias.
- Mantener un índice de documentos aprobados y obsoletos.
- Definir quién tiene autoridad para aprobar requisitos, cambios y release.

**Resultado esperado:** expediente de gobierno con decisiones verificables, no solo una descripción del proceso.

### 01 - Inicio

**Situación:** el SRS y el contrato delimitan bien el contexto general, pero aún deben ganar precisión operacional.

**SRS:** debe agregar prioridad, fuente, versión, dependencia, criterio medible y requisito relacionado para cada requisito. RF-05 debe marcarse como requisito de cambio, no como una capacidad ya existente.

**Contrato:** debe distinguir entrega inicial y mantenimiento posterior, definir quién acepta cada hito, qué significa “build correcto” y qué ocurre con defectos abiertos.

**Configuración:** debe registrar valores reales del repositorio, rama, commit base, Node/npm, navegador y resultado del build. Debe incluir una línea base inicial.

### 02 - Desarrollo

**Situación:** la arquitectura es correcta como esquema inicial, pero incompleta para explicar el sistema real.

Debe documentar:

- `main.jsx` monta React e importa `index.css`.
- `App.jsx` crea el `Canvas`, define cámara, luces, `Suspense`, `Stars` y `OrbitControls`.
- `HoloDashboard.jsx` usa `Html transform` para presentar HTML dentro de la escena 3D.
- `useState` controla `activeTab`.
- `AnimatePresence` y `motion` gestionan transiciones.
- `App.css` contiene estilos heredados del template y `index.css` contiene la interfaz holográfica.
- El dashboard tiene anchura fija de 1400px y altura de 850px; esto debe verificarse en pantallas pequeñas.

**Brecha funcional:** la interfaz ofrece cuatro botones, pero solo hay contenido condicional visible para `RESUMEN` e `IMPACTO`. `INVERSION` y `ALIADOS` deben implementarse o declararse explícitamente como fuera de alcance.

**Manual:** debe documentar el puerto de Vite, navegador probado, comportamiento esperado y limitaciones WebGL.

### 03 - QA

**Situación:** la estrategia de pruebas está bien orientada, pero los casos son demasiado resumidos para constituir evidencia.

Cada caso debe registrar:

- ID del requisito.
- Precondiciones.
- Ambiente y versión.
- Pasos numerados.
- Resultado esperado.
- Resultado obtenido.
- Estado.
- Captura o enlace.
- Ejecutor y fecha.

El bug log no debe inventar BUG-001, BUG-002 y BUG-003 antes de ejecutar pruebas. Puede mantener registros planificados, pero debe etiquetarlos como “incidencia por confirmar” o crearlos solo después de observar un fallo.

Verificación y validación deben separarse: QA verifica conformidad técnica; el cliente valida utilidad para el uso previsto.

### 04 - Operación

**Situación:** la evaluación operativa y la RFC están correctamente conectadas.

La simulación del cliente debe incluir un guion concreto: abrir dashboard, revisar resumen, consultar impacto, cambiar de pestaña, interpretar KPIs y evaluar el modo oscuro. Debe registrar observaciones y decisión: aceptar, aceptar con observaciones o rechazar.

La RFC debe incluir prioridad justificada, impacto operativo, alcance, exclusiones, criterios de aceptación, aprobación del cliente y decisión del comité/equipo.

### 05 - Mantenimiento

**Situación:** el análisis de impacto identifica archivos razonables, pero debe diferenciar archivos confirmados, probables y fuera de alcance.

El cambio debe seguir esta secuencia:

```text
RFC → análisis de impacto → aprobación → rama → implementación → revisión → pruebas → PR → release → actualización documental
```

No se debe afirmar que `App.jsx` o `HoloDashboard.jsx` serán modificados hasta decidir dónde vivirá el estado del tema. La decisión técnica debe documentarse.

### 06 - Cierre

**Situación:** el informe final funciona como índice, pero todavía no es un informe de cierre completo.

Debe incluir comparación planificado/real, requisitos cumplidos, defectos pendientes, desviaciones, evidencias, decisión de release, aceptación del cliente y lecciones aprendidas. También debe incluir un resumen de cumplimiento por proceso y una lista de acciones posteriores.

## 4. Trazabilidad propuesta

| Requisito | Diseño/código aproximado | Prueba | Documento de cierre |
|---|---|---|---|
| RF-01 Dashboard | `src/App.jsx`, `src/HoloDashboard.jsx`, `src/index.css` | CP-01 | QA-INF-001 |
| RF-02 Pestañas | `src/HoloDashboard.jsx` | CP-02 | QA-INF-001 |
| RF-03 KPIs/gráficas | `src/HoloDashboard.jsx`, `src/index.css` | CP-03 | QA-INF-001 |
| RF-04 Rotación 3D | `src/App.jsx` (`OrbitControls`) | CP-04 | QA-INF-001 |
| RF-05 Modo oscuro | `src/App.jsx` y/o `src/HoloDashboard.jsx`, `src/index.css`, `src/App.css` | CP-08 | MANT-INF-001 / CIE-INF-001 |
| RNF-01 Instalación | `package.json`, `package-lock.json` | CP-06 | DEV-MAN-001 |
| RNF-02 Build | `package.json`, código fuente | CP-06 | QA-INF-001 |
| RNF-03 Usabilidad | `HoloDashboard.jsx`, estilos | CP-02, CP-03, OPE-EVAL-001 | CIE-INF-001 |
| RNF-04 Legibilidad | `index.css`, `App.css`, componentes | CP-03, CP-08 | QA-INF-001 |
| RNF-05 Mantenibilidad | todos los componentes y documentos | DEV-REV-001 | CIE-INF-001 |

## 5. Criterios de delimitación para el cliente

Debe comunicarse al cliente que esta entrega:

- Es una demostración visual con datos estáticos.
- No es un sistema de monitoreo en tiempo real.
- No valida datos de producción.
- No incluye autenticación ni perfiles.
- No incluye persistencia ni conexión a APIs.
- No incluye exportación PDF.
- No incluye accesibilidad certificada.
- No garantiza rendimiento productivo en dispositivos no evaluados.
- El modo oscuro es una mejora de presentación, no una modificación de los indicadores.

## 6. Decisión de auditoría

La documentación está bien estructurada para continuar, pero no debe presentarse como “cumplimiento demostrado” hasta completar ejecución, evidencias y aprobaciones. La afirmación correcta es: “proyecto organizado y evaluado bajo un enfoque académico basado en ISO/IEC/IEEE 12207:2017”.
