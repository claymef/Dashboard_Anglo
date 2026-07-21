# Informe Final y Cierre del Proyecto

**Código:** CIE-INF-001  
**Producto:** Dashboard Anglo American – Quellaveco  
**Proceso ISO/IEC/IEEE 12207:** Suministro, evaluación, configuración y cierre  
**Líder de Proyecto:** Marco Ponce de León  
**Responsable de Despliegue:** Christian Layme  
**Versión:** 1.0 | 21 de julio de 2026  
**Estado:** Completado para revisión y aprobación  

> **Nota de alcance:** Este informe documenta una entrega académica y demostrativa. El marco ISO/IEC/IEEE 12207:2017 se utiliza como guía de organización, trazabilidad y mejora continua; no constituye una certificación formal de conformidad.

---

## 1. Portada y control documental

El proyecto se presenta como una solución web ejecutiva orientada a la visualización de indicadores del proyecto Quellaveco. El informe consolida la documentación generada en las fases de gobierno, inicio, desarrollo, QA, operación, mantenimiento y cierre, con el fin de evidenciar la ejecución del ciclo de vida del software de forma ordenada y verificable.

El conjunto documental se organiza en [docs/00_gobierno](../00_gobierno), [docs/01_inicio](../01_inicio), [docs/02_desarrollo](../02_desarrollo), [docs/03_qa](../03_qa), [docs/04_operacion](../04_operacion), [docs/05_mantenimiento](../05_mantenimiento), [docs/06_cierre](../06_cierre) y [docs/07_entrega](../07_entrega). La trazabilidad entre requisitos, diseño, pruebas y cambios se sustenta en la matriz de control principal [docs/tareas/matriz_asignacion.md](../tareas/matriz_asignacion.md).

---

## 2. Resumen ejecutivo

Se desarrolló y documentó una aplicación web 3D ejecutiva para mostrar indicadores del proyecto Quellaveco, con enfoque académico y base técnica en React, Vite, Three.js y React Three Fiber. El trabajo incluyó la organización del proyecto bajo un marco de procesos de ciclo de vida, la definición de requisitos, la implementación de mejoras visuales y funcionales, la validación con evidencias, la evaluación operativa y la preparación de una propuesta de release.

El resultado es una versión demostrable, legible y verificable del dashboard, con soporte documental para cada etapa del proceso, evidencias visuales y una estructura que permite entender tanto el producto como la forma en que fue gestionado.

---

## 3. Contexto, necesidad y alcance

El proyecto nace de la necesidad de presentar información ejecutiva de forma más clara, visual y adaptable a distintos contextos de uso. En este caso, la solución debía servir como una demostración académica sobre mantenimiento y mejora continua de software, no como un sistema productivo con conexión a fuentes de datos reales.

El alcance del producto incluyó la visualización de indicadores mediante pestañas, KPIs, mini-gráficas, navegación 3D limitada y un modo oscuro con contraste adecuado. Quedaron fuera de alcance la autenticación, la integración con bases de datos reales, la exportación o la implantación en un entorno productivo. Esto se encuentra formalizado en [docs/01_inicio/SRS.md](../01_inicio/SRS.md) y en la documentación de inicio del proyecto.

---

## 4. Roles y responsabilidades

Los roles principales del proyecto se distribuyeron de acuerdo con la estructura del ciclo de vida y la matriz de tareas. El liderazgo de proyecto estuvo orientado a la coordinación general, el seguimiento documental y la organización del trabajo. El desarrollo técnico se concentró en la implementación y revisión de la interfaz y sus componentes, mientras que el análisis operativo y la validación se enfocaron en la evaluación del uso real del dashboard y la comprobación de cumplimiento de requisitos.

La gestión de calidad, la trazabilidad y las pruebas fueron documentadas en [docs/03_qa/matriz_trazabilidad.md](../03_qa/matriz_trazabilidad.md), mientras que la coordinación de actividades, asignación de tareas y responsabilidades se registró en [docs/tareas/matriz_asignacion.md](../tareas/matriz_asignacion.md) y [docs/tareas/reparto_tareas.md](../tareas/reparto_tareas.md).

---

## 5. Aplicación de ISO/IEC/IEEE 12207:2017

El proyecto utilizó la norma ISO/IEC/IEEE 12207:2017 como referencia académica para estructurar el ciclo de vida del software y ordenar las actividades, documentos y evidencias. La aplicación de la norma no buscó certificación, sino dar forma a un proceso completo de adquisición, desarrollo, verificación, operación, mantenimiento y cierre, adaptado al alcance de una aplicación web demostrativa.

