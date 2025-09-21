"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import analytics components with error handling
const Analytics = dynamic(() => import("@vercel/analytics/next").then(mod => ({ default: mod.Analytics })), {
  ssr: false,
})

const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then(mod => ({ default: mod.SpeedInsights })), {
  ssr: false,
})

function SafeAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load analytics if we're in production
    if (process.env.NODE_ENV === 'production') {
      setShouldLoad(true)
    }
  }, [])

  if (!shouldLoad) {
    return null
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default SafeAnalytics
