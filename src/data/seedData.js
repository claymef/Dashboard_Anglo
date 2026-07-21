/**
 * Datos semilla para demostración y pruebas.
 * No representan información oficial ni datos de producción.
 */
export const seedDashboardData = {
  metadata: {
    projectId: 'PROJ-2025-QVC',
    projectName: 'Quellaveco',
    organization: 'Anglo American',
    period: '2025',
    sourceLabel: 'Datos demostrativos - no oficiales',
    version: 'seed-1.0.0',
  },
  kpis: [
    { id: 'coverage', label: 'COBERTURA', value: '38', sub: 'Eventos ejecutados', chart: true },
    { id: 'reach', label: 'ALCANCE', value: '100%', sub: 'Región Moquegua', chart: false },
    { id: 'return', label: 'RETORNO', value: 'ALTO', sub: 'Valor compartido', chart: true },
  ],
  tabs: {
    RESUMEN: { title: 'REPORTE EJECUTIVO 2025', description: 'Resumen demostrativo de relaciones comunitarias.' },
    IMPACTO: { title: 'FONDO CONCURSABLE & EDUCACIÓN', description: 'Programas demostrativos de impacto.' },
    INVERSION: { title: 'INVERSIÓN SOCIAL', description: 'Distribución demostrativa de iniciativas y recursos.' },
    ALIADOS: { title: 'RED DE ALIADOS', description: 'Actores representados para fines de demostración.' },
  },
};
