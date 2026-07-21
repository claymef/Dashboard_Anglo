# Evidencia de verificación - modo oscuro

**Caso:** CP-08  
**Rama:** `feature/modo-oscuro`  
**Responsable:** Yoset Cozco  
**Estado:** Verificación técnica aprobada; captura visual pendiente

## Implementación

- Estado `darkMode` en `src/HoloDashboard.jsx`.
- Control accesible para alternar tema.
- Clases `theme-dark` y `theme-light`.
- Variables y estilos alternativos en `src/index.css`.
- Navegación, KPIs y controles 3D conservados.

## Verificación técnica

| Verificación | Resultado |
|---|---|
| `npm run build` dentro de Docker | Aprobado |
| Página `http://localhost:8081/` | HTTP 200 |
| Healthcheck `/health` | HTTP 200 |
| Control de tema presente | Implementado |
| Estado accesible (`aria-pressed`) | Implementado |
| Datos y KPIs modificados | No |
| Captura claro/oscuro | Pendiente |

## Evidencia visual requerida

Guardar las capturas del navegador en:

```text
docs/03_qa/evidencias/modo-oscuro.png
docs/03_qa/evidencias/modo-claro.png
```
