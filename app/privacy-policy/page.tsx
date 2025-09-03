import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
              <Link href="/terms" className="text-foreground hover:text-primary transition-colors">
                Terms of Service
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

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            {/* Privacy Policy */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">YMM COOKING Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-card-foreground">
                <div>
                  <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>
                      <strong>Device Information:</strong> Device type, operating system, unique device identifiers
                    </li>
                    <li>
                      <strong>Usage Data:</strong> App features used, time spent in app, crash reports
                    </li>
                    <li>
                      <strong>Preferences:</strong> Favorite recipes, cooking preferences, app settings
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">2. How We Use Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>To provide and improve our services</li>
                    <li>To personalize your experience</li>
                    <li>To analyze app usage and performance</li>
                    <li>To display relevant advertisements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">3. Advertising</h3>
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Important Notice:</strong> This app contains advertisements. We use third-party
                      advertising services that may collect and use information about your device and app usage to show
                      you relevant ads. These advertising partners may use cookies, web beacons, and similar
                      technologies to collect information.
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Our advertising partners may include Google AdMob and other ad networks. You can opt out of
                    personalized advertising by adjusting your device's advertising settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">4. Data Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your information. However, no method of
                    transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">5. Children's Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our App is not intended for children under 13. We do not knowingly collect personal information from
                    children under 13.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">6. Third-Party Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our App may contain links to third-party services. We are not responsible for the privacy practices
                    of these third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">7. Changes to Privacy Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify users of any material changes
                    through the App or other means.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">8. Data Retention</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your information only as long as necessary to provide our services and comply with legal
                    obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">9. Your Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, update, or delete your personal information. Contact us to exercise
                    these rights.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Google Play Store Compliance */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Google Play Store Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-card-foreground">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    This application complies with Google Play Store policies and guidelines:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Contains advertisements as disclosed in this policy</li>
                    <li>Does not collect sensitive personal information without consent</li>
                    <li>Provides clear information about data collection and usage</li>
                    <li>Includes appropriate content ratings and age restrictions</li>
                    <li>Follows Google's advertising policies and guidelines</li>
                  </ul>
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
                    If you have any questions about this Privacy Policy, please contact us:
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
              <Link href="/terms">
                <Button variant="outline" size="lg">
                  View Terms of Service
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
