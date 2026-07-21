# Mapa de archivos para cambios de mantenimiento

**Código:** MANT-MAP-001  
**Proceso:** Mantenimiento y gestión de configuración - ISO/IEC/IEEE 12207:2017  
**Estado:** Propuesto

## Baseline actual

| Archivo | Función actual | Relación con cambio |
|---|---|---|
| `src/main.jsx` | Montaje React e importación de estilos globales | Verificar que el tema global se cargue |
| `src/App.jsx` | Canvas 3D, luces, cámara y controles | Posible ubicación de estado global del tema |
| `src/HoloDashboard.jsx` | HTML, pestañas, KPIs y contenido | Implementar control, pestañas faltantes y estados |
| `src/index.css` | Variables y estilos globales | Definir tokens claro/oscuro y responsive |
| `src/App.css` | Estilos del template y root | Limpiar reglas heredadas y revisar conflicto |
| `package.json` | Scripts y dependencias | Registrar comandos de validación |

## Cambio mínimo recomendado

1. Definir una fuente única de estado del tema.
2. Añadir atributo o clase en el contenedor raíz.
3. Sustituir colores fijos por variables donde corresponda.
4. Revisar estilos inline que impiden cambiar de tema.
5. Implementar o delimitar `INVERSION` y `ALIADOS`.
6. Ejecutar build, lint y pruebas manuales.

## Trazabilidad técnica

| Actividad | Documento | Evidencia |
|---|---|---|
| Aprobación del cambio | `docs/04_operacion/RFC-001-modo-oscuro.md` | Aprobación cliente |
| Impacto | `docs/05_mantenimiento/analisis_impacto.md` | Matriz de archivos/riesgos |
| Implementación | Pull Request | Diff y revisión |
| Verificación | `docs/03_qa/plan_pruebas.md` | Resultados CP-01 a CP-08 |
| Cierre técnico | `docs/05_mantenimiento/informe_mantenimiento.md` | Commits y regresión |
| Release | `docs/06_cierre/` | Tag, notas y acta |
