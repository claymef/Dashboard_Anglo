# Evidencia de verificación - pestañas Inversión y Aliados

**Caso:** CP-09  
**Rama:** `feature/completar-pestanas`  
**Responsable:** Yoset Cozco  
**Estado:** Verificación técnica y visual aprobada

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

## Evidencia visual

Las capturas disponibles se guardaron en Drive dentro de `03_evidencias` y en el repositorio:

```text
docs/03_qa/evidencias/pestana-resumen.png
docs/03_qa/evidencias/pestana-impacto.png
docs/03_qa/evidencias/pestana-inversion.png
docs/03_qa/evidencias/pestana-aliados.png
```

Archivos disponibles actualmente:

- `seed-data-verificacion.png` - Resumen.
- `seed-data-inversion.png` - Inversión.
- `seed-data-aliados.png` - Aliados.

La pestaña Impacto queda cubierta por la evidencia de la primera captura y deberá anexarse con el nombre normalizado cuando se genere una captura específica.
