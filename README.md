# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Documentación y responsabilidades

La documentación está organizada por fases de ISO/IEC/IEEE 12207 en [`docs/`](docs/).

| Fase | Responsable principal | Entregables |
|---|---|---|
| Inicio | Marco Ponce de León | SRS (Especificación de Requisitos de Software), contrato y configuración inicial |
| Desarrollo | Christian | Código, arquitectura y manual |
| QA (Aseguramiento de Calidad) | Fidel | Plan de pruebas, Bug Log (registro de errores) e informe QA |
| Operación | C. Mollo | Evaluación operativa y RFC (Solicitud Formal de Cambio) |
| Mantenimiento | Yoset Cozco | Análisis de impacto, upgrade e informe técnico |
| Cierre | Marco Ponce de León | Informe final y reflexiones |

La asignación detallada está en [`docs/tareas/matriz_asignacion.md`](docs/tareas/matriz_asignacion.md).
