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
