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
import { motion } from "framer-motion"

export default function CommercialServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="commercial" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  Commercial Cleaning Services
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="mt-6 text-lg text-white/90">
                  FreshBay Cleaning Co. provides professional commercial cleaning services in Towson, Maryland. From office spaces to retail stores and industrial facilities, we keep your business spotless and professional.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
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
              </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-secondary text-center sm:text-4xl mb-12">
              Our Commercial Cleaning Services
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Office Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-secondary mt-4">Office Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Keep your workspace pristine and professional</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Daily or weekly cleaning schedules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Deep cleaning of workstations and common areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Kitchen and break room sanitization</span>
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
            </motion.div>

            {/* Retail Space Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-secondary mt-4">Retail Space Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Create an inviting shopping environment</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Display area dusting and polishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Floor cleaning and maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Entrance and window cleaning</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/commercial/retail-space">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Industrial Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-secondary mt-4">Industrial Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Maintain a safe industrial environment</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Warehouse cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Equipment cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Industrial floor care</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link href="/services/commercial/industrial">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Art Studio Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-secondary mt-4">Art Studio Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Specialized cleaning for creative spaces</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Careful cleaning around artwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Material-safe cleaning solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Dust and debris removal</span>
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
            </motion.div>

            {/* Massage Parlor Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-secondary mt-4">Massage Parlor Cleaning</CardTitle>
                  <CardDescription className="text-white/70">Hygienic cleaning for wellness spaces</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Sanitization of treatment areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Linen and towel service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Aromatherapy-friendly cleaning</span>
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
            </motion.div>

            {/* Janitorial Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-secondary mt-4">Janitorial Services</CardTitle>
                  <CardDescription className="text-white/70">Comprehensive facility maintenance</CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Daily maintenance cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Restroom sanitation and restocking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>Trash removal and recycling</span>
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
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-secondary text-center sm:text-4xl mb-12">
              Why Choose FreshBay for Your Business
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Professional Staff</h3>
                  <p className="text-white/90">
                    Our trained and vetted cleaning professionals understand the unique needs of commercial spaces.
                  </p>
                </div>
              </CardHoverEffect>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Flexible Scheduling</h3>
                  <p className="text-white/90">
                    We work around your business hours to minimize disruption to your operations.
                  </p>
                </div>
              </CardHoverEffect>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardHoverEffect>
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Customized Solutions</h3>
                  <p className="text-white/90">
                    We tailor our cleaning services to meet the specific needs of your business and industry.
                  </p>
                </div>
              </CardHoverEffect>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EnhancedCTASection
        title="READY TO GET STARTED?"
        description="Book your commercial cleaning service today or get an instant quote to see how affordable professional cleaning can be."
        primaryButtonText="BOOK NOW"
        primaryButtonLink="/book"
        secondaryButtonText="GET A QUOTE"
        secondaryButtonLink="/quote/commercial"
      />
    </div>
  )
}