# Arquitectura y diseño técnico

**Código:** DEV-ARQ-001  
**Proceso:** Desarrollo - ISO/IEC/IEEE 12207:2017  
**Responsable:** Christian  
**Apoyo:** Marco Ponce de León  
**Estado:** En revisión

## 1. Vista de componentes

```text
main.jsx
  └── App.jsx
       ├── HoloDashboard.jsx
       │    ├── navegación y pestañas
       │    ├── KPIs y mini-gráficas
       │    └── escena Three.js / React Three Fiber
       └── App.css / index.css
```

## 2. Responsabilidades

| Componente | Responsabilidad |
|---|---|
| `main.jsx` | Punto de entrada y montaje React |
| `App.jsx` | Composición principal de la aplicación |
| `HoloDashboard.jsx` | Interfaz, interacción y contenido del dashboard |
| `index.css` | Variables, estilos globales y tema |
| `App.css` | Presentación específica de la aplicación |

## 3. Criterios de revisión

- Los componentes tienen responsabilidades identificables.
- El cambio de tema no rompe la escena 3D.
- Los estilos no generan regresiones en pestañas ni KPIs.
- El build es reproducible.

**Evidencia:** diagrama, descripción de componentes, commit de revisión y build.
