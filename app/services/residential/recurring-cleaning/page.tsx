import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceNavigation } from "@/components/service-navigation"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function RecurringCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="residential" service="recurring-cleaning" />

      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
              Recurring Cleaning Services
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Maintain a consistently clean home with our recurring cleaning services. Choose from weekly, bi-weekly, or
              monthly schedules to suit your needs.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                className="rounded-full text-base group transition-all duration-300 hover:scale-105"
                variant="secondary"
              >
                <Link href="/quote/residential">
                  <span className="flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full bg-white/10 text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Recurring Cleaning Service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">What is Recurring Cleaning?</h2>
              <p className="text-white/90 mb-6">
                Recurring cleaning is a regular maintenance cleaning service designed to keep your home consistently
                clean and comfortable. Unlike deep cleaning, which tackles built-up dirt and grime, recurring cleaning
                focuses on maintaining cleanliness on a regular schedule.
              </p>
              <p className="text-white/90 mb-6">Benefits of recurring cleaning include:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Consistently clean home without the effort</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">More time to focus on what matters to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Reduced allergens and improved indoor air quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cost savings compared to individual cleanings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency Options */}
      <section className="py-16 glass-effect">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Choose Your Cleaning Frequency</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="service-card text-center">
              <h3 className="text-xl font-bold text-white mb-4">Weekly Cleaning</h3>
              <p className="text-white/90 mb-6">
                Perfect for busy households, families with children or pets, and those who prefer a consistently
                spotless home.
              </p>
              <div className="text-4xl font-bold text-secondary mb-6">
                20% <span className="text-white">OFF</span>
              </div>
              <Button asChild className="w-full group" variant="secondary">
                <Link href="/quote/residential">
                  <span className="flex items-center justify-center gap-2">
                    Get a Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </div>

            <div className="service-card text-center relative before:absolute before:inset-0 before:border-2 before:border-secondary before:rounded-lg before:-z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Bi-Weekly Cleaning</h3>
              <p className="text-white/90 mb-6">
                The perfect balance of cleanliness and value. Ideal for most households to maintain a clean home.
              </p>
              <div className="text-4xl font-bold text-secondary mb-6">
                15% <span className="text-white">OFF</span>
              </div>
              <Button asChild className="w-full group" variant="secondary">
                <Link href="/quote/residential">
                  <span className="flex items-center justify-center gap-2">
                    Get a Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </div>

            <div className="service-card text-center">
              <h3 className="text-xl font-bold text-white mb-4">Monthly Cleaning</h3>
              <p className="text-white/90 mb-6">
                Great for homes that don't get dirty quickly or as a supplement to your own cleaning routine.
              </p>
              <div className="text-4xl font-bold text-secondary mb-6">
                10% <span className="text-white">OFF</span>
              </div>
              <Button asChild className="w-full group" variant="secondary">
                <Link href="/quote/residential">
                  <span className="flex items-center justify-center gap-2">
                    Get a Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">What's Included in Recurring Cleaning</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="service-card">
              <h3 className="text-xl font-bold text-white mb-4">All Rooms</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Dusting of all accessible surfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Vacuuming of all floors and carpets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Mopping of all hard floors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Emptying trash bins</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Straightening and organizing</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-xl font-bold text-white mb-4">Kitchen</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning and sanitizing countertops</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning outside of appliances</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning and sanitizing sink</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Wiping down cabinet fronts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning microwave interior</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-xl font-bold text-white mb-4">Bathrooms</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning and sanitizing toilets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning and sanitizing sinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning showers and tubs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Cleaning mirrors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Wiping down countertops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EnhancedCTASection
        title="READY TO GET STARTED?"
        description="Book your cleaning service today or get an instant quote to see how affordable professional cleaning can be."
        primaryButtonText="BOOK NOW"
        primaryButtonLink="/book"
        secondaryButtonText="GET A QUOTE"
        secondaryButtonLink="/quote/residential"
      />
    </div>
  )
}

