"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function EnhancedNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Initialize scrolled state to false to match server rendering
  const [hasWindow, setHasWindow] = useState(false)

  // This effect runs once after the component mounts
  useEffect(() => {
    setHasWindow(true)
  }, [])

  useEffect(() => {
    if (!hasWindow) return

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Run once on mount to set initial state
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasWindow])

  // Handle mouse leave for dropdown
  useEffect(() => {
    if (!hasWindow) return

    const handleMouseLeave = (e: MouseEvent) => {
      const servicesDropdown = document.querySelector('.group')
      const dropdown = document.querySelector('.group .absolute')

      if (servicesDropdown && dropdown) {
        const isInDropdown = servicesDropdown.contains(e.target as Node) ||
                            (dropdown && dropdown.contains(e.target as Node))
        if (!isInDropdown && activeDropdown === "services") {
          setActiveDropdown(null)
        }
      }
    }

    document.addEventListener('mousemove', handleMouseLeave)
    return () => document.removeEventListener('mousemove', handleMouseLeave)
  }, [activeDropdown, hasWindow])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center py-3">
            <div className="relative h-24 w-24 mr-6">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="FreshBay Logo"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <motion.span variants={itemVariants} className="text-2xl font-bold text-white">
              FreshBay <span className="text-secondary">Cleaning Co.</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mt-2">
            <motion.div variants={itemVariants}>
              <Link href="/" className="nav-link">
                HOME
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <button
                className="nav-link flex items-center gap-1"
                onClick={() => toggleDropdown("services")}
                onMouseEnter={() => setActiveDropdown("services")}
              >
                SERVICES <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute left-0 mt-4 w-64 rounded-xl shadow-lg bg-[#0A1172] border border-white/10 overflow-hidden z-50"
                    onMouseEnter={() => setActiveDropdown("services")}
                  >
                    <div className="py-2 px-1">
                      <Link
                        href="/services/residential"
                        className="flex items-center px-4 py-3 text-sm text-white hover:bg-white/10 rounded-lg mx-1 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-secondary/20 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-secondary"
                          >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </span>
                        Residential
                      </Link>
                      <Link
                        href="/services/commercial"
                        className="flex items-center px-4 py-3 text-sm text-white hover:bg-white/10 rounded-lg mx-1 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-secondary/20 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-secondary"
                          >
                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                            <path d="M9 22v-4h6v4"></path>
                            <path d="M8 6h.01"></path>
                            <path d="M16 6h.01"></path>
                            <path d="M12 6h.01"></path>
                            <path d="M12 10h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 10h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 10h.01"></path>
                            <path d="M8 14h.01"></path>
                          </svg>
                        </span>
                        Commercial
                      </Link>
                      <Link
                        href="/services/realtor"
                        className="flex items-center px-4 py-3 text-sm text-white hover:bg-white/10 rounded-lg mx-1 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-secondary/20 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-secondary"
                          >
                            <path d="M18 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5v-4h-2v4H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h12Z"></path>
                            <path d="m4 22 18-9"></path>
                            <path d="M15 22v-4"></path>
                            <path d="M9 22v-4"></path>
                            <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                          </svg>
                        </span>
                        Realtor/Landlord
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button asChild className="quote-button">
                <Link href="/quote">GET A QUOTE</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/contact" className="nav-link">
                CONTACT
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button asChild className="cta-button shine border-2 border-secondary hover:shadow-glow-secondary">
                <Link href="/book">BOOK NOW</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="md:hidden text-white hover:text-secondary transition-colors duration-200 mt-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A1172]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-secondary transition-colors duration-200 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>

              <div className="px-3 py-2">
                <button
                  className="flex items-center justify-between w-full text-white font-medium"
                  onClick={() => toggleDropdown("mobileServices")}
                >
                  <span>SERVICES</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === "mobileServices" ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "mobileServices" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 space-y-1"
                    >
                      <Link
                        href="/services/residential"
                        className="flex items-center py-2 text-white hover:text-secondary transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="w-6 h-6 flex items-center justify-center bg-secondary/20 rounded-full mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-secondary"
                          >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </span>
                        Residential
                      </Link>
                      <Link
                        href="/services/commercial"
                        className="flex items-center py-2 text-white hover:text-secondary transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="w-6 h-6 flex items-center justify-center bg-secondary/20 rounded-full mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-secondary"
                          >
                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                            <path d="M9 22v-4h6v4"></path>
                            <path d="M8 6h.01"></path>
                            <path d="M16 6h.01"></path>
                            <path d="M12 6h.01"></path>
                            <path d="M12 10h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 10h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 10h.01"></path>
                            <path d="M8 14h.01"></path>
                          </svg>
                        </span>
                        Commercial
                      </Link>
                      <Link
                        href="/services/realtor"
                        className="flex items-center py-2 text-white hover:text-secondary transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="w-6 h-6 flex items-center justify-center bg-secondary/20 rounded-full mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-secondary"
                          >
                            <path d="M18 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5v-4h-2v4H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h12Z"></path>
                            <path d="m4 22 18-9"></path>
                            <path d="M15 22v-4"></path>
                            <path d="M9 22v-4"></path>
                            <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                          </svg>
                        </span>
                        Realtor/Landlord
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="px-3 py-2">
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-white hover:text-secondary transition-colors duration-200 rounded-lg hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              </div>

              <div className="mt-4 px-3 py-2">
                <Button
                  asChild
                  className="quote-button w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/quote">GET A QUOTE</Link>
                </Button>
              </div>

              <div className="px-3 py-2 mt-2">
                <Button
                  asChild
                  className="w-full cta-button shine border-2 border-secondary hover:shadow-glow-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/book">BOOK NOW</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

