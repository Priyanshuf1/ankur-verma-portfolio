import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

// Custom GLSL Red Liquid Plasma Shader Plane
const RedLiquidShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#3a0004') },
    uColor2: { value: new THREE.Color('#990000') },
    uColor3: { value: new THREE.Color('#0a0506') }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float wave1 = sin(uv.x * 3.0 + uTime * 0.4) * cos(uv.y * 3.0 + uTime * 0.3);
      float wave2 = cos(uv.x * 5.0 - uTime * 0.3) * sin(uv.y * 5.0 + uTime * 0.5);
      float mixFactor = clamp(wave1 + wave2, 0.0, 1.0);
      
      vec3 finalColor = mix(uColor3, mix(uColor1, uColor2, mixFactor * 0.4), 0.6);
      gl_FragColor = vec4(finalColor, 0.35);
    }
  `
};

function PlasmaBackgroundPlane() {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  const shaderArgs = useMemo(() => RedLiquidShaderMaterial, []);

  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={materialRef}
        args={[shaderArgs]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function ParticleDust(props) {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(1500), { radius: 3 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#e60000"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1.2] }}>
        <ambientLight intensity={0.6} />
        <PlasmaBackgroundPlane />
        <ParticleDust />
        <EffectComposer disableNormalPass>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.2} darkness={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
