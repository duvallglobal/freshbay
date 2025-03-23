import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { ServiceNavigation } from "@/components/service-navigation"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function MoveInOutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="residential" service="move-in-out" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20 z-10 z-10">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <RevealOnScroll>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Move-In/Move-Out Cleaning Services
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mt-6 text-lg text-white/90">
                  Tailored for tenants, landlords, or homeowners transitioning between spaces. Our move-in/move-out
                  cleaning service ensures you leave your old place spotless or start fresh in your new home.
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
                <h2 className="text-3xl font-bold text-secondary mb-6">What is Move-In/Move-Out Cleaning?</h2>
                <p className="text-white/90 mb-6">
                  Move-in/move-out cleaning is a comprehensive cleaning service designed specifically for transitioning
                  between homes. Whether you're moving out of a rental property and need to ensure you get your security
                  deposit back, or moving into a new home and want to start fresh, our service has you covered.
                </p>
                <p className="text-white/90 mb-6">Our move-in/move-out cleaning includes:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Deep cleaning of all rooms, cabinet interiors, appliance cleaning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Guaranteed compliance with landlord/lease requirements to help secure deposit returns
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Removal of leftover debris and thorough sanitization</span>
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
                <h3 className="text-xl font-bold text-white mb-4">Renters</h3>
                <p className="text-white/90">
                  Ensure you get your security deposit back by leaving your rental property spotless.
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
                <h3 className="text-xl font-bold text-white mb-4">New Homeowners</h3>
                <p className="text-white/90">
                  Start fresh in your new home with a thorough cleaning before you move in.
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
                <h3 className="text-xl font-bold text-white mb-4">Landlords</h3>
                <p className="text-white/90">
                  Prepare your property for new tenants and maintain its value with professional cleaning.
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
              What's Included in Our Move-In/Move-Out Cleaning
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RevealOnScroll delay={100}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Kitchen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Deep clean inside and outside of all appliances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean inside all cabinets and drawers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Scrub and sanitize countertops and backsplash</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean and sanitize sink and fixtures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean inside and outside of microwave</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Bathrooms</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Deep clean and sanitize toilets, tubs, and showers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Remove soap scum and hard water stains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean inside medicine cabinets and vanities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean and polish mirrors and glass surfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean and sanitize all fixtures</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="service-card">
                <h3 className="text-xl font-bold text-white mb-4">Throughout the Home</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean all baseboards, door frames, and window sills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Vacuum and mop all floors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean inside all closets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Dust ceiling fans and light fixtures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Clean all windows and tracks</span>
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
                  At FreshBay Cleaning Co., we understand the stress of moving. That's why our move-in/move-out cleaning
                  service includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      Guaranteed compliance with landlord/lease requirements to help secure deposit returns
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Detailed cleaning checklist provided for your peace of mind</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Before and after photos upon request</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Flexible scheduling to accommodate your moving timeline</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>
        <AnimatedShape
          shape="blob"
          size="large"
          color="#F7FF00"
          opacity={0.05}
          blur="large"
          className="absolute -bottom-20 -left-20"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Move-In/Move-Out Cleaning Pricing</h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            <RevealOnScroll delay={100}>
              <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-2">Small Home</h3>
                <p className="text-white/70 mb-4">Up to 1,000 sq ft</p>
                <div className="text-4xl font-bold text-secondary mb-6">
                  $300<span className="text-lg text-white/70">+</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">1-2 bedrooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">1 bathroom</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">Kitchen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">Living area</span>
                  </li>
                </ul>
                <Button asChild className="w-full group" variant="secondary">
                  <Link href="/quote/residential">
                    <span className="flex items-center justify-center gap-2">
                      Get a Quote
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="service-card text-center relative before:absolute before:inset-0 before:border-2 before:border-secondary before:rounded-lg before:-z-10 transform transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Medium Home</h3>
                <p className="text-white/70 mb-4">1,000-2,000 sq ft</p>
                <div className="text-4xl font-bold text-secondary mb-6">
                  $400<span className="text-lg text-white/70">+</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">2-3 bedrooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">2 bathrooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">Kitchen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">Living and dining areas</span>
                  </li>
                </ul>
                <Button asChild className="w-full group" variant="secondary">
                  <Link href="/quote/residential">
                    <span className="flex items-center justify-center gap-2">
                      Get a Quote
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-2">Large Home</h3>
                <p className="text-white/70 mb-4">2,000+ sq ft</p>
                <div className="text-4xl font-bold text-secondary mb-6">
                  $500<span className="text-lg text-white/70">+</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">4+ bedrooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">3+ bathrooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">Kitchen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">Multiple living areas</span>
                  </li>
                </ul>
                <Button asChild className="w-full group" variant="secondary">
                  <Link href="/quote/residential">
                    <span className="flex items-center justify-center gap-2">
                      Get a Quote
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
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
        secondaryButtonLink="/quote/residential"
      />
    </div>
  )
}

