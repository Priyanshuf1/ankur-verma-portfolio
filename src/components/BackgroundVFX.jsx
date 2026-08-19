import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function OriginalPDFRubyDust(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(1600), { radius: 3.0 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 35;
      ref.current.rotation.y -= delta / 45;
      ref.current.rotation.x += (state.pointer.y * 0.1 - ref.current.rotation.x) * 0.04;
      ref.current.rotation.y += (state.pointer.x * 0.1 - ref.current.rotation.y) * 0.04;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ff3333"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

export default function BackgroundVFX() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#260307] via-[#1a0104] to-[#0d0002]">
      {/* Original PDF Signature Crimson Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#b30000]/30 via-[#990000]/25 to-[#660000]/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-[#800000]/35 via-[#660000]/20 to-transparent rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-3/4 right-1/4 w-[650px] h-[400px] bg-[#a30000]/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Vignette Contrast Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0d0002]/30 to-[#0d0002]/85 pointer-events-none" />

      {/* R3F Ruby Atmosphere */}
      <Canvas camera={{ position: [0, 0, 1.5] }} gl={{ powerPreference: 'high-performance' }}>
        <OriginalPDFRubyDust />
      </Canvas>
    </div>
  );
}
