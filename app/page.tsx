"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Clock, Heart, Star, Users, Utensils } from "lucide-react"
import Link from "next/link"
import AppCubeClient from "@/components/app-cube-client"
import VerificationModal from "@/components/verification-modal"

export default function HomePage() {
  const [showVerification, setShowVerification] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [isContentReady, setIsContentReady] = useState(false)

  const handleVerificationSuccess = () => {
    setIsVerified(true)
    setShowVerification(false)
    setTimeout(() => {
      setIsContentReady(true)
    }, 500)
  }

  const handleDownloadClick = () => {
    const encodedUrl = "aHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS55bW1jb29raW5nLmFwcA=="
    const decodedUrl = atob(encodedUrl)
    window.open(decodedUrl, "_blank")
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <VerificationModal
          isOpen={showVerification}
          onClose={() => setShowVerification(false)}
          onSuccess={handleVerificationSuccess}
        />
        {!showVerification && (
          <div className="text-center">
            <ChefHat className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">YMM COOKING</h1>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        )}
      </div>
    )
  }

  if (!isContentReady) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ChefHat className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
          <h1 className="text-2xl font-bold text-foreground mb-2">YMM COOKING</h1>
          <p className="text-muted-foreground">Preparing your cooking experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">YMM COOKING</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/terms" className="text-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-primary/8 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Discover Delicious Recipes at Your Fingertips
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              YMM COOKING brings you authentic Myanmar recipes and international cuisines. Cook with confidence using
              our step-by-step guides and video tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                onClick={handleDownloadClick}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download on Play Store
              </Button>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm">4.8 (2.5k+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose YMM COOKING?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to become a better cook, all in one beautiful app
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Easy-to-Follow Recipes</h3>
                <p className="text-muted-foreground">
                  Step-by-step instructions with photos and videos to guide you through every recipe
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Quick & Healthy Meals</h3>
                <p className="text-muted-foreground">
                  Find recipes that fit your schedule, from 15-minute meals to elaborate weekend projects
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Save Your Favorites</h3>
                <p className="text-muted-foreground">
                  Create your personal cookbook by saving recipes you love and want to cook again
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-secondary/3"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Cooking Made Simple</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a beginner or an experienced cook, YMM COOKING provides the tools and guidance you need
                to create amazing meals every time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Join 100k+ home cooks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">1000+ tested recipes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Highly rated by users</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">{isContentReady && <AppCubeClient />}</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Start Cooking Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download YMM COOKING now and discover thousands of delicious recipes from Myanmar and around the world.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={handleDownloadClick}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-6 w-6" />
                <span className="text-lg font-bold">YMM COOKING</span>
              </div>
              <p className="text-background/80">
                Bringing authentic Myanmar recipes and international cuisines to your kitchen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/terms" className="block text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link href="/contact" className="block text-background/80 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Developer</h3>
              <p className="text-background/80">Letyarblue</p>
              <p className="text-background/80">ttaw42285@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">© 2024 YMM COOKING by Letyarblue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
