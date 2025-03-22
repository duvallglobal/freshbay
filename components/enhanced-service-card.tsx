"use client"

import type React from "react"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface EnhancedServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  category: "residential" | "commercial" | "realtor"
  delay?: number
  index?: number
}

export function EnhancedServiceCard({
  title,
  description,
  icon,
  href,
  category,
  delay = 0,
  index = 0,
}: EnhancedServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
      whileHover={{ y: -10 }}
      className="glass-card group h-full"
    >
      <div className="service-card h-full flex flex-col group">
        <div className="p-6 flex-grow">
          <div className="mb-6 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center"
            >
              {icon}
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
          <p className="text-white/90 mb-6 text-center">{description}</p>
        </div>
        <div className="p-6 pt-0 mt-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <Button asChild variant="secondary" className="w-full sm:w-auto group shine">
              <Link href={href}>
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <Link href={`/quote/${category}`}>Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

