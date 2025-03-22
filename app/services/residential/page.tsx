import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"
import { ServiceNavigation } from "@/components/service-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function ResidentialPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="residential" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <RevealOnScroll>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Residential Cleaning Services
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  FreshBay Cleaning Co. provides top-quality residential cleaning services in Towson, Maryland. From
                  deep cleaning to recurring services, we keep your home spotless and comfortable.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="rounded-full text-base group transition-all duration-300 hover:scale-105"
                    variant="secondary"
                  >
                    <Link href="/quote/residential">
                      <span className="flex items-center gap-2">
                        Get a Free Quote
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="rounded-full bg-white/10 text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/book">Book Now</Link>
                  </Button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* Services Grid Section */}
      <section className="bg-background py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>
        <AnimatedShape
          shape="circle"
          size="large"
          color="#F7FF00"
          opacity={0.05}
          blur="large"
          className="absolute -top-20 -left-20"
        />
        <AnimatedShape
          shape="blob"
          size="medium"
          color="#77B5FE"
          opacity={0.05}
          blur="medium"
          className="absolute bottom-0 right-10"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-secondary text-center sm:text-4xl mb-12">
              Our Residential Services
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Standard Cleaning */}
            <RevealOnScroll>
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  {/* Removed Image */}
                  <CardTitle className="text-secondary mt-4">Standard Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Regular maintenance for a consistently clean home</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Comprehensive cleaning of living areas, kitchens, and bathrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Regular dusting, vacuuming, and surface cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Perfect for maintaining a clean, healthy home environment</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/residential/standard-cleaning">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Deep Cleaning */}
            <RevealOnScroll delay={100}>
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  {/* Removed Image */}
                  <CardTitle className="text-secondary mt-4">Deep Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Thorough cleaning for a fresh start</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Scrubbing baseboards and detailed appliance cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Grout cleaning, ceiling fans, and light fixtures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Eco-friendly cleaning products upon request</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/residential/deep-cleaning">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Recurring Cleaning */}
            <RevealOnScroll delay={200}>
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  {/* Removed Image */}
                  <CardTitle className="text-secondary mt-4">Recurring Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Scheduled cleaning for ongoing maintenance</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Weekly, bi-weekly, or monthly cleaning schedules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Customizable cleaning plans for your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Consistent cleaning team for your home</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/residential/recurring-cleaning">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Move-in/Move-out Cleaning */}
            <RevealOnScroll delay={300}>
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  {/* Removed Image */}
                  <CardTitle className="text-secondary mt-4">Move-in/Move-out Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Fresh start for your new space</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Deep cleaning of all rooms and cabinet interiors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Guaranteed compliance with lease requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Perfect for securing your deposit</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/residential/move-in-out">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Special Event Cleaning */}
            <RevealOnScroll delay={400}>
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  {/* Removed Image */}
                  <CardTitle className="text-secondary mt-4">Special Event Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Complete event cleaning solutions</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Pre-event cleaning and setup preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>During-event maintenance and cleanup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Post-event thorough cleaning</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/residential/special-event-cleaning">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>
        <AnimatedShape
          shape="square"
          size="medium"
          color="#F7FF00"
          opacity={0.05}
          blur="medium"
          className="absolute top-40 right-20"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-secondary text-center sm:text-4xl mb-12">
              Why Choose FreshBay for Your Home
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <RevealOnScroll delay={100}>
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Trusted Professionals</h3>
                  <p className="text-white/90">
                    Our cleaners are background-checked, insured, and trained to provide exceptional service in your
                    home.
                  </p>
                </div>
              </CardHoverEffect>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Family-Safe Products</h3>
                  <p className="text-white/90">
                    We use eco-friendly cleaning products that are safe for your family, pets, and the environment.
                  </p>
                </div>
              </CardHoverEffect>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Customized Cleaning</h3>
                  <p className="text-white/90">
                    We tailor our cleaning services to your specific needs and preferences for your complete
                    satisfaction.
                  </p>
                </div>
              </CardHoverEffect>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EnhancedCTASection
        title="READY TO GET STARTED?"
        description="Book your cleaning service today or get an instant quote to see how affordable professional cleaning can be."
        primaryButtonText="BOOK NOW"
        primaryButtonLink="/book"
        secondaryButtonText="GET A QUOTE"
        secondaryButtonLink="/quote/residential"
      />
    </div>
  )
}

