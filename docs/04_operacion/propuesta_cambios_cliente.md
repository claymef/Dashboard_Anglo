# Propuesta de cambios y alcance para el cliente

**Código:** OPE-PROP-001  
**Proceso:** Operación, adquisición, validación y mantenimiento - ISO/IEC/IEEE 12207:2017  
**Solicitante de revisión:** Harry Mollo Mayta, cliente  
**Responsable:** Marco Ponce de León  
**Estado:** Revisada en simulación académica

## 1. Objetivo

Presentar al cliente las mejoras necesarias para que el dashboard sea coherente con los requisitos, verificable mediante pruebas y controlable durante su mantenimiento.

## 2. Cambio principal propuesto: modo oscuro

### Necesidad

Reducir el brillo de la interfaz durante presentaciones nocturnas y conservar la legibilidad de KPIs, navegación y panel 3D.

### Alcance incluido

- Control visible para activar/desactivar el tema.
- Variables de color para tema claro y oscuro.
- Adaptación de paneles, bordes, botones, textos y gráficas.
- Revisión de estados activo, hover, foco y deshabilitado.
- Validación de contraste y regresión funcional.

### Fuera de alcance

- Cambio de datos o indicadores.
- Persistencia entre sesiones, salvo aprobación expresa.
- Autenticación, perfiles o preferencias por usuario.
- Rediseño completo de la escena 3D.
- Soporte para todos los dispositivos del mercado.

### Criterios de aceptación del cliente

1. El control de tema es visible y comprensible.
2. El cambio se aplica sin recargar la página.
3. Los cuatro espacios de navegación no pierden contenido ni estado.
4. Los KPIs mantienen valor, etiqueta y lectura.
5. Los controles 3D siguen operativos.
6. El build y la regresión son aprobados.
7. El cliente firma la aceptación de la versión.

## 3. Cambios recomendados antes de cerrar la versión

| ID | Cambio | Motivo | Prioridad | Aprobación |
|---|---|---|---|---|
| CHG-01 | Completar contenido de `INVERSION` y `ALIADOS` o retirarlas del alcance | Evitar requisito parcialmente implementado | Alta | Cliente |
| CHG-02 | Implementar selector de tema | Cumplir RF-05 | Alta | Cliente |
| CHG-03 | Sustituir datos ambiguos por datos demostrativos etiquetados | Evitar interpretación como información oficial | Alta | Cliente |
| CHG-04 | Revisar layout fijo de 1400x850 | Mejorar evaluación en pantallas distintas | Media | Equipo |
| CHG-05 | Retirar o declarar placeholder de IA Assistant | Evitar promesa funcional no implementada | Media | Cliente |
| CHG-06 | Normalizar codificación UTF-8 | Evitar errores de presentación documental y de interfaz | Alta | Equipo |

## 4. Archivos probablemente afectados

| Cambio | Archivos principales | Archivos de soporte |
|---|---|---|
| CHG-01 | `src/HoloDashboard.jsx` | `docs/01_inicio/SRS.md`, `docs/03_qa/plan_pruebas.md` |
| CHG-02 | `src/App.jsx` o `src/HoloDashboard.jsx`, `src/index.css`, `src/App.css` | `docs/05_mantenimiento/analisis_impacto.md`, `docs/03_qa/plan_pruebas.md` |
| CHG-03 | `src/HoloDashboard.jsx` | `docs/escenario_inicial.md`, `docs/01_inicio/SRS.md` |
| CHG-04 | `src/index.css`, `src/App.css` | `docs/02_desarrollo/arquitectura.md`, `docs/03_qa/plan_pruebas.md` |
| CHG-05 | `src/HoloDashboard.jsx` | `docs/01_inicio/SRS.md`, `docs/02_desarrollo/manual_usuario.md` |
| CHG-06 | todos los `.md` y textos JSX/CSS afectados | `docs/00_gobierno/control_documental.md` |

## 5. Decisión solicitada al cliente

El cliente debe decidir:

- Si `INVERSION` y `ALIADOS` se implementan en esta versión o pasan a una versión futura.
- Si el modo oscuro se activa mediante botón, preferencia automática o ambas.
- Si el cambio de tema debe persistir al recargar.
- Si el placeholder de IA se mantiene como elemento visual o se retira.
- Si se acepta la aplicación como demostración académica con datos estáticos.

**Decisión:** Pendiente.  
**Fecha:** Pendiente.  
**Aprobador:** Pendiente.
