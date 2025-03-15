"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientBackgroundProps {
  className?: string
  children: React.ReactNode
  intensity?: "subtle" | "medium" | "strong"
  speed?: "slow" | "medium" | "fast"
  colors?: string[]
}

export function AnimatedGradientBackground({
  className,
  children,
  intensity = "medium",
  speed = "medium",
  colors = ["#0ea5e9", "#6366f1", "#8b5cf6", "#0891b2"],
}: AnimatedGradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Set intensity values
  const intensityValues = {
    subtle: "opacity-20",
    medium: "opacity-30",
    strong: "opacity-40",
  }

  // Set animation speed
  const speedValues = {
    slow: "animate-gradient-slow",
    medium: "animate-gradient",
    fast: "animate-gradient-fast",
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      // Subtle parallax effect on the gradient
      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          "--mouse-x": "0.5",
          "--mouse-y": "0.5",
        } as React.CSSProperties
      }
    >
      <div
        className={cn("absolute inset-0 -z-10 transform-gpu blur-3xl", intensityValues[intensity], speedValues[speed])}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${colors.join(", ")})`,
            backgroundSize: "200% 200%",
            backgroundPosition: "calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%)",
          }}
        />
      </div>
      {children}
    </div>
  )
}

