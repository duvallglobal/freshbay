"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const [residentialOpen, setResidentialOpen] = useState(false)
  const [commercialOpen, setCommercialOpen] = useState(false)
  const [realtorsOpen, setRealtorsOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setOpen(false)}>
              <span className="text-primary">FreshBay</span> Cleaning Co.
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Home
            </Link>

            {/* Residential Services */}
            <div>
              <button
                className="flex w-full items-center justify-between text-lg font-medium"
                onClick={() => setResidentialOpen(!residentialOpen)}
              >
                Residential
                {residentialOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
              {residentialOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <Link href="/residential" className="text-base" onClick={() => setOpen(false)}>
                    All Residential Services
                  </Link>
                  <Link href="/services/residential/standard-cleaning" className="text-base" onClick={() => setOpen(false)}>
                    Standard Cleaning
                  </Link>
                  <Link href="/services/residential/deep-cleaning" className="text-base" onClick={() => setOpen(false)}>
                    Deep Cleaning
                  </Link>
                  <Link href="/services/residential/recurring-cleaning" className="text-base" onClick={() => setOpen(false)}>
                    Recurring Cleaning
                  </Link>
                  <Link href="/services/residential/move-in-out" className="text-base" onClick={() => setOpen(false)}>
                    Move-in/Move-out
                  </Link>
                  <Link href="/services/residential/special-event-cleaning" className="text-base" onClick={() => setOpen(false)}>
                    Special Event Cleaning
                  </Link>
                </div>
              )}
            </div>

            {/* Commercial Services */}
            <div>
              <button
                className="flex w-full items-center justify-between text-lg font-medium"
                onClick={() => setCommercialOpen(!commercialOpen)}
              >
                Commercial
                {commercialOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
              {commercialOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <Link href="/commercial" className="text-base" onClick={() => setOpen(false)}>
                    All Commercial Services
                  </Link>
                  <Link href="/commercial/office-space" className="text-base" onClick={() => setOpen(false)}>
                    Office Space
                  </Link>
                  <Link href="/commercial/art-studios" className="text-base" onClick={() => setOpen(false)}>
                    Art Studios
                  </Link>
                  <Link href="/commercial/massage-parlors" className="text-base" onClick={() => setOpen(false)}>
                    Massage Parlors
                  </Link>
                  <Link href="/commercial/janitorial-services" className="text-base" onClick={() => setOpen(false)}>
                    Janitorial Services
                  </Link>
                </div>
              )}
            </div>

            {/* Realtors Services */}
            <div>
              <button
                className="flex w-full items-center justify-between text-lg font-medium"
                onClick={() => setRealtorsOpen(!realtorsOpen)}
              >
                Realtors
                {realtorsOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
              {realtorsOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <Link href="/realtors" className="text-base" onClick={() => setOpen(false)}>
                    All Realtor Services
                  </Link>
                  <Link href="/services/realtor/pre-listing-cleaning" className="text-base" onClick={() => setOpen(false)}>
                    Pre-Listing Cleaning
                  </Link>
                  <Link href="/services/realtor/open-house-cleaning" className="text-base" onClick={() => setOpen(false)}>
                    Open House Cleaning
                  </Link>
                  <Link href="/services/realtor/emergency-cleaning-services" className="text-base" onClick={() => setOpen(false)}>
                    Emergency Cleaning
                  </Link>
                  <Link href="/services/realtor/turnkey-service" className="text-base" onClick={() => setOpen(false)}>
                    Turnkey Service
                  </Link>
                  <Link href="/services/realtor/staging-cleaning" className="text-base" onClick={() => setOpen(false)}>
                    Staging Cleaning
                  </Link>
                  <Link href="/services/realtor/post-construction" className="text-base" onClick={() => setOpen(false)}>
                    Post-Construction
                  </Link>
                </div>
              )}
            </div>

            <Link href="/quote" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
            <Link href="/book" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Book Now
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
          <div className="mt-4">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

