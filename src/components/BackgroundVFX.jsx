import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ClassyVelvetDust(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(1500), { radius: 3.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 45;
      ref.current.rotation.y -= delta / 60;
      // Ultra-subtle classy cursor response
      ref.current.rotation.x += (state.pointer.y * 0.08 - ref.current.rotation.x) * 0.03;
      ref.current.rotation.y += (state.pointer.x * 0.08 - ref.current.rotation.y) * 0.03;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#e6b800"
          size={0.010}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.35}
        />
      </Points>
    </group>
  );
}

function ClassyRubyDust(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 2.8 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 50;
      ref.current.rotation.y += delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, -Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#cc1100"
          size={0.009}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.28}
        />
      </Points>
    </group>
  );
}

export default function BackgroundVFX() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070709]">
      {/* Classy Luxury Radial Lighting Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#590000]/15 via-[#800000]/10 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[800px] h-[500px] bg-gradient-to-tr from-[#330000]/20 via-[#4d0000]/10 to-transparent rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[600px] h-[400px] bg-[#997a00]/05 rounded-full blur-[180px] pointer-events-none" />

      {/* Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/50 to-[#070709]/95 pointer-events-none" />

      {/* R3F Classy Micro-Dust Atmosphere */}
      <Canvas camera={{ position: [0, 0, 1.5] }} gl={{ powerPreference: 'high-performance' }}>
        <ClassyVelvetDust />
        <ClassyRubyDust />
      </Canvas>
    </div>
  );
}
