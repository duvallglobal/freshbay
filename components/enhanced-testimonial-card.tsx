"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface EnhancedTestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
  delay?: number
  index?: number
}

export function EnhancedTestimonialCard({
  quote,
  author,
  location,
  rating,
  delay = 0,
  index = 0,
}: EnhancedTestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
      whileHover={{ y: -10 }}
    >
      <div className="glass-card h-full">
        <div className="p-8">
          <div className="mb-4 flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Star
                  className={`h-5 w-5 transition-all duration-300 ${
                    i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                  }`}
                />
              </motion.div>
            ))}
          </div>
          <div className="relative">
            <span className="absolute -left-2 -top-2 text-5xl text-secondary/20">"</span>
            <p className="mb-6 italic relative z-10 text-white/90">{quote}</p>
            <span className="absolute -bottom-4 -right-2 text-5xl text-secondary/20">"</span>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4">
            <div className="font-semibold text-white">{author}</div>
            <div className="text-sm text-white/70">{location}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

