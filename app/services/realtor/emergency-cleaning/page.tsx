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

export default function EmergencyCleaningPage() {
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
                  Emergency Cleaning Services
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  24/7 rapid response cleaning services for real estate emergencies. When unexpected situations arise, we're here to help restore your property quickly and professionally.
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
                    <Link href="/quote/realtor">
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

      {/* What's Included Section */}
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
            {/* Rapid Response */}
            <RevealOnScroll>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Rapid Response</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">24/7 availability for emergencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Quick response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Same-day service available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Immediate damage assessment</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Emergency Services */}
            <RevealOnScroll delay={100}>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Emergency Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Water damage cleanup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Biohazard cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Odor removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Deep sanitization</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Additional Support */}
            <RevealOnScroll delay={200}>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Additional Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Documentation for insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Professional assessment reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Coordination with property managers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-white/90">Follow-up inspections</span>
                  </li>
                </ul>
              </div>
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
                <h3 className="text-xl font-bold text-white mb-4">24/7 Availability</h3>
                <p className="text-white/90">
                  Round-the-clock emergency response team ready to handle any cleaning crisis.
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
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-white/90">
                  Certified professionals equipped to handle any emergency cleaning situation.
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
                <h3 className="text-xl font-bold text-white mb-4">Guaranteed Results</h3>
                <p className="text-white/90">
                  We stand behind our emergency cleaning services with a 100% satisfaction guarantee.
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
        secondaryButtonLink="/quote/realtor"
      />
    </div>
  )
} 