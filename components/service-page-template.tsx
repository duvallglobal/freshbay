"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceNavigation } from "@/components/service-navigation"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { motion } from "framer-motion"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

interface BenefitItem {
  title: string
  description: string
}

interface IncludedItem {
  title: string
  items: string[]
}

interface UniqueFeature {
  title: string
  description: string
}

interface ServicePageTemplateProps {
  category: "residential" | "commercial" | "realtor"
  service: string
  title: string
  description: string
  whatIsDescription: string
  perfectFor: string[]
  benefits: BenefitItem[]
  includedItems: IncludedItem[]
  uniqueFeatures: UniqueFeature[]
  quoteLink: string
}

export function ServicePageTemplate({
  category,
  service,
  title,
  description,
  whatIsDescription,
  perfectFor,
  benefits,
  includedItems,
  uniqueFeatures,
  quoteLink,
}: ServicePageTemplateProps) {
  // Ensure arrays are defined to prevent TypeScript errors
  const safeIncludedItems = includedItems || [];
  const safeBenefits = benefits || [];
  const safeUniqueFeatures = uniqueFeatures || [];
  const safePerfectFor = perfectFor || [];
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category={category} service={service} />
      
      {/* Hero Section */}
      <section className="hero-section pt-24 pt-24 pt-24 pt-24 pt-24 pt-24 pt-24">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:flex lg:h-[70vh] lg:items-center lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
                  {title}
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="mt-6 text-lg text-white/90">
                  {description}
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
                    variant="secondary"
                  >
                    <Link href={quoteLink}>
                      <span className="flex items-center gap-2 glass-effect border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                        Get a Free Quote
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    size="lg glass-effect border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    variant="outline glass-effect border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    asChild
                    className="rounded-full bg-white/10 text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 glass-effect border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                  >
                    <Link href="/book">Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* Service Description */}
      <section className="service-section">
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
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-secondary mb-6">What is {title}?</h2>
                <p className="text-white/90 mb-6">
                  {whatIsDescription}
                </p>
                <p className="text-white/90 mb-6">Our {service} service includes:</p>
                <ul className="space-y-4">
                  {safePerfectFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="order-1 lg:order-2 grid gap-6">
                <div className="glass-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">Perfect For:</h3>
                  <ul className="space-y-4">
                    {safePerfectFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Benefits of {title}</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {safeBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/90">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="service-section">
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
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">
              What's Included in Our {title}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {safeIncludedItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="glass-card group hover:shadow-glow transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Unique Offering</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {safeUniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="service-card text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
        secondaryButtonLink={quoteLink}
      />
    </div>
  )
}