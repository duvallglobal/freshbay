"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface CardHoverEffectProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function CardHoverEffect({ children, className, glowColor = "rgba(14, 165, 233, 0.15)" }: CardHoverEffectProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-200",
        isHovering ? "scale-[1.02]" : "scale-100",
        className,
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{
        background: isHovering
          ? `radial-gradient(circle at ${position.x}px ${position.y}px, ${glowColor} 0%, transparent 60%)`
          : "transparent",
      }}
    >
      {children}
    </div>
  )
}

