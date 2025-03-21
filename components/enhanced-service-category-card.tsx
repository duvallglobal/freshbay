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
      <div className="group relative overflow-hidden rounded-xl h-[400px] transition-all duration-500 hover:shadow-glow-strong">
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
          <motion.h3
            className="mb-2 text-3xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-2 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="mb-6 text-white/90 transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100"
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1 }} {/* Changed from opacity: 0 to 1 */}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} {/* Changed from opacity: 0 to 1 */}
            viewport={{ once: true }}
            className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
          >
            <Button asChild variant="secondary" className="shine">
              <Link href={href} className="group">
                <span className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
