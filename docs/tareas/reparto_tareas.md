# Reparto de Tareas y Sustentación bajo la Norma ISO/IEC 12207

Este documento detalla la distribución de roles, responsabilidades y tareas del proyecto práctico final de mantenimiento, sustentando cada fase de la simulación en los procesos del ciclo de vida del software definidos por el estándar **ISO/IEC 12207**.

---

## 👥 1. Integrantes y Roles (5 Miembros)

Para cumplir con la simulación de la relación Cliente-Proveedor requerida por la norma, los roles se distribuyen de la siguiente manera:

1. **El Cliente (Anglo Representative)**
   * **Integrante:** C. Mollo | **Correo UNSA:** cmollo@unsa.edu.pe
   * **Rol ISO/IEC 12207:** Representa la parte adquiriente del software.
2. **Project Manager / Analista de Requisitos**
   * **Integrante:** Marco Ponce de León | **Correo UNSA:** mponcedeleona@unsa.edu.pe
   * **Rol ISO/IEC 12207:** Líder del proceso de Suministro y Análisis de Requisitos.
3. **Desarrollador Frontend Principal (Owner de GitHub)**
   * **Integrante:** Christian (xalo2708 / claymef)
   * **Rol ISO/IEC 12207:** Responsable del Proceso de Implementación/Desarrollo de Software.
4. **Desarrollador de Soporte / Mantenimiento**
   * **Integrante:** Yoset Cozco | **Correo UNSA:** ycozco@unsa.edu.pe
   * **Rol ISO/IEC 12207:** Responsable del Proceso de Mantenimiento de Software y Control de Cambios.
5. **QA Tester / Aseguramiento de Calidad**
   * **Integrante:** Fidel
   * **Rol ISO/IEC 12207:** Responsable de los Procesos de Soporte (Verificación, Validación y Calidad).

---

## 📚 2. Sustentación Teórica y Distribución de Tareas por Fase

A continuación se detalla cada etapa del proyecto, justificando el cumplimiento de las tareas según las cláusulas y procesos de la norma **ISO/IEC 12207**:

### 📝 Fase A: Inicio (Procesos de Adquisición y Suministro)
*   **Sustentación ISO/IEC 12207:**
    *   **Proceso de Adquisición:** Define las actividades del adquiriente (C. Mollo) al establecer la necesidad de adquisición, definir los requisitos del servicio y evaluar las propuestas.
    *   **Proceso de Suministro:** Define las actividades del proveedor (liderado por Marco Ponce de León) al preparar una respuesta de propuesta, negociar y firmar un contrato formal que garantice la entrega del producto con la calidad acordada.
*   **Tareas y Entregables:**
    1.  **Documento de Especificación de Requisitos de Software (SRS):** Levantamiento de requisitos bajo el estándar IEEE 830, definiendo las vistas 3D, controles del Canvas y KPIs del dashboard minero.
        *   *Responsable:* Marco Ponce de León (con feedback y validación del Cliente: C. Mollo).
    2.  **Contrato Simulado:** Documento legal que formaliza los términos del acuerdo de desarrollo de software (alcance, cronograma, hitos de entrega y costos).
        *   *Responsable:* Marco Ponce de León.
    3.  **Planificación de la Configuración Inicial (Proceso de Soporte):** Configuración del repositorio en GitHub, definición de la estructura de ramas y la política de mensajes de commit para asegurar la trazabilidad.
        *   *Responsable:* Christian.

---

### 💻 Fase B: Desarrollo (Proceso de Desarrollo de Software)
*   **Sustentación ISO/IEC 12207:**
    *   **Proceso de Implementación de Software (Desarrollo):** Abarca el análisis de arquitectura, diseño de componentes, codificación y la integración del software.
    *   **Proceso de Documentación (Soporte):** Registro sistemático de la información técnica producida para facilitar el entendimiento de la estructura y la futura mantenibilidad del software.
*   **Tareas y Entregables:**
    1.  **Código Fuente Base estructurado:** Verificación de la compilación limpia del proyecto en React 19 + Vite (rolldown-vite) + Three.js y React Three Fiber.
        *   *Responsable:* Christian.
    2.  **Diagrama de Arquitectura / Diseño Técnico:** Documentación del flujo de datos entre `App.jsx`, `HoloDashboard.jsx` y los archivos CSS de la interfaz holográfica.
        *   *Responsable:* Christian.
    3.  **Manual de Usuario y Despliegue:** Guía detallada con los pasos para levantar el entorno de desarrollo local (`npm install`, `npm run dev`) y guiar al usuario en la interacción 3D de la escena.
        *   *Responsable:* Christian.
    4.  **Revisión Técnica Conjunta (Proceso de Soporte):** Inspección de código base antes de iniciar las fases de pruebas formales para identificar deudas técnicas.
        *   *Responsables:* Christian y Yoset Cozco.

