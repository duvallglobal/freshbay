"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedShapeProps {
  className?: string
  color?: string
  size?: "small" | "medium" | "large"
  speed?: "slow" | "medium" | "fast"
  opacity?: number
  blur?: "none" | "small" | "medium" | "large"
  shape?: "circle" | "square" | "blob"
}

export function AnimatedShape({
  className,
  color = "var(--primary)",
  size = "medium",
  speed = "medium",
  opacity = 0.1,
  blur = "medium",
  shape = "blob",
}: AnimatedShapeProps) {
  const shapeRef = useRef<HTMLDivElement>(null)

  // Set size values
  const sizeValues = {
    small: "w-32 h-32",
    medium: "w-64 h-64",
    large: "w-96 h-96",
  }

  // Set animation speed
  const speedValues = {
    slow: "animate-float-slow",
    medium: "animate-float",
    fast: "animate-float-fast",
  }

  // Set blur values
  const blurValues = {
    none: "blur-none",
    small: "blur-md",
    medium: "blur-xl",
    large: "blur-3xl",
  }

  // Set shape values
  const shapeValues = {
    circle: "rounded-full",
    square: "rounded-lg",
    blob: "rounded-blob",
  }

  useEffect(() => {
    if (!shapeRef.current) return

    // Random starting position
    const randomX = Math.random() * 10 - 5
    const randomY = Math.random() * 10 - 5

    shapeRef.current.style.setProperty("--translate-x", `${randomX}%`)
    shapeRef.current.style.setProperty("--translate-y", `${randomY}%`)
  }, [])

  return (
    <div
      ref={shapeRef}
      className={cn(
        "absolute -z-10 transform-gpu",
        sizeValues[size],
        speedValues[speed],
        blurValues[blur],
        shapeValues[shape],
        className,
      )}
      style={
        {
          backgroundColor: color,
          opacity: opacity,
          "--translate-x": "0%",
          "--translate-y": "0%",
        } as React.CSSProperties
      }
      aria-hidden="true"
    />
  )
}

