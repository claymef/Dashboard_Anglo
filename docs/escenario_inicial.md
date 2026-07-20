# Escenario inicial del proyecto

## 1. Contexto

Anglo American solicita el desarrollo de un dashboard web 3D para presentar información ejecutiva del proyecto Quellaveco, ubicado en la región Moquegua. El sistema debe mostrar indicadores de relaciones comunitarias mediante una interfaz holográfica, interactiva y de fácil lectura.

El producto será desarrollado como una aplicación web utilizando React, Vite, Three.js y React Three Fiber. La primera versión será una demostración funcional para uso ejecutivo y académico; no reemplazará los sistemas operativos ni las fuentes oficiales de datos de la empresa.

## 2. Necesidad del cliente

El cliente necesita centralizar la presentación de indicadores como cobertura, alcance, retorno e intervenciones ejecutadas. Actualmente la información se presenta de forma estática, por lo que se requiere una interfaz visual que permita explorar diferentes categorías y comunicar los resultados de manera más atractiva.

## 3. Alcance inicial

El producto inicial incluirá:

- Panel holográfico con distribución en tres zonas: navegación, contenido principal e indicadores.
- Visualización 3D con controles limitados de rotación.
- Pestañas para Resumen, Impacto, Inversión y Aliados.
- Tarjetas de KPIs (Indicadores Clave de Rendimiento) y mini-gráficas en CSS (Hojas de Estilo en Cascada).
- Manual básico para instalación y ejecución local.
- Registro de pruebas, incidencias y cambios.

Quedan fuera del alcance inicial la conexión con bases de datos reales, autenticación de usuarios, exportación PDF (Formato de Documento Portátil) y despliegue productivo.

## 4. Upgrade propuesto

Como solicitud de cambio, el cliente propone incorporar un **modo oscuro para visualización nocturna**. Esta mejora permitirá reducir el brillo de la interfaz en salas de control y conservará la legibilidad de los KPIs y controles 3D.

El upgrade seguirá este flujo: RFC (Solicitud Formal de Cambio) del cliente, análisis de impacto, desarrollo en una rama aislada, pruebas funcionales y de regresión, validación de QA (Aseguramiento de Calidad), integración mediante Pull Request (solicitud de integración), actualización del manual y publicación de la versión `v1.1.0`.

## 5. Aplicación de ISO/IEC/IEEE 12207

El proyecto aplicará la norma de forma académica y adaptada:

| Proceso | Aplicación en el proyecto | Evidencia |
|---|---|---|
| Adquisición | El cliente define la necesidad y valida los requisitos. | SRS y contrato simulado |
| Suministro | El equipo planifica y entrega el producto. | Cronograma y acta de entrega |
| Desarrollo | Se diseña, codifica e integra el dashboard. | Código, arquitectura y release |
| Verificación | Se comprueba que la solución cumple el diseño y los requisitos técnicos. | Casos y resultados de pruebas |
| Validación | El cliente y QA comprueban que el producto sirve para el uso previsto. | Informe QA y evaluación operativa |
| Operación | Se simula el uso ejecutivo del dashboard. | Informe de operación |
| Mantenimiento | Se analiza, implementa y controla el modo oscuro. | RFC, impacto, PR e informe técnico |

La aplicación de la norma no implica una certificación del producto; significa que se utilizará su estructura de procesos para ordenar y justificar el ciclo de vida del software.