En este contexto, los procesos de adquisición y suministro se reflejaron en los documentos de contrato simulado y expediente del cliente; los requisitos quedaron documentados en [docs/01_inicio/SRS.md](../01_inicio/SRS.md) y [docs/01_inicio/registro_cambios_requisitos.md](../01_inicio/registro_cambios_requisitos.md); el desarrollo se soportó en [docs/02_desarrollo/arquitectura.md](../02_desarrollo/arquitectura.md) y en la implementación técnica del dashboard; la verificación y validación se consolidaron en [docs/03_qa/casos_prueba_detallados.md](../03_qa/casos_prueba_detallados.md) y [docs/03_qa/matriz_trazabilidad.md](../03_qa/matriz_trazabilidad.md); y la operación y mantenimiento se registraron a través de [docs/04_operacion/evaluacion_operacion.md](../04_operacion/evaluacion_operacion.md), [docs/05_mantenimiento/plan_implementacion_cambios.md](../05_mantenimiento/plan_implementacion_cambios.md) y [docs/06_cierre/acta_entrega.md](../06_cierre/acta_entrega.md). Esta organización permitió vincular cada cambio con su impacto, prueba, evidencia y cierre documental.

---

## 6. Requisitos y matriz de trazabilidad

Los requisitos del sistema quedaron definidos en el SRS y se organizaron según prioridad, criterio de aceptación y prueba asociada. Entre los principales se incluyeron la visualización del dashboard, la navegación por pestañas, la exposición de KPIs y mini-gráficas, la interacción 3D limitada y la incorporación del modo oscuro.

La trazabilidad entre requisitos y evidencias se consolidó en [docs/03_qa/matriz_trazabilidad.md](../03_qa/matriz_trazabilidad.md), donde se relacionaron requisitos, módulos, pruebas y capturas de verificación. Esta matriz permitió demostrar que cada necesidad fue evaluada y que el producto cumplió con los criterios previstos, reforzando la calidad del entregable final.

---

## 7. Arquitectura base y arquitectura objetivo

La arquitectura inicial del proyecto se orientó a una estructura simple basada en componentes React, con un punto de entrada principal, una vista de dashboard y archivos de estilo separados para la interfaz y los temas. A partir de esa base, se documentó una arquitectura objetivo que permitió ordenar mejor la lógica de presentación, los estilos y la adaptación visual del producto.

La propuesta de diseño quedó registrada en [docs/02_desarrollo/arquitectura.md](../02_desarrollo/arquitectura.md) y en los diagramas de la carpeta [docs/02_desarrollo/diagramas](../02_desarrollo/diagramas). La estructura del producto se apoyó en la organización del código en [src/App.jsx](../../src/App.jsx), [src/HoloDashboard.jsx](../../src/HoloDashboard.jsx) y sus archivos de estilo [src/App.css](../../src/App.css) y [src/index.css](../../src/index.css).

---

## 8. Solicitudes del cliente y decisiones de cambio

Durante el proyecto se formalizaron solicitudes de cambio orientadas a mejorar la experiencia visual y operativa del dashboard. La más relevante fue la mejora de contraste y la implementación de un modo oscuro, así como la adaptación de la interfaz para que las pestañas y los contenidos mostrados fueran más claros y consistentes.

Estas solicitudes fueron gestionadas como cambios documentados en [docs/04_operacion/propuesta_cambios_cliente.md](../04_operacion/propuesta_cambios_cliente.md) y en los registros de RFC asociados, además de ser evaluadas desde el punto de vista de impacto y mantenimiento en [docs/05_mantenimiento/analisis_impacto.md](../05_mantenimiento/analisis_impacto.md).

---

## 9. Implementación y archivos modificados

La implementación del proyecto incluyó cambios en la interfaz, los estilos, la organización de contenido y la configuración de ejecución local. Se completaron las secciones de navegación por pestañas, se incorporaron datos semilla y se ajustó la presentación para que fuera más legible tanto en modo claro como en modo oscuro.

Los cambios principales se reflejaron en los archivos de la aplicación web, en la documentación de arquitectura y en la configuración de despliegue. Asimismo, se preparó una alternativa de ejecución aislada con Docker para validar el funcionamiento del sistema en un entorno controlado y reproducible.

---

## 10. Verificación, validación y resultados QA

