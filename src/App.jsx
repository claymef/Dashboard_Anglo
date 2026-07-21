import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { HoloDashboard } from './HoloDashboard';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'var(--app-background, #000)' }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
        
        {/* 1. Iluminación */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* 2. El Dashboard "Físico" */}
        <Suspense fallback={null}>
           <HoloDashboard />
        </Suspense>

        {/* 3. Ambiente */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* 4. Controles (Limitados para que no pierdan el foco) */}
        <OrbitControls 
           enablePan={false} 
           minPolarAngle={Math.PI / 2 - 0.2} 
           maxPolarAngle={Math.PI / 2 + 0.2}
           minAzimuthAngle={-0.2}
           maxAzimuthAngle={0.2}
        />
        
      </Canvas>
    </div>
  );
}

export default App;
