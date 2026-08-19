import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function AmbientRubyDust(props) {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(900), { radius: 2.8 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 18;
      ref.current.rotation.y -= delta / 24;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ff1a1a"
          size={0.016}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

export default function BackgroundVFX() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-damask">
      {/* Red Radial Ambient Light Waves */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-[#990000]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* R3F Ruby Particles */}
      <Canvas camera={{ position: [0, 0, 1.2] }}>
        <AmbientRubyDust />
      </Canvas>
    </div>
  );
}
