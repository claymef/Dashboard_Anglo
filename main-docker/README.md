# main-docker

Contenedor aislado para las pruebas de Christian Layme.

Ejecución desde esta carpeta: docker compose build y docker compose up -d.
Dashboard: http://localhost:8082
Health check: http://localhost:8082/health

## Tareas de Christian

1. Construir la imagen sin errores.
2. Levantar el servicio y confirmar el contenedor dashboard-anglo-main-docker.
3. Verificar el dashboard en el puerto 8082.
4. Verificar /health y registrar respuesta ok.
5. Probar navegación, datos semilla y modos claro/oscuro desde el contenedor.
6. Revisar logs con docker compose logs.
7. Detener y volver a levantar el servicio para validar la configuración.
8. Comparar esta configuración con el despliegue principal sin modificar main.
9. Generar únicamente las evidencias nuevas de estas pruebas.
10. Actualizar el informe final y el PPTX con los resultados.
11. Crear un commit con hallazgos y correcciones.

## Evidencias esperadas

main-docker-build.png, main-docker-up.png, main-docker-dashboard.png,
main-docker-health.png, main-docker-logs.png y main-docker-restart.png.

Guardar las capturas en docs/03_qa/evidencias/ y enlazarlas desde el informe final y la presentación.
