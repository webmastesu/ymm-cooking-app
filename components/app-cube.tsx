"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import type { Mesh } from "three"
import { useTexture } from "@react-three/drei"

function RotatingCube() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const textures = useTexture([
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-21.jpg-t9Bu3A1nh4EDotNvPW2f9vuPpeVxXZ.jpeg", // app-home
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-40.jpg-U89wYbsX0ErGl7aGJUa2rLS75s727X.jpeg", // app-categories
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-44.jpg-x03cfcLfgbXasrBindTv3paZ75HLNt.jpeg", // app-recipe
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-48.jpg-9IODW5kA5kOynmgkq3kTFGZmD1KJIw.jpeg", // app-explore
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-21.jpg-t9Bu3A1nh4EDotNvPW2f9vuPpeVxXZ.jpeg", // Top face
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-40.jpg-U89wYbsX0ErGl7aGJUa2rLS75s727X.jpeg", // Bottom face
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
