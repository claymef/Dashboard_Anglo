# SRS - Especificación de Requisitos de Software

**Código:** INI-SRS-001  
**Versión:** 1.0  
**Responsable:** Marco Ponce de León  
**Apoyo y validación:** C. Mollo  
**Estado:** En revisión

## Referencia normativa

Este documento forma parte del proceso de definición de requisitos del software dentro de la simulación académica basada en la norma ISO/IEC/IEEE 12207:2017. Su estructura toma como referencia los principios de la Especificación de Requisitos de Software (SRS) definidos por IEEE 830. Se complementa con la guía académica MCDES ubicada en `docs/guia/`.

## Introducción

Este documento especifica los requisitos funcionales y no funcionales del Dashboard Web 3D para la visualización de indicadores ejecutivos del proyecto Quellaveco. Su propósito es servir como base para el diseño, implementación, verificación, validación y mantenimiento del sistema dentro de la simulación académica basada en la norma ISO/IEC/IEEE 12207.

## 1. Propósito y alcance

El sistema es un dashboard web 3D para presentar indicadores ejecutivos del proyecto Quellaveco. Es una demostración académica y no se conecta a bases de datos reales ni reemplaza los sistemas de información existentes de Anglo American.

Incluye navegación por pestañas, KPIs, mini-gráficas, panel holográfico y rotación 3D limitada. Excluye autenticación, datos reales, exportación PDF y despliegue productivo.

## 2. Usuarios y contexto

| Usuario | Necesidad |
|---|---|
| Representante del cliente | Revisar la utilidad y legibilidad de los indicadores |
| Usuario ejecutivo | Explorar categorías y comprender KPIs rápidamente |
| Equipo técnico | Mantener, probar y liberar la aplicación |

## 3. Requisitos funcionales

| ID | Requisito | Prioridad | Criterio de aceptación | Prueba |
|---|---|---|---|---|
| RF-01 | Mostrar un dashboard con navegación, contenido e indicadores | Alta | El dashboard presenta correctamente las tres zonas principales (navegación, contenido e indicadores) inmediatamente después de la carga inicial de la aplicación. | CP-01 |
| RF-02 | Permitir cambiar entre Resumen, Impacto, Inversión y Aliados | Alta | La selección de cada pestaña actualiza el contenido mostrado de manera correcta, diferenciando la información correspondiente a cada categoría. | CP-02 |
| RF-03 | Mostrar KPIs y mini-gráficas | Alta | Los indicadores, etiquetas y mini-gráficas se visualizan correctamente, manteniendo legibilidad y consistencia en la interfaz. | CP-03 |
| RF-04 | Permitir rotación 3D limitada | Media | La escena permite la rotación mediante interacción del usuario sin producir movimientos inesperados ni perder el enfoque del panel principal. | CP-04 |
| RF-05 | Aplicar modo oscuro solicitado | Media | El cambio entre modo claro y modo oscuro modifica la apariencia de la interfaz preservando la legibilidad de los indicadores, controles y elementos gráficos. | CP-08 |

## 4. Requisitos no funcionales

| ID | Requisito | Criterio |
|---|---|---|
| RNF-01 | Instalación reproducible | `npm install` completa sin errores conocidos |
| RNF-02 | Compilación | `npm run build` finaliza correctamente |
| RNF-03 | Usabilidad | Navegación comprensible sin instrucciones adicionales |
| RNF-04 | Legibilidad | Texto y controles mantienen contraste suficiente |
| RNF-05 | Mantenibilidad | Componentes y estilos están documentados |

## 5. Restricciones y supuestos

- React, Vite, Three.js y React Three Fiber son las tecnologías base.
- Los datos son demostrativos.
- El entorno objetivo de evaluación es un navegador moderno.
- La versión de mantenimiento objetivo es `v1.1.0`.

## 6. Aprobación

| Rol | Nombre | Fecha | Firma/confirmación |
|---|---|---|---|
| Cliente | C. Mollo | Pendiente | Pendiente |
| Analista | Marco Ponce de León | Pendiente | Pendiente |

**Evidencia:** requisitos numerados, validación del cliente y matriz de trazabilidad.
