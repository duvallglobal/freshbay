"use client"

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

export default function CommercialServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="commercial" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <RevealOnScroll>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Commercial Cleaning Services
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  FreshBay Cleaning Co. provides professional commercial cleaning services in Towson, Maryland. From
                  office spaces to art studios, we keep your business spotless and professional.
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
                    <Link href="/quote/commercial">
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
              Our Commercial Services
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Office Space */}
            <RevealOnScroll>
            <Card className="bg-white/5 border-white/10 rounded-lg flex flex-col h-full">
                <CardHeader className="pt-6">
                  <CardTitle className="text-secondary mt-4">Office Space</CardTitle>
                  <CardDescription className="text-white/70">Professional workspace cleaning solutions</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Daily, weekly, or custom cleaning schedules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Thorough cleaning of workstations and common areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Special attention to high-touch surfaces</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/commercial/office-space">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>

            {/* Art Studios */}
<RevealOnScroll delay={100}>
  <Card className="bg-white/5 border-white/10 rounded-lg flex flex-col h-full">
    <CardHeader className="pt-6">
      <CardTitle className="text-secondary mt-4">Art Studios</CardTitle>
      <CardDescription className="text-white/70">Specialized creative space cleaning</CardDescription>
    </CardHeader>
    <CardContent className="text-white/90">
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Safe cleaning around artwork and supplies</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Dust and debris removal without disruption</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Flexible scheduling around studio hours</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button asChild variant="secondary" className="w-full group">
        <Link href="/services/commercial/art-studios">
          <span className="flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </Button>
    </CardFooter>
  </Card>
</RevealOnScroll>

{/* Massage Parlors */}
<RevealOnScroll delay={200}>
  <Card className="bg-white/5 border-white/10 rounded-lg flex flex-col h-full">
    <CardHeader className="pt-6">
      <CardTitle className="text-secondary mt-4">Massage Parlors</CardTitle>
      <CardDescription className="text-white/70">Hygienic wellness space maintenance</CardDescription>
    </CardHeader>
    <CardContent className="text-white/90">
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Thorough sanitization of treatment rooms</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Special attention to linens and surfaces</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Eco-friendly, hypoallergenic products</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button asChild variant="secondary" className="w-full group">
        <Link href="/services/commercial/massage-parlors">
          <span className="flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </Button>
    </CardFooter>
  </Card>
</RevealOnScroll>

{/* Janitorial Services */}
<RevealOnScroll delay={300}>
  <Card className="bg-white/5 border-white/10 rounded-lg flex flex-col h-full">
    <CardHeader className="pt-6">
      <CardTitle className="text-secondary mt-4">Janitorial Services</CardTitle>
      <CardDescription className="text-white/70">Comprehensive facility maintenance</CardDescription>
    </CardHeader>
    <CardContent className="text-white/90">
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Regular facility maintenance</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Floor care and window cleaning</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>Waste management and recycling</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button asChild variant="secondary" className="w-full group">
        <Link href="/services/commercial/janitorial-services">
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
              Why Choose FreshBay for Your Business
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <RevealOnScroll delay={100}>
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Reliability</h3>
                  <p className="text-white/90">
                    Consistent, dependable service you can count on for your business needs.
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
                  <h3 className="text-xl font-bold text-white mb-4">Trained Staff</h3>
                  <p className="text-white/90">
                    Our professional cleaners are trained, insured, and background-checked.
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
                  <h3 className="text-xl font-bold text-white mb-4">Flexible Scheduling</h3>
                  <p className="text-white/90">
                    We work around your business hours to minimize disruption.
                  </p>
                </div>
              </CardHoverEffect>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Customized Plans</h3>
                  <p className="text-white/90">
                    Cleaning solutions tailored to your specific business needs and budget.
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
        secondaryButtonLink="/quote/commercial"
      />
    </div>
  )
}

