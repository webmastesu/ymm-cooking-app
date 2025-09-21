"use client"

import { useState, useEffect } from "react"

interface AppCubeSafeProps {
  className?: string
}

export default function AppCubeSafe({ className = "" }: AppCubeSafeProps) {
  const [isWebGLSupported, setIsWebGLSupported] = useState<boolean | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setIsWebGLSupported(!!gl)
    } catch (error) {
      setIsWebGLSupported(false)
    }
  }, [])

  // Show loading state
  if (isWebGLSupported === null) {
    return (
      <div className={`w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-lime-50 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 3D Preview...</p>
        </div>
      </div>
    )
  }

  // If WebGL is not supported or there's an error, show fallback
  if (!isWebGLSupported || hasError) {
    return (
      <div className={`w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-100 to-lime-100 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-orange-600 text-2xl">📱</span>
          </div>
          <p className="text-orange-700 font-medium">App Preview</p>
          <p className="text-sm text-orange-600 mt-1">Interactive preview available in app</p>
        </div>
      </div>
    )
  }

  // If WebGL is supported, try to load the 3D component
  try {
    // Dynamically import the 3D component only if WebGL is supported
    const AppCube3D = React.lazy(() => import('./app-cube-3d'))
    
    return (
      <div className={className}>
        <React.Suspense fallback={
          <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-lime-50 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading 3D Preview...</p>
            </div>
          </div>
        }>
          <AppCube3D />
        </React.Suspense>
      </div>
    )
  } catch (error) {
    console.warn("Failed to load 3D component:", error)
    setHasError(true)
    
    return (
      <div className={`w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-100 to-lime-100 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-orange-600 text-2xl">📱</span>
          </div>
          <p className="text-orange-700 font-medium">App Preview</p>
          <p className="text-sm text-orange-600 mt-1">Interactive preview available in app</p>
        </div>
      </div>
    )
  }
}

// Import React at the top
import React from "react"
