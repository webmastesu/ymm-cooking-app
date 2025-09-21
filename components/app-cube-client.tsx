"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const AppCube = dynamic(() => import("@/components/app-cube"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-lime-50 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading 3D Preview...</p>
      </div>
    </div>
  ),
  error: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-lime-50 rounded-lg">
      <div className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-orange-500 text-2xl">📱</span>
        </div>
        <p className="text-gray-600">App Preview</p>
        <p className="text-sm text-gray-500 mt-1">3D preview unavailable</p>
      </div>
    </div>
  ),
})

export default function AppCubeClient() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-lime-50 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading 3D Preview...</p>
          </div>
        </div>
      }
    >
      <AppCube />
    </Suspense>
  )
}
