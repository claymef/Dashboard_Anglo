# Plan de implementación de cambios aprobados

**Código:** MANT-PLAN-001  
**Proceso:** Mantenimiento, configuración, verificación y evaluación - ISO/IEC/IEEE 12207:2017  
**Estado:** Pendiente de aprobación

## Secuencia obligatoria

| Paso | Actividad | Entrada | Salida | Responsable |
|---|---|---|---|---|
| 1 | Confirmar RFC aprobada | RFC y decisión cliente | Alcance congelado | Marco |
| 2 | Actualizar requisitos | RFC aprobada | SRS y registro de cambios | Marco |
| 3 | Actualizar arquitectura | SRS modificado | Arquitectura objetivo | Christian |
| 4 | Analizar impacto | Arquitectura y código | Riesgos y archivos | Yoset |
| 5 | Crear rama | Baseline aprobada | Rama de feature | Christian/Yoset |
| 6 | Implementar | Código y diseño | Commit(s) | Yoset/Christian |
| 7 | Revisar | Pull Request | Comentarios y aprobación | Revisor |
| 8 | Verificar | Build y aplicación | Resultados QA | Fidel |
| 9 | Validar | Versión candidata | Aceptación cliente | C. Mollo |
| 10 | Liberar | Evidencias aprobadas | Tag y notas | Christian/Yoset |
| 11 | Cerrar | Release y documentos | Informe final actualizado | Marco |

## Condiciones de bloqueo

El cambio debe bloquearse si:

- No tiene aprobación del cliente.
- No tiene análisis de impacto.
- Afecta requisitos sin actualizar el SRS.
- El build falla.
- Existe defecto crítico abierto.
- La evidencia no permite reproducir el resultado.
- Se modifica alcance sin nueva decisión.
