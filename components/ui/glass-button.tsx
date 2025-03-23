"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GlassButtonProps extends ButtonProps {
  glowColor?: string
  hoverScale?: number
  glassOpacity?: number
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, glowColor = "rgba(247, 255, 0, 0.3)", hoverScale = 1.05, glassOpacity = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full border border-white/20",
            "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]",
            "text-white hover:text-white hover:border-white/30",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_0_20px_rgba(247,255,0,0.3)]",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>
    )
  }
)

GlassButton.displayName = "GlassButton"

export { GlassButton }