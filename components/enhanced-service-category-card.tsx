"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface EnhancedServiceCategoryCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  delay?: number
  index?: number
}

export function EnhancedServiceCategoryCard({
  title,
  description,
  imageSrc,
  href,
  delay = 0,
  index = 0,
}: EnhancedServiceCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
    >
      <div className="group relative overflow-hidden rounded-xl h-[400px] transition-all duration-500 hover:shadow-glow">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Background image */}
        <Image
          src={imageSrc || "/placeholder.svg?height=800&width=600"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Content */}
        <div className="relative z-20 flex h-full flex-col justify-end p-8">
          <h3 className="mb-2 text-xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
            {title}
          </h3>

          <p className="mb-6 text-white/90 transition-all duration-500 transform-gpu opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>

          <div className="transform-gpu transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            <Button 
              asChild 
              variant="secondary"
              className="relative overflow-hidden group/button"
            >
              <Link href={href}>
                <span className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/button:translate-x-full" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
