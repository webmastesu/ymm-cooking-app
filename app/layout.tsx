import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "YMM COOKING - Authentic Myanmar Recipes & International Cuisines",
  description:
    "Discover delicious Myanmar recipes and international cuisines with YMM COOKING. Step-by-step guides, video tutorials, and thousands of tested recipes.",
  generator: "YMM COOKING App",
  keywords: "Myanmar recipes, cooking app, food, recipes, Asian cuisine, cooking tutorials",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
