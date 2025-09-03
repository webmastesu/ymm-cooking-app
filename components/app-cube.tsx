"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import type { Mesh } from "three"
import { useTexture } from "@react-three/drei"

function RotatingCube() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Load textures for each face of the cube
  const textures = useTexture([
    "/images/app-home.jpg",
    "/images/app-categories.jpg",
    "/images/app-recipe.jpg",
    "/images/app-explore.jpg",
    "/images/app-home.jpg", // Top face
    "/images/app-categories.jpg", // Bottom face
  ])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (hovered ? 0.8 : 0.4)
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
      rotation={[0.2, 0, 0]} // Changed from -0.2 to 0.2 to tilt forward instead of backward
    >
      <boxGeometry args={[3, 4.5, 3]} /> {/* Increased height from 3.8 to 4.5 to make it taller */}
      {textures.map((texture, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
      ))}
    </mesh>
  )
}

export default function AppCube() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RotatingCube />
      </Canvas>
    </div>
  )
}
