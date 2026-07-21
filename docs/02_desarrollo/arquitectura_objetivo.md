# Arquitectura objetivo después de las solicitudes de cambio

**Código:** DEV-ARQ-002  
**Proceso:** Desarrollo, diseño, gestión técnica y configuración - ISO/IEC/IEEE 12207:2017  
**Baseline:** `DEV-ARQ-001`  
**Estado:** Propuesta para aprobación

## 1. Motivo

La arquitectura básica actual ya permite representar el dashboard 3D, pero las solicitudes de cambio exigen una arquitectura objetivo que soporte temas visuales, contenido completo por pestaña, trazabilidad de datos demostrativos y una posible adaptación responsive.

## 2. Arquitectura objetivo propuesta

```text
main.jsx
  └── App.jsx
       ├── ThemeProvider / estado de tema
       │    ├── tema claro
       │    └── tema oscuro
       ├── Canvas 3D
       │    ├── cámara
       │    ├── luces
       │    ├── Stars
       │    ├── OrbitControls
       │    └── HoloDashboard
       │         ├── Navigation
       │         ├── TabContent
       │         │    ├── Resumen
       │         │    ├── Impacto
       │         │    ├── Inversión
       │         │    └── Aliados
       │         ├── KpiPanel
       │         ├── MiniChart
       │         ├── ThemeToggle
       │         └── DemoDataNotice
       └── hojas de estilo / tokens visuales
```

## 3. Cambios respecto de la arquitectura actual

| Elemento | Arquitectura actual | Arquitectura objetivo | Motivo |
|---|---|---|---|
| Tema | Colores fijos e inline | Tokens claro/oscuro | CHG-001 |
| Pestañas | Dos contenidos implementados | Cuatro contenidos definidos | CHG-002 |
| Datos | Literales en componente | Datos demostrativos identificados | CHG-004 |
| Layout | 1400x850 fijo | Reglas responsive evaluables | CHG-003 |
| IA Assistant | Texto estático | Placeholder declarado o módulo futuro | CHG-005 |

## 4. Condiciones técnicas

- El estado del tema debe tener una única fuente de verdad.
- Los estilos inline que bloqueen la tematización deben migrarse a clases o variables.
- Las pestañas deben tener contenido o declararse fuera de alcance.
- Los datos no deben presentarse como fuente oficial.
- La escena 3D debe conservar cámara, iluminación y controles.
- El cambio no debe añadir dependencia sin justificarla.
- Toda modificación debe ser revisada mediante Pull Request.

## 5. Archivos previstos

- `src/App.jsx`.
- `src/HoloDashboard.jsx`.
- `src/index.css`.
- `src/App.css`.
- Opcionalmente nuevos componentes bajo `src/components/` si el equipo aprueba separar navegación, KPIs y contenido.

**Criterio de aceptación:** arquitectura aprobada, diagrama actualizado, archivos afectados identificados y relación con requisitos documentada.
