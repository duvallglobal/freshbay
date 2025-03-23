"use client"

import { ReactNode } from "react"
import { ServiceNavigation } from "@/components/service-navigation"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedShape } from "@/components/ui/animated-shape"
import { motion } from "framer-motion"

interface ServiceLayoutProps {
  children: ReactNode
  category: "residential" | "commercial" | "realtor"
  service: string
  title: string
  description: string
}

export function ServiceLayout({
  children,
  category,
  service,
  title,
  description,
}: ServiceLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category={category} service={service} />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20 pt-24">
        <AnimatedGradientBackground intensity="medium" speed="slow">
          <div className="container relative mx-auto px-4 sm:px-6 lg:flex lg:h-[70vh] lg:items-center lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
              >
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
            </div>
          </div>
        </AnimatedGradientBackground>
      </section>

      {/* Content */}
      <div className="relative">
        <AnimatedShape
          shape="circle"
          size="large"
          color="#F7FF00"
          opacity={0.05}
          blur="large"
          className="absolute -top-20 -left-20"
        />
        <AnimatedShape
          shape="square"
          size="medium"
          color="#F7FF00"
          opacity={0.05}
          blur="medium"
          className="absolute top-40 right-20"
        />
        {children}
      </div>
    </div>
  )
}
