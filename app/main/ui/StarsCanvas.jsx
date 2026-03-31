"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

export const StarBackground = (props) => {
  const ref = useRef(null);

  // Exactly same as React version but without maath
  const sphere = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      // Same distribution as random.inSphere
      const r = 1.2 * Math.cbrt(Math.random()); // for uniform distribution in sphere
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* 👈 Important for look */}
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled={true} // 👈 Same as React version
        {...props}
      >
        <PointMaterial
          transparent={true} // 👈 Important
          color="#ffffff"
          size={0.002} // 👈 Same small size
          sizeAttenuation={true} // 👈 Important for depth effect
          depthWrite={false} // 👈 Important for blending
          blending={THREE.AdditiveBlending} // 👈 Adds glow effect
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-full absolute top-0 inset-0" style={{ background: 'transparent' }}>
   {/* <div className="w-full h-full absolute inset-0 " style={{ background: 'transparent' }}> */}
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);