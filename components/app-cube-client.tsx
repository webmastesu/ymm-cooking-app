"use client"

import dynamic from "next/dynamic"

const AppCube = dynamic(() => import("@/components/app-cube"), { ssr: false })

export default function AppCubeClient() {
  return <AppCube />
}
