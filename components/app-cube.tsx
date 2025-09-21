"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, Suspense } from "react"
import type { Mesh } from "three"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

function RotatingCube() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Create a fallback material array
  const fallbackMaterials = Array.from({ length: 6 }, (_, i) => (
    <meshStandardMaterial key={i} color={i % 2 === 0 ? "#ff6b35" : "#f7931e"} />
  ))

  let textures
  try {
    textures = useTexture([
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-21.jpg-t9Bu3A1nh4EDotNvPW2f9vuPpeVxXZ.jpeg", // app-home
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-40.jpg-U89wYbsX0ErGl7aGJUa2rLS75s727X.jpeg", // app-categories
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-44.jpg-x03cfcLfgbXasrBindTv3paZ75HLNt.jpeg", // app-recipe
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-48.jpg-9IODW5kA5kOynmgkq3kTFGZmD1KJIw.jpeg", // app-explore
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-21.jpg-t9Bu3A1nh4EDotNvPW2f9vuPpeVxXZ.jpeg", // Top face
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-03_16-47-40.jpg-U89wYbsX0ErGl7aGJUa2rLS75s727X.jpeg", // Bottom face
    ])
  } catch (error) {
    console.warn("Failed to load textures, using fallback materials:", error)
    setHasError(true)
  }

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
      rotation={[0.2, 0, 0]}
    >
      <boxGeometry args={[3, 4.5, 3]} />
      {hasError || !textures ? (
        fallbackMaterials
      ) : (
        textures.map((texture, index) => (
          <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
        ))
      )}
    </mesh>
  )
}

function CubeFallback() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="animate-pulse bg-gradient-to-br from-orange-100 to-lime-100 rounded-lg w-64 h-64 flex items-center justify-center">
        <span className="text-gray-500">Loading 3D...</span>
      </div>
    </div>
  )
}

export default function AppCube() {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          try {
            gl.setClearColor(0x000000, 0)
            // Ensure WebGL context is properly initialized
            if (!gl.getContext()) {
              console.warn("WebGL context not available")
            }
          } catch (error) {
            console.warn("Error initializing WebGL:", error)
          }
        }}
        onError={(error) => {
          console.error("Canvas error:", error)
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<CubeFallback />}>
          <RotatingCube />
        </Suspense>
      </Canvas>
    </div>
  )
}
