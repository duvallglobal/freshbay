"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  threshold?: number
  once?: boolean
}

export function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Define animation classes based on direction
  const hiddenClasses = {
    up: "translate-y-10 opacity-0",
    down: "-translate-y-10 opacity-0",
    left: "translate-x-10 opacity-0",
    right: "-translate-x-10 opacity-0",
  }

  useEffect(() => {
    // On mobile, we'll use a lower threshold to make animations trigger more easily
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const mobileThreshold = Math.max(0.01, threshold / 2) // Lower threshold for mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure smooth animation
          setTimeout(() => {
            setIsVisible(true)
          }, 50)

          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: isMobile ? mobileThreshold : threshold,
        rootMargin: isMobile ? "0px 0px -50px 0px" : "0px", // Trigger earlier on mobile
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[direction],
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