La etapa de QA se centró en comprobar que la solución cumpliera con los requisitos definidos y que los cambios no generaran regresiones. Se ejecutaron pruebas de interfaz, validación visual, inspección de datos semilla y verificación de despliegue, registrando cada resultado con evidencia.

Los hallazgos y las pruebas quedaron documentados en [docs/03_qa/casos_prueba_detallados.md](../03_qa/casos_prueba_detallados.md), [docs/03_qa/bug_log.md](../03_qa/bug_log.md) y [docs/03_qa/evidencias](../03_qa/evidencias). La matriz de trazabilidad permitió demostrar que las pruebas y las evidencias se vincularon con los requisitos y con los cambios realizados.

---

## 11. Operación y aceptación del cliente

Durante la fase operativa se evaluó el comportamiento del dashboard desde la perspectiva del usuario y del cliente, considerando legibilidad, navegación, consistencia de contenidos y aceptación de la propuesta. El sistema fue revisado como una herramienta ejecutiva demostrativa, con foco en su utilidad, claridad y capacidad de mostrar información de manera comprensible.

La evaluación de operación se consolidó en [docs/04_operacion/evaluacion_operacion.md](../04_operacion/evaluacion_operacion.md), mientras que la aceptación de los cambios y la propuesta de mejora se registraron en los documentos de operación y cierre del proyecto.

---

## 12. Release y configuración de despliegue

Se preparó la propuesta de liberación de la versión v1.1.0 como resultado de la mejora y validación del sistema. La release contempló la consolidación de cambios, la preparación de documentación relacionada y la verificación del despliegue local mediante Docker Compose y Nginx.

La información de release quedó registrada en [docs/06_cierre/notas_release.md](../06_cierre/notas_release.md), mientras que la configuración operativa y el despliegue reproducible se apoyaron en [docker-compose.yml](../../docker-compose.yml), [Dockerfile](../../Dockerfile), [main-docker/docker-compose.yml](../../main-docker/docker-compose.yml) y [main-docker/nginx.conf](../../main-docker/nginx.conf).

---

## 13. Riesgos, limitaciones y desviaciones

Entre los principales riesgos identificados se encontraron la necesidad de mantener el contraste visual adecuado, la posibilidad de introducir regresiones en la interfaz durante la implementación de cambios y la dependencia de un entorno local con herramientas como Docker correctamente configuradas. También se reconoció que el proyecto era una demostración académica y no un producto con datos reales ni integración con sistemas productivos.

Como limitación, el sistema no incorpora autenticación, fuentes oficiales de datos ni despliegue productivo. Estas restricciones fueron aceptadas como parte del alcance del proyecto y no afectaron la viabilidad del objetivo académico de la entrega.

---

## 14. Lecciones aprendidas y plan de mejora

El proyecto permitió identificar lecciones importantes sobre gestión de entornos, trazabilidad y diseño visual. Se comprobó que la definición temprana de variables de estilo y criterios de contraste reduce retrabajos en etapas posteriores, y que la documentación debe mantenerse alineada con la implementación para que el seguimiento del proyecto sea claro.

Como plan de mejora, se recomienda consolidar aún más la trazabilidad desde requisitos hasta release, ampliar la automatización de pruebas donde sea posible y mantener la documentación del proyecto como una fuente viva del estado del producto y de sus cambios.

---

## 15. Conclusiones

El proyecto logró cumplir con su propósito académico y demostrativo: transformar una aplicación existente en una solución mejor organizada, documentada, validada y preparada para su entrega. La combinación de desarrollo técnico, gestión documental y verificación permitió cerrar el ciclo de vida del software de forma ordenada y comprensible.

El resultado final demuestra que la integración de buenas prácticas de ingeniería, trazabilidad y documentación permite mejorar la calidad del entregable sin perder la orientación al cliente y al uso previsto del producto.

---

## 16. Anexos

El informe final se apoya en una colección de evidencias visuales y documentales que complementan el contenido. Entre ellas destacan las capturas de verificación de datos, de modo claro y oscuro, de pestañas y del despliegue en contenedores, así como los documentos de arquitectura, trazabilidad, QA y release.

Estas evidencias se encuentran organizadas principalmente en [docs/03_qa/evidencias](../03_qa/evidencias), [docs/02_desarrollo/diagramas](../02_desarrollo/diagramas) y los documentos de cierre y entrega en [docs/06_cierre](../06_cierre) y [docs/07_entrega](../07_entrega).