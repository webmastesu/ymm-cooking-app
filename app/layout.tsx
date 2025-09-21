import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import ErrorBoundary from "@/components/error-boundary"
import "./globals.css"

export const metadata: Metadata = {
  title: "YMM COOKING - Authentic Myanmar Recipes & International Cuisines",
  description:
    "Discover delicious Myanmar recipes and international cuisines with YMM COOKING. Step-by-step guides, video tutorials, and thousands of tested recipes.",
  generator: "YMM COOKING App",
  keywords: "Myanmar recipes, cooking app, food, recipes, Asian cuisine, cooking tutorials",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/placeholder-logo.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorBoundary>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
