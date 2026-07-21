# Evidencia de verificación - pestañas Inversión y Aliados

**Caso:** CP-09  
**Rama:** `feature/completar-pestanas`  
**Responsable:** Yoset Cozco  
**Estado:** Verificación técnica aprobada; captura visual pendiente

## Implementación

Se añadieron contenidos demostrativos para:

- Inversión Social.
- Red de Aliados.

Archivo principal:

```text
src/HoloDashboard.jsx
```

## Verificación técnica

| Verificación | Resultado |
|---|---|
| `npm run build` dentro de Docker | Aprobado |
| Página `http://localhost:8081/` | HTTP 200 |
| Healthcheck `/health` | HTTP 200 |
| Contenido Inversión | Implementado |
| Contenido Aliados | Implementado |
| Datos productivos | No utilizados |

## Evidencia visual pendiente

Capturar las cuatro pestañas desde el navegador y guardar las imágenes en:

```text
docs/03_qa/evidencias/pestana-resumen.png
docs/03_qa/evidencias/pestana-impacto.png
docs/03_qa/evidencias/pestana-inversion.png
docs/03_qa/evidencias/pestana-aliados.png
```
