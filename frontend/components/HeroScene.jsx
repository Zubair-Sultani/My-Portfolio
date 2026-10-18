'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

function OrbitalScene({ dark }) {
  const centerpiece = useRef(null);
  const innerRing = useRef(null);
  const outerRing = useRef(null);
  const accent = dark ? '#aab1ff' : '#5558e8';
  const glow = dark ? '#9878ed' : '#8064e8';
  const warm = dark ? '#80dff2' : '#33a5c7';

  useFrame(({ clock, viewport }) => {
    const time = clock.getElapsedTime();
    const travel = Math.min(2.35, viewport.width * 0.43);

    if (centerpiece.current) {
      centerpiece.current.position.x = Math.cos(time * 0.22) * travel;
      centerpiece.current.position.y = 0.12 + Math.sin(time * 0.42) * 0.16;
      centerpiece.current.rotation.x += 0.003;
      centerpiece.current.rotation.y += 0.009;
      centerpiece.current.rotation.z += 0.002;
    }
    if (innerRing.current) innerRing.current.rotation.z += 0.005;
    if (outerRing.current) outerRing.current.rotation.x += 0.003;
  });

  return (
    <>
      <ambientLight intensity={dark ? 0.75 : 1} />
      <pointLight color={accent} intensity={dark ? 22 : 14} distance={8} position={[0, 1, 3]} />
      <pointLight color={warm} intensity={dark ? 10 : 6} distance={7} position={[-3, 2, -1]} />
      <group ref={centerpiece} position={[0, 0.12, 0]}>
        <mesh>
          <icosahedronGeometry args={[0.7, 2]} />
          <meshPhysicalMaterial
            color={accent}
            emissive={glow}
            emissiveIntensity={dark ? 0.28 : 0.18}
            metalness={0.62}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.14}
            transparent
            opacity={dark ? 0.78 : 0.68}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.82, 1]} />
          <meshBasicMaterial color={warm} wireframe transparent opacity={dark ? 0.46 : 0.34} />
        </mesh>
        <mesh ref={innerRing} rotation={[1.12, 0.22, 0.38]}>
          <torusGeometry args={[1.02, 0.012, 8, 112]} />
          <meshBasicMaterial color={warm} transparent opacity={0.82} />
        </mesh>
        <mesh ref={outerRing} rotation={[0.54, 1.05, -0.22]}>
          <torusGeometry args={[1.28, 0.006, 6, 128]} />
          <meshBasicMaterial color={accent} transparent opacity={0.5} />
        </mesh>
      </group>
      <Float speed={0.8} rotationIntensity={0.16} floatIntensity={0.22}>
        <mesh position={[-1.65, 0.9, -0.35]} rotation={[0.4, 0.2, 0.5]}>
          <octahedronGeometry args={[0.15]} />
          <meshStandardMaterial color={warm} metalness={0.72} roughness={0.24} />
        </mesh>
      </Float>
      <Float speed={0.65} rotationIntensity={0.18} floatIntensity={0.18}>
        <mesh position={[1.65, -0.82, 0.15]} rotation={[0.2, 0.5, 0]}>
          <icosahedronGeometry args={[0.14, 1]} />
          <meshStandardMaterial color={accent} metalness={0.68} roughness={0.22} />
        </mesh>
      </Float>
      <Sparkles
        count={42}
        scale={[7.6, 4.3, 2.2]}
        size={2}
        speed={0.2}
        opacity={dark ? 0.72 : 0.5}
        color={accent}
      />
    </>
  );
}

export default function HeroScene({ dark, visible }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
      frameloop={visible ? 'always' : 'never'}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      fallback={<div className="hero-scene-fallback" />}
    >
      <OrbitalScene dark={dark} />
    </Canvas>
  );
}
