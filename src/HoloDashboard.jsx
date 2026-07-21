import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { seedDashboardData } from './data/seedData';

// Componente pequeño para simular una gráfica de barras en CSS
const MiniChart = () => (
  <div className="fake-graph-bar">
    {[40, 70, 50, 90, 60, 80, 40, 100].map((h, i) => (
      <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
    ))}
  </div>
);

export function HoloDashboard() {
  const [activeTab, setActiveTab] = useState('RESUMEN');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty('--app-background', darkMode ? '#020617' : '#dbe4ee');
    document.documentElement.style.setProperty('--app-surface', darkMode ? '#020617' : '#dbe4ee');
  }, [darkMode]);

  const seedKpis = seedDashboardData.kpis;

  /* DATOS DEL PPT (KPIs legacy)
  const kpis = [
    { label: "COBERTURA", value: "38", sub: "Eventos Ejecutados", chart: true },
    { label: "ALCANCE", value: "100%", sub: "Región Moquegua", chart: false },
    { label: "RETORNO", value: "ALTO", sub: "Valor Compartido", chart: true }
  ]; */

  return (
    <Html transform position={[0, 0, 0]} distanceFactor={1.5}>
      <div className={`holo-container ${darkMode ? 'theme-dark' : 'theme-light'}`}>
        
        {/* --- 1. ZONA IZQUIERDA: MENÚ TÁCTIL --- */}
        <div className="glass-panel" style={{ justifyContent: 'space-between' }}>
          <div className="tech-border"></div> {/* Decoración de esquina */}
          
          <div>
            <div style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
              <div style={{ fontSize: '10px', color: '#666' }}>ID: PROJ-2025-QVC</div>
              <h2 style={{ color: 'white', fontSize: '1.2rem' }}>ANGLO AMERICAN</h2>
              <div style={{ color: '#ff6030', fontSize: '0.8rem', letterSpacing: '3px' }}>QUELLAVECO</div>
            </div>

            <nav>
              <button className={`nav-btn ${activeTab === 'RESUMEN' ? 'active' : ''}`} onClick={() => setActiveTab('RESUMEN')}>
                ▣ RESUMEN
              </button>
              <button className={`nav-btn ${activeTab === 'IMPACTO' ? 'active' : ''}`} onClick={() => setActiveTab('IMPACTO')}>
                ◈ IMPACTO
              </button>
              <button className={`nav-btn ${activeTab === 'INVERSION' ? 'active' : ''}`} onClick={() => setActiveTab('INVERSION')}>
                📈 INVERSIÓN
              </button>
              <button className={`nav-btn ${activeTab === 'ALIADOS' ? 'active' : ''}`} onClick={() => setActiveTab('ALIADOS')}>
                ☷ ALIADOS
              </button>
              <button
                className="theme-toggle"
                type="button"
                onClick={() => setDarkMode((current) => !current)}
                aria-pressed={darkMode}
                aria-label={darkMode ? 'Activar tema claro' : 'Activar modo oscuro'}
              >
                {darkMode ? '☀ TEMA CLARO' : '◐ MODO OSCURO'}
              </button>
            </nav>
          </div>

          <div style={{ fontSize: '10px', color: '#444', fontFamily: 'monospace' }}>
            SYS.ONLINE<br/>V.2.0.4<br/>LAT: -17.19<br/>LON: -70.93
          </div>
        </div>

        {/* --- 2. ZONA CENTRAL: EL "HERO" GIGANTE --- */}
        <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="tech-border"></div> {/* Decoración esquina */}
          
          {/* Decoraciones de fondo "HUD" */}
          <div style={{ position: 'absolute', top: 20, right: 20, color: '#002fff', fontSize: '10px' }}>REC ●</div>
          <div style={{ position: 'absolute', bottom: 20, left: 20, width: '100px', height: '2px', background: '#00f0ff', opacity: 0.3 }}></div>

          <AnimatePresence mode='wait'>
            
            {activeTab === 'RESUMEN' && (
              <motion.div 
                key="resumen"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}
              >
                <h2 style={{ color: '#fd1a1a' }}>REPORTE EJECUTIVO 2025</h2>
                <h1 style={{ color: '#ffffff', marginBottom: '20px' }}>CONSTRUYENDO<br/>CONFIANZA</h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', lineHeight: '1.6' }}>
                  Un enfoque estratégico en relaciones comunitarias, pasando de procesos transaccionales a una 
                  <strong style={{ color: 'white' }}> inversión de largo plazo</strong> basada en el respeto mutuo.
                </p>
                <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                   <div style={{ color: '#ffffff', padding: '10px 20px', border: '1px solid #333', borderRadius: '4px' }}>38 INTERVENCIONES</div>
                   <div style={{ color: '#ffffff', padding: '10px 20px', border: '1px solid #333', borderRadius: '4px' }}>COBERTURA TOTAL</div>
                </div>
              </motion.div>
            )}

            {activeTab === 'IMPACTO' && (
              <motion.div 
                key="impacto"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ height: '100%', padding: '40px' }}
              >
                <h1 style={{ fontSize: '2.5rem' }}>FONDO CONCURSABLE &<br/><span style={{ color: '#002fff' }}>EDUCACIÓN</span></h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                    <h3 style={{ color: '#ff6030', margin: 0 }}>FONDO COMUNITARIO</h3>
                    <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Financiamiento competitivo para iniciativas culturales y productivas. Promueve empoderamiento ciudadano.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                    <h3 style={{ color: '#ff6030', margin: 0 }}>OLIMPIADAS ACADÉMICAS</h3>
                    <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Apoyo sistemático a instituciones educativas y concursos de talento estudiantil.</p>
                  </div>
                </div>
                {/* Placeholder de Video si tuvieras uno */}
                <div style={{ marginTop: '20px', height: '150px', background: 'rgba(0,0,0,0.5)', border: '1px dashed #444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#666' }}>[ ESPACIO RESERVADO PARA VIDEO DEL MARATÓN ]</span>
                </div>
              </motion.div>
            )}

             {/* Puedes agregar más bloques para INVERSION y ALIADOS aquí siguiendo el mismo patrón */}

            {activeTab === 'INVERSION' && (
              <motion.div
                key="inversion"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                style={{ height: '100%', padding: '40px' }}
              >
                <h1 style={{ fontSize: '2.5rem' }}>INVERSIÓN <span style={{ color: '#ff6030' }}>SOCIAL</span></h1>
                <p style={{ fontSize: '1rem', color: '#aaa', maxWidth: '600px', lineHeight: '1.6' }}>
                  Distribución demostrativa de iniciativas y recursos del periodo evaluado.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '35px' }}>
                  {['Programas priorizados', 'Recursos comprometidos', 'Avance de ejecución'].map((label, index) => (
                    <div key={label} className="glass-panel" style={{ minHeight: '130px', justifyContent: 'center' }}>
                      <h2>{label}</h2>
                      <div className="big-number">{['12', '68%', '74%'][index]}</div>
                      <div className="sub-stat">Dato demostrativo</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'ALIADOS' && (
              <motion.div
                key="aliados"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                style={{ height: '100%', padding: '40px' }}
              >
                <h1 style={{ fontSize: '2.5rem' }}>RED DE <span style={{ color: '#002fff' }}>ALIADOS</span></h1>
                <p style={{ fontSize: '1rem', color: '#aaa', maxWidth: '600px', lineHeight: '1.6' }}>
                  Actores y organizaciones representados para fines de demostración ejecutiva.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '35px' }}>
                  {['Instituciones participantes', 'Comunidades vinculadas', 'Convenios activos', 'Mesas de coordinación'].map((label, index) => (
                    <div key={label} className="glass-panel" style={{ minHeight: '120px', justifyContent: 'center' }}>
                      <h2>{label}</h2>
                      <div className="big-number">{['24', '18', '09', '06'][index]}</div>
                      <div className="sub-stat">Dato demostrativo</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* --- 3. ZONA DERECHA: DATOS + GRÁFICAS --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {seedKpis.map((kpi, i) => (
               <div key={i} className="glass-panel" style={{ justifyContent: 'center', minHeight: '120px' }}>
                  <div className="tech-border orange"></div>
                  <h2 style={{ fontSize: '0.7rem' }}>{kpi.label}</h2>
                  <div className="big-number" style={{ fontSize: '2.5rem' }}>{kpi.value}</div>
                  <div className="sub-stat">{kpi.sub}</div>
                  {/* Gráfica simulada condicional */}
                  {kpi.chart && <MiniChart />}
                  {!kpi.chart && <div className="fake-waveform"></div>}
               </div>
            ))}
            
            {/* Tarjeta extra de "Status del Sistema" */}
            <div className="glass-panel" style={{ flex: 1, background: 'rgba(0,240,255,0.05)', justifyContent: 'center', alignItems: 'center' }}>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: '20px', height: '20px', background: '#00f0ff', borderRadius: '50%', boxShadow: '0 0 15px #00f0ff' }}></div>
               </div>
               <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#00f0ff' }}>SISTEMA ESTABLE</div>
            </div>
        </div>

        {/* --- 4. BARRA INFERIOR (IA) --- */}
        <div className="glass-panel" style={{ gridColumn: '1 / -1', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
            <div className="tech-border"></div>
            <div style={{ color: '#00f0ff', fontWeight: 'bold' }}>IA ASSISTANT:</div>
            <p style={{ margin: 0, fontSize: '14px', color: '#aaa', fontFamily: 'monospace' }}>
               Esperando comando de voz o selección manual...
            </p>
        </div>

      </div>
    </Html>
  );
}
