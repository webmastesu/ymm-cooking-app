import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">YMM COOKING</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            {/* Terms of Service */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">YMM COOKING Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-card-foreground">
                <div>
                  <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By downloading, installing, or using the YMM COOKING mobile application ("App"), you agree to be
                    bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the
                    App.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">2. Description of Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    YMM COOKING is a mobile application that provides cooking recipes, tutorials, and culinary content.
                    The App includes features such as recipe browsing, favorites, and cooking guides.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">3. User Responsibilities</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You must be at least 13 years old to use this App</li>
                    <li>You are responsible for maintaining the security of your device</li>
                    <li>You agree not to misuse the App or help anyone else do so</li>
                    <li>You will not attempt to reverse engineer or modify the App</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">4. Intellectual Property</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, features, and functionality of the App are owned by Letyarblue and are protected by
                    international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">5. Limitation of Liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The App is provided "as is" without warranties of any kind. Letyarblue shall not be liable for any
                    damages arising from the use of this App.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">6. Modifications to Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                    posting in the App.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">7. Termination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend your access to the App at any time, without prior notice, for conduct
                    that we believe violates these Terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-card-foreground">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p>
                      <strong>Developer:</strong> Letyarblue
                    </p>
                    <p>
                      <strong>Email:</strong> ttaw42285@gmail.com
                    </p>
                    <p>
                      <strong>App:</strong> YMM COOKING
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We will respond to your inquiries within 48 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Links */}
          <div className="text-center mt-12 space-y-4">
            <div className="flex justify-center space-x-4">
              <Link href="/privacy-policy">
                <Button variant="outline" size="lg">
                  View Privacy Policy
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Back to YMM COOKING
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
