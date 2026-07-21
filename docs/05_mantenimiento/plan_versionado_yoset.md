# Plan versionado de implementación y pruebas de Yoset

**Código:** MANT-PLAN-002  
**Responsable:** Yoset Cozco  
**Revisor técnico:** Christian  
**QA:** Fidel  
**Cliente:** Harry Mollo Mayta  
**Proceso:** Mantenimiento, configuración, verificación y validación - ISO/IEC/IEEE 12207:2017  
**Estado:** Aprobado para ejecución

## Objetivo

Implementar los cambios aprobados por el cliente utilizando ramas, commits, Pull Requests, pruebas y evidencias trazables. El plan cubre datos semilla, pestañas faltantes, modo oscuro, validación y release.

## Reglas de versionado

- No trabajar directamente sobre `main`.
- Crear una rama por cambio.
- Un commit debe representar una unidad verificable.
- Usar mensajes con el ID de tarea o cambio.
- Abrir Pull Request hacia `main`.
- Christian revisa la integración.
- Fidel ejecuta las pruebas.
- Harry valida el comportamiento desde el uso previsto.

## Flujo de ramas

```text
main
 ├── feature/seed-data
 ├── feature/completar-pestanas
 ├── feature/modo-oscuro
 └── test/release-v1.1.0
```

## Fases de trabajo

| Fase | Rama | Trabajo | Commit sugerido | Evidencia |
|---|---|---|---|---|
| Y-01 | `feature/seed-data` | Crear datos semilla y aviso de datos demostrativos | `yoset: agregar datos semilla del dashboard` | `src/data/seedData.js` |
| Y-02 | `feature/seed-data` | Conectar KPIs y contenido a la semilla | `yoset: conectar dashboard a datos semilla` | Capturas y diff |
| Y-03 | `feature/completar-pestanas` | Implementar Inversión y Aliados | `yoset: completar contenido de pestañas` | CP-09 |
| Y-04 | `feature/modo-oscuro` | Implementar estado y estilos de tema | `yoset: implementar modo oscuro` | CP-08 |
| Y-05 | `feature/modo-oscuro` | Corregir estados visuales y contraste | `yoset: ajustar contraste del tema` | Capturas antes/después |
| Y-06 | `test/release-v1.1.0` | Ejecutar regresión y preparar evidencias | `yoset: documentar regresion v1.1.0` | MANT-INF-001 |
| Y-07 | `test/release-v1.1.0` | Preparar release junto con Christian | `release: preparar v1.1.0` | Tag, notas y acta |

## Criterios de paso

No se inicia la siguiente fase si la rama anterior no tiene Pull Request, el build falla, los datos no se visualizan, existe un defecto crítico sin decisión, falta actualizar la trazabilidad o se modifica el alcance sin aprobación de Harry.

## Pruebas obligatorias

| ID | Prueba | Resultado requerido |
|---|---|---|
| CP-01 | Carga inicial | Dashboard visible |
| CP-02 | Navegación | Las pestañas cambian correctamente |
| CP-03 | KPIs | Valores y etiquetas legibles |
| CP-04 | Rotación 3D | Interacción controlable |
| CP-06 | Build | `npm run build` exitoso |
| CP-08 | Modo oscuro | Tema completo y legible |
| CP-09 | Pestañas completas | Inversión y Aliados no quedan vacías |
| CP-11 | Datos semilla | Datos demostrativos identificados |

Cada Pull Request debe incluir ID de cambio, resumen, archivos modificados, capturas, lint/build, pruebas, riesgos y aprobación de Christian.
