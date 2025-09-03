import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ChefHat, ArrowLeft, Mail, MessageSquare, User, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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

      {/* Contact Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Get in touch with any questions, feedback, or suggestions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Name
                    </Label>
                    <Input id="name" placeholder="Your full name" className="bg-input border-border focus:ring-ring" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input border-border focus:ring-ring"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-card-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-input border-border focus:ring-ring"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or feedback..."
                      rows={5}
                      className="bg-input border-border focus:ring-ring resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>

                <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                  <p className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>We typically respond within 24-48 hours</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground flex items-center space-x-2">
                    <User className="h-6 w-6 text-primary" />
                    <span>Developer Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">Letyarblue</p>
                        <p className="text-sm text-muted-foreground">App Developer</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">ttaw42285@gmail.com</p>
                        <p className="text-sm text-muted-foreground">Direct Email</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">About YMM COOKING</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    YMM COOKING is a passion project dedicated to bringing authentic Myanmar recipes and international
                    cuisines to home cooks everywhere. We believe cooking should be accessible, enjoyable, and
                    rewarding.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">1000+ tested recipes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Step-by-step instructions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Video tutorials</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Is the app free to use?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, YMM COOKING is free to download and use. The app is supported by advertisements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Can I suggest new recipes?</h4>
                    <p className="text-sm text-muted-foreground">
                      We love hearing recipe suggestions from our users. Send us your ideas through the contact form.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">How often is the app updated?</h4>
                    <p className="text-sm text-muted-foreground">
                      We regularly update the app with new recipes, features, and improvements based on user feedback.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to App Button */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Back to YMM COOKING
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
