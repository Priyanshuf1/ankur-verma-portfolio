import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function GlowingRubyField(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(2400), { radius: 3.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
      // Mouse interactive tilt
      ref.current.rotation.x += (state.pointer.y * 0.2 - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (state.pointer.x * 0.2 - ref.current.rotation.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ff2222"
          size={0.018}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.75}
        />
      </Points>
    </group>
  );
}

function AmberEmberField(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(1200), { radius: 2.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 30;
      ref.current.rotation.y += delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, -Math.PI / 3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffb300"
          size={0.014}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function Floating3DGeometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1.5]} scale={1.8}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        wireframe
        color="#cc0000"
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

export default function BackgroundVFX() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070103]">
      {/* Dynamic Crimson & Gold Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#cc0000]/20 via-red-600/15 to-[#800000]/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[750px] h-[450px] bg-[#990000]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-3/4 right-1/4 w-[600px] h-[400px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* R3F WebGL 3D Atmosphere Scene */}
      <Canvas camera={{ position: [0, 0, 1.5] }} gl={{ powerPreference: 'high-performance' }}>
        <Floating3DGeometry />
        <GlowingRubyField />
        <AmberEmberField />
      </Canvas>
    </div>
  );
}
