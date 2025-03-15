"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { ServiceNavigation } from "@/components/service-navigation"

export default function OpenHouseCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="realtor" service="open-house-cleaning" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <RevealOnScroll>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Open House Cleaning Services
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  Make every open house a success with our professional cleaning services. We ensure your property
                  looks its absolute best when potential buyers walk through the door.
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
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">
              What's Included in Our Open House Cleaning
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RevealOnScroll delay={100}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Presentation Ready</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Thorough dusting and polishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Window and glass cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Floor cleaning and polishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Decluttering assistance</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Focus Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Entryway and foyer detailing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Kitchen and bath showcase prep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Living areas staging support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">High-traffic area attention</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Extra Touches</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Fresh scent application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Natural light optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Final walkthrough inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Same-day service available</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Unique Offering */}
      <section className="py-16 glass-effect relative overflow-hidden">
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
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Unique Offering</h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            <RevealOnScroll delay={100}>
              <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Flexible Scheduling</h3>
                <p className="text-white/90">
                  Available early morning or evening to ensure the property is perfect for showing times.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Staging Support</h3>
                <p className="text-white/90">
                  We work with your staging team to ensure every detail is perfect for potential buyers.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Guaranteed Results</h3>
                <p className="text-white/90">
                  Your satisfaction is guaranteed - we ensure the property is showing-ready before we leave.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold text-primary mb-6">Open House Coming Up?</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
                Schedule your open house cleaning today and make a lasting impression on potential buyers.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/book">Book Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/quote/realtor">Get a Quote</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
} 