---

### 🧪 Fase C: Verificación y Validación (Procesos de Soporte: QA, Verificación y Validación)
*   **Sustentación ISO/IEC 12207:**
    *   **Proceso de Verificación:** Evalúa si el producto de software cumple de manera consistente con las especificaciones técnicas del diseño técnico en cada hito.
    *   **Proceso de Validación:** Confirma mediante pruebas dinámicas si el software cumple con el uso previsto y los requisitos del cliente final (Aseguramiento de Calidad).
    *   **Proceso de Resolución de Problemas:** Proporciona un ciclo de vida estructurado para registrar, analizar y corregir anomalías detectadas en las pruebas.
*   **Tareas y Entregables:**
    1.  **Plan de Pruebas (Test Plan):** Diseño de casos de prueba enfocados en la interactividad (rotación 3D, selección de pestañas, renderizado dinámico de KPIs y mini-gráficas CSS).
        *   *Responsable:* Fidel.
    2.  **Registro de Errores (Bug Log con flujo de resolución):** Registro detallado de 2 o 3 incidencias simuladas detectadas en la interfaz o navegación, documentando su estado (*Abierto $\rightarrow$ En Corrección $\rightarrow$ Resuelto $\rightarrow$ Verificado*).
        *   *Responsable:* Fidel.
    3.  **Informe de Validación (QA):** Declaración formal de calidad técnica y conformidad del software respecto a los requisitos acordados en la Fase A.
        *   *Responsable:* Fidel.

---

### 🗣️ Fase D: Operación Simulada (Proceso de Operación de Software)
*   **Sustentación ISO/IEC 12207:**
    *   **Proceso de Operación:** Define el uso del producto de software en su entorno real de trabajo. El adquiriente/usuario final opera el sistema y recopila datos de rendimiento, emitiendo retroalimentación y solicitudes de cambio basadas en la usabilidad cotidiana.
*   **Tareas y Entregables:**
    1.  **Evaluación de Operación Simulada:** Pruebas del dashboard 3D simulando el entorno de visualización ejecutiva para la operación minera de Quellaveco.
        *   *Responsable:* C. Mollo.
    2.  **Solicitud Formal de Cambio (RFC):** Registro documentado del cliente solicitando una mejora necesaria (ej. un Modo Oscuro para visualización nocturna en salas de control o exportación a PDF de los reportes).
        *   *Responsable:* C. Mollo.

---

### 🔧 Fase E: Mantenimiento (Proceso de Mantenimiento de Software)
*   **Sustentación ISO/IEC 12207:**
    *   **Proceso de Mantenimiento:** Gestiona las modificaciones al producto de software (correctivas, adaptativas, perfectivas o preventivas) preservando la integridad del sistema. Requiere un análisis de impacto previo a la codificación para mitigar riesgos en componentes existentes.
*   **Tareas y Entregables:**
    1.  **Análisis de Impacto de la Mejora:** Evaluación técnica para prever cómo afectará el cambio solicitado (ej. el CSS del modo oscuro) a los shaders de iluminación 3D, la jerarquía de componentes React y el renderizado del HTML transformado.
        *   *Responsable:* Yoset Cozco.
    2.  **Codificación de la Mejora (Nueva Versión):** Implementación técnica de la mejora en una rama aislada de Git (`feature-modo-oscuro`) y posterior integración mediante Pull Request al repositorio administrado por Christian.
        *   *Responsable:* Yoset Cozco.
    3.  **Informe Técnico de Mantenimiento y Control de Cambios:** Detalle de los archivos modificados, diffs del código de la mejora e informe de las pruebas de regresión realizadas para asegurar que no se introdujeron nuevos errores.
        *   *Responsable:* Yoset Cozco.
    4.  **Liberación del Software (Release):** Generación de una nueva versión empaquetada (ej. Tag `v1.1.0`) en GitHub con la mejora integrada y el manual actualizado.
        *   *Responsables:* Christian y Yoset Cozco.

---

## 📚 3. Consolidación del Informe Final e Hito de Cierre

Una vez completadas todas las fases técnicas y de documentación parcial, el equipo se reunirá en una **Revisión Técnica Conjunta** final para integrar los entregables en un informe de entrega del proyecto.

*   **Líder de Integración:** Marco Ponce de León (PM).
*   **Evaluación y Reflexiones (Proceso de Evaluación del Ciclo de Vida):** El equipo completo responderá las 3 preguntas de reflexión obligatorias sobre el valor del estándar ISO/IEC 12207, la facilidad/dificultad de aplicación en el proyecto de mantenimiento y la adaptación del enfoque a metodologías ágiles como Scrum.
