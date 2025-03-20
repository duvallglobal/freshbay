"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { ServiceNavigation } from "@/components/service-navigation"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function ArtStudiosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="commercial" service="art-studios" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <RevealOnScroll>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Art Studio Cleaning
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  Specialized cleaning services for art studios that respect your creative space. We understand the unique needs of artists and ensure your workspace remains pristine without disturbing your work.
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

      {/* Service Description */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>
        <AnimatedShape
          shape="circle"
          size="large"
          color="#F7FF00"
          opacity={0.05}
          blur="large"
          className="absolute -top-20 -left-20"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <RevealOnScroll>
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-secondary mb-6">Art Studio Cleaning Services</h2>
                <p className="text-white/90 mb-6">
                  Our specialized art studio cleaning services are designed with the unique needs of creative spaces in mind. We understand that art studios require careful attention to detail and respect for the creative process and materials.
                </p>
                <p className="text-white/90 mb-6">Our art studio cleaning services include:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Careful cleaning around artwork and delicate materials
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Dust and debris removal with specialized equipment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Flexible scheduling to work around your creative process</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle className="h-24 w-24 text-secondary" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 glass-effect relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/70"></div>
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
              What's Included
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {/* General Cleaning */}
            <RevealOnScroll>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">General Cleaning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Careful floor cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Dust-free surface maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Window and glass cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Common area sanitization</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Specialized Care */}
            <RevealOnScroll delay={100}>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Specialized Care</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Safe cleaning around artwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Art supply area organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Ventilation system maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Special material handling</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Additional Services */}
            <RevealOnScroll delay={200}>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Additional Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Gallery space preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Event cleanup services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Eco-friendly cleaning options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Custom cleaning schedules</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 glass-effect relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/70"></div>
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
              The FreshBay Difference
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <RevealOnScroll>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Art-Safe Cleaning</h3>
                <p className="text-white/90">
                  Our methods and products are carefully chosen to protect your artwork and materials.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Flexible Scheduling</h3>
                <p className="text-white/90">
                  We work around your creative schedule to minimize disruption to your artistic process.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Experienced Staff</h3>
                <p className="text-white/90">
                  Our team is trained in handling art materials and cleaning around valuable artwork.
                </p>
              </div>
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