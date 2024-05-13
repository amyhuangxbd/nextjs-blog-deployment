"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function RotatingBox() {
  // This ref will hold the mesh to rotate
  const meshRef = useRef<Mesh>(null);

  // useFrame will run every frame (typically 60 times per second)
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the mesh around the x and y axes
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
}

export default App;
