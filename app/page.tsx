"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Clock, Award, Sparkles, Building, Key, Repeat, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedTestimonialCard } from "@/components/enhanced-testimonial-card"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"
import { EnhancedServiceCard } from "@/components/enhanced-service-card"
import { EnhancedServiceCategoryCard } from "@/components/enhanced-service-category-card"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/95"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-snug sm:leading-tight text-shadow-lg break-words">
                  <span className="text-secondary">PROFESSIONAL</span> CLEANING SERVICES YOU CAN TRUST!
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-xl text-white/90 mb-8">
                  Welcome to FreshBay Cleaning Co. <br />
                  Towson's dedicated cleaning experts for Residential, Commercial and Landlord/Realtor cleaning
                  services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-white/80 mb-10">
                  Offering same-day & emergency services, available at your convenience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-lg group transition-all duration-300 hover:scale-105 rounded-full px-8 py-6 shadow-glow-strong shine"
                >
                  <Link href="/quote">
                    <span className="flex items-center gap-2">
                      GET AN INSTANT QUOTE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-secondary transition-all duration-300 hover:scale-105 rounded-full px-8 py-6 font-medium"
                >
                  <Link href="/book">SCHEDULE SERVICE NOW!</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-secondary/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-primary/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hero-cleaning.jpg"
                    alt="Professional house cleaning service team member cleaning a modern home"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-secondary text-primary p-4 rounded-xl shadow-lg"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="font-bold text-lg">100% Satisfaction</div>
                  <div className="text-sm">Guaranteed or your money back</div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -left-6 bg-white text-primary p-4 rounded-xl shadow-lg"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="font-bold text-lg">24/7 Service</div>
                  <div className="text-sm">Available when you need us</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title mb-16">WHY CHOOSE FRESHBAY</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-secondary" />,
                title: "Premium Quality",
                description:
                  "Our expert cleaning staff undergoes rigorous training to deliver exceptional results every time. We use professional-grade equipment and premium cleaning products to ensure your space is spotless.",
              },
              {
                icon: <Clock className="h-10 w-10 text-secondary" />,
                title: "Flexible Scheduling",
                description:
                  "We work around your schedule, offering emergency and same-day services when you need them most. Early morning, evening, and weekend appointments are available to minimize disruption.",
              },
              {
                icon: <Shield className="h-10 w-10 text-secondary" />,
                title: "100% Guaranteed",
                description:
                  "Your satisfaction is our priority. If you're not completely satisfied with our service, we'll return to address any concerns at no additional cost. That's our promise to you.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -10 }}
              >
                <div className="glass-card text-center p-8 h-full">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center"
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90 pointer-events-none"></div>

        {/* Container */}
        <div className="container-custom">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="section-title mb-16">OUR CLEANING SERVICES</h2>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <EnhancedServiceCategoryCard
              title="RESIDENTIAL"
              description="Professional home cleaning services tailored to your schedule."
              imageSrc="/residential-cleaning.jpg"
              href="/services/residential"
              index={0}
            />

            <EnhancedServiceCategoryCard
              title="COMMERCIAL"
              description="Expert cleaning solutions for businesses and offices."
              imageSrc="/commercial-cleaning.jpg"
              href="/services/commercial"
              index={1}
            />

            <EnhancedServiceCategoryCard
              title="LANDLORD/REALTORS"
              description="Specialized cleaning for property showings and tenant transitions."
              imageSrc="/realtor-cleaning.jpg"
              href="/services/realtor"
              index={2}
            />
          </div>
        </div>
      </section>
      {/* Popular Services Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title mb-16">POPULAR SERVICES</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-secondary" />,
                title: "Deep Cleaning",
                description:
                  "A comprehensive top-to-bottom cleaning service designed to refresh your home. Includes scrubbing baseboards, detailed cleaning of kitchen appliances, and more.",
                href: "/services/residential/deep-cleaning",
                category: "residential",
              },
              {
                icon: <Building className="h-8 w-8 text-secondary" />,
                title: "Office Cleaning",
                description:
                  "Professional cleaning to maintain a productive and hygienic workspace. Includes dusting workstations, sanitizing communal areas, and more.",
                href: "/services/commercial/office-space",
                category: "commercial",
              },
              {
                icon: <Key className="h-8 w-8 text-secondary" />,
                title: "Turnkey Service",
                description:
                  "Comprehensive cleaning for landlords to prepare properties between tenants. Includes deep cleaning of all rooms and more.",
                href: "/services/realtor/turnkey-service",
                category: "realtor",
              },
              {
                icon: <Repeat className="h-8 w-8 text-secondary" />,
                title: "Recurring Cleaning",
                description:
                  "Regular maintenance cleaning on a schedule that works for you. Includes dusting, vacuuming, mopping, and more.",
                href: "/services/residential/recurring-cleaning",
                category: "residential",
              },
              {
                icon: <Truck className="h-8 w-8 text-secondary" />,
                title: "Move-in/Move-out",
                description:
                  "Ensure you leave your old place spotless or start fresh in your new home. Includes deep cleaning of all rooms and more.",
                href: "/services/residential/move-in-out",
                category: "residential",
              },
              {
                icon: <Building className="h-8 w-8 text-secondary" />,
                title: "Post-Construction",
                description:
                  "Thorough cleaning after renovations or new construction. Includes dust removal from walls and ceilings and more.",
                href: "/services/realtor/post-construction",
                category: "realtor",
              },
            ].map((service, index) => (
              <EnhancedServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                category={service.category as "residential" | "commercial" | "realtor"}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title mb-16">WHAT OUR CUSTOMERS SAY</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EnhancedTestimonialCard
              quote="MJ and team did an amazing job, the deep cleaning he provided was thorough and pricing was excellent. I set up a monthly cleaning service based off yesterday's job. From the ceiling fans to the toilet brush holder, his attention to detail was phenomenal. He left my house spotless and sent a recap once he was done with recommendations and tips to maintain."
              author="Tom J."
              location="Freshbay Client- 9 months"
              rating={5}
              index={0}
            />
            <EnhancedTestimonialCard
              quote="I have tried many cleaners in the past but I have to say that I found MJ and his teamto be the best. He does a very thorough and detailed job. They go the extra mile to make sure you are happy with his service. I could not be more happy to have finally found a cleaner to do my house the way I want it done. I highly recommend him."
              author="Gilian T."
              location="Freshbay Client- 1 Year"
              rating={5}
              index={1}
            />
            <EnhancedTestimonialCard
              quote="I had MJ and his team perform a Deep Clean on my home at the beginning of this month. Not only was MJ exceedingly thorough, but he actually stayed well overtime until he, himself, was satisfied with the results of all his hard work."
              author="Adrianna C."
              location="Freshbay Client- 9 months"
              rating={5}
              index={2}
            />
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
        secondaryButtonLink="/quote"
      />
    </div>
  )
}

