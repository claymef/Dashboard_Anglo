# Reparto de Tareas - Proyecto Práctico Final (ISO/IEC 12207)

Este documento detalla la distribución de roles, responsabilidades y tareas asignadas para el cumplimiento de los requerimientos del proyecto final de mantenimiento, adaptando la simulación del estándar ISO/IEC 12207 a un equipo de 5 integrantes.

---

## 👥 Integrantes y Roles (5 Miembros)

1. **El Cliente (Anglo Representative)**
   * **Integrante:** C. Mollo
   * **Correo UNSA:** cmollo@unsa.edu.pe
   * **Responsabilidades:** Define los requisitos de negocio del dashboard, firma el contrato simulado, evalúa el dashboard en operación simulada, reporta errores y solicita la mejora final.

2. **Project Manager / Analista de Requisitos**
   * **Integrante:** Marco Ponce de León
   * **Correo UNSA:** mponcedeleona@unsa.edu.pe
   * **Responsabilidades:** Lidera la negociación con el cliente, redacta el contrato simulado, el documento de requisitos (SRS) y coordina la integración del informe final.

3. **Desarrollador Frontend Principal (Owner de GitHub)**
   * **Integrante:** Christian (xalo2708 / claymef)
   * **Responsabilidades:** Propietario del repositorio remoto. Mantiene la rama principal del código en React (Fase B), documenta la arquitectura técnica del código y redacta el manual de usuario básico.

4. **Desarrollador de Soporte / Mantenimiento**
   * **Integrante:** Yoset Cozco (Tú)
   * **Correo UNSA:** ycozco@unsa.edu.pe
   * **Responsabilidades:** Colabora en el desarrollo de la aplicación y se encarga de codificar e implementar la mejora de mantenimiento solicitada por el cliente en una rama de Git (`feature-modo-oscuro`) y elaborar el informe de mantenimiento.

5. **QA Tester / Aseguramiento de Calidad**
   * **Integrante:** Fidel
   * **Responsabilidades:** Diseña el plan de pruebas de la aplicación, registra los bugs simulados y redacta el informe de validación final.

---

## 📅 Distribución de Entregables por Fase

### Fase A: Inicio (Adquisición y Suministro) 📝
* **Dinámica:** El Cliente define las necesidades de negocio del Dashboard para Anglo American Quellaveco.
* **Entregables:**
  * **Documento de Requisitos (SRS):** Detalle de pantallas, KPIs y vistas en 3D.
    * *Responsable:* Marco Ponce de León (con feedback de C. Mollo).
  * **Contrato Simulado:** Acuerdo de desarrollo firmado por ambas partes.
    * *Responsable:* Marco Ponce de León.

### Fase B: Desarrollo 💻
* **Dinámica:** Utilización de la base del repositorio React + Three.js (`Dashboard_Anglo`).
* **Entregables:**
  * **Código Fuente Estructurado:** Asegurar compilación y despliegue local correcto.
    * *Responsable:* Christian.
  * **Diagrama de Arquitectura:** Vista de componentes React y flujo de renderizado 3D.
    * *Responsable:* Christian.
  * **Manual de Usuario:** Pasos de instalación (`npm install`, `npm run dev`) y guía de navegación 3D.
    * *Responsable:* Christian.

### Fase C: Verificación y Validación (Pruebas) 🧪
* **Dinámica:** Aseguramiento de la calidad del dashboard antes de su entrega formal.
* **Entregables:**
  * **Plan de Pruebas:** Casos de prueba para verificar navegación interactiva y rendering 3D.
    * *Responsable:* Fidel.
  * **Registro de Errores (Bug Log):** Simulación de 2-3 incidencias encontradas y su resolución.
    * *Responsable:* Fidel.
  * **Informe de Validación:** Documento de conformidad y calidad del software.
    * *Responsable:* Fidel.

### Fase D: Operación Simulada (Feedback) 🗣️
* **Dinámica:** Entrega del dashboard al cliente para su uso y evaluación.
* **Entregables:**
  * **Registro de Feedback del Cliente:** Comentarios y solicitud formal de una mejora (ej. modo oscuro o botón para exportar reportes).
    * *Responsable:* C. Mollo.

### Fase E: Mantenimiento (La Mejora) 🔧
* **Dinámica:** Implementación del cambio solicitado por el cliente en una rama separada.
* **Entregables:**
  * **Nueva Versión del Código:** Desplegado en la rama `feature-modo-oscuro` (o similar).
    * *Responsable:* Yoset Cozco.
  * **Registro de Solicitud de Mejora:** Documentación del cambio solicitado.
    * *Responsable:* Yoset Cozco.
  * **Informe Técnico de Mantenimiento:** Resumen de archivos modificados y pruebas de la mejora.
    * *Responsable:* Yoset Cozco.

---

## 📚 Entrega Final e Informe de Reflexión
Al finalizar, se consolidarán todos los entregables en un único documento PDF liderado por **Marco Ponce de León**, respondiendo a las preguntas de reflexión de la guía docente de manera grupal con los aportes de todos los integrantes del equipo.
