import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"
import { ServiceNavigation } from "@/components/service-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function RealtorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="realtor" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <RevealOnScroll>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Realtor & Property Management Services
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  FreshBay Cleaning Co. provides specialized cleaning services for realtors, landlords, and property
                  managers in Towson, Maryland. We help you maintain, prepare, and showcase your properties at their
                  best.
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
                    <Link href="/realtors/quote">
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
              Our Realtor & Property Management Services
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Pre-Listing Cleaning */}
            <RevealOnScroll>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Pre-Listing Cleaning"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-secondary mt-4">Pre-Listing Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Maximize your property's appeal</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Deep cleaning of all interior spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Detailed attention to key selling areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Professional preparation for photography</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/realtor/pre-listing-cleaning">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Open House Cleaning */}
            <RevealOnScroll delay={100}>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Open House Cleaning"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-secondary mt-4">Open House Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Perfect presentation for showings</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Thorough cleaning and staging preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Focus on high-impact areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Same-day service available</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/realtor/open-house-cleaning">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Emergency Cleaning */}
            <RevealOnScroll delay={200}>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Emergency Cleaning"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-secondary mt-4">Emergency Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Fast response for urgent needs</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>24/7 availability for urgent situations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Rapid response team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Comprehensive cleaning solutions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/realtor/emergency-cleaning-services">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Turnkey Service */}
            <RevealOnScroll delay={300}>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Turnkey Service"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-secondary mt-4">Turnkey Service</CardTitle>
                  <CardDescription className="text-white/70">Complete property preparation</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Deep cleaning of all rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Kitchen and bathroom sanitization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Carpet cleaning and floor maintenance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/realtor/turnkey-service">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Staging Cleaning */}
            <RevealOnScroll delay={400}>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Staging Cleaning"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-secondary mt-4">Staging Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Perfect presentation for buyers</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Detailed cleaning for presentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Special attention to lighting fixtures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Window cleaning for natural light</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/realtor/staging-cleaning">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Post-Construction */}
            <RevealOnScroll delay={500}>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Post-Construction Cleaning"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-secondary mt-4">Post-Construction</CardTitle>
                  <CardDescription className="text-white/70">Final cleanup after renovations</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Removal of construction debris</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Cleaning of all surfaces and fixtures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Window and glass cleaning</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/realtor/post-construction">
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
              Why Realtors & Property Managers Choose FreshBay
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
                  <h3 className="text-xl font-bold text-white mb-4">Fast Turnaround</h3>
                  <p className="text-white/90">
                    We understand that time is money in real estate. Our efficient teams work quickly to prepare your
                    properties.
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
                  <h3 className="text-xl font-bold text-white mb-4">Attention to Detail</h3>
                  <p className="text-white/90">
                    We focus on the details that matter to potential buyers and renters, helping your properties stand
                    out.
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
                  <h3 className="text-xl font-bold text-white mb-4">Reliable Service</h3>
                  <p className="text-white/90">
                    Count on us to be there when scheduled, allowing you to plan showings and tenant move-ins with
                    confidence.
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
        secondaryButtonLink="/quote/realtor"
      />
    </div>
  )
}

