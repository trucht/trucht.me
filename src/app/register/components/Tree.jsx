"use client";

import React, { useRef } from "react";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";

const MODEL_URL =
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf";

const Tree = () => {
  return (
    <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
      <group position={[0, -10, 0]}>
        <Suspense fallback={null}>
          <RotatingModel position={[0, 0.25, 0]} url={MODEL_URL} />
        </Suspense>
        <ContactShadows scale={20} blur={10} far={20} />
      </group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

function RotatingModel({ position, url }) {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  const { scene } = useGLTF(url);
  return <primitive object={scene} position={position} ref={group} />;
}

export default Tree;
