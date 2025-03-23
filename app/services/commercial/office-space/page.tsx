"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { ServiceNavigation } from "@/components/service-navigation"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function OfficeSpacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="commercial" service="office-space" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <RevealOnScroll>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Office Cleaning Services
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  Professional cleaning to maintain a productive and hygienic workspace.
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
                <h2 className="text-3xl font-bold text-secondary mb-6">Office Cleaning Services</h2>
                <p className="text-white/90 mb-6">
                  A clean office environment is essential for productivity, employee health, and creating a positive
                  impression on clients. Our professional office cleaning services are designed to keep your workspace
                  spotless and hygienic.
                </p>
                <p className="text-white/90 mb-6">Our office cleaning services include:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Dusting workstations, sanitizing communal areas, trash removal, and restroom cleaning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Flexible schedules (after-hours or weekends) to minimize disruption to business operations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Professional-grade cleaning products and equipment</span>
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

      {/* Ideal For Section */}
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
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Ideal For</h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            <RevealOnScroll delay={100}>
              <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Small Offices</h3>
                <p className="text-white/90">
                  Perfect for small to medium-sized offices looking for a reliable cleaning partner.
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
                <h3 className="text-xl font-bold text-white mb-4">Professional Services</h3>
                <p className="text-white/90">
                  Law firms, medical offices, and other professional services that need to maintain a pristine image.
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
                <h3 className="text-xl font-bold text-white mb-4">Coworking Spaces</h3>
                <p className="text-white/90">
                  Shared workspaces that need regular cleaning to maintain a professional environment for all members.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
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
              What's Included in Our Office Cleaning
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RevealOnScroll delay={100}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Reception & Common Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Dusting and cleaning all surfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Vacuuming carpets and rugs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Mopping hard floors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Cleaning glass doors and partitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Sanitizing high-touch surfaces</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Workstations & Offices</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Dusting desks and office equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Sanitizing phones and keyboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Emptying trash bins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Spot cleaning walls and partitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Cleaning chair upholstery</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Restrooms & Kitchen Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Sanitizing toilets, sinks, and counters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Restocking paper products and soap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Cleaning break room tables and counters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Cleaning microwaves and refrigerators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Disinfecting high-touch surfaces</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Unique Offering Section */}
      <section className="py-16 glass-effect relative overflow-hidden">
        <AnimatedShape
          shape="circle"
          size="medium"
          color="#77B5FE"
          opacity={0.05}
          blur="medium"
          className="absolute top-20 left-20"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <RevealOnScroll>
              <div className="relative h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle className="h-24 w-24 text-secondary" />
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Unique Offering</h2>
                <p className="text-white/90 mb-6">
                  At FreshBay Cleaning Co., we understand that a clean office is essential for your business, but
                  cleaning shouldn't disrupt your operations. That's why we offer:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Flexible schedules (after-hours or weekends) to minimize disruption to business operations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Customized cleaning plans based on your office's specific needs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Consistent cleaning teams who understand your requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Green cleaning options available upon request</span>
                  </li>
                </ul>
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

