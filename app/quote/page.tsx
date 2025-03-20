"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QuotePage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-primary py-24 pt-32 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
              Get a Free Cleaning Quote
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Select the type of cleaning service you need to get a customized quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="service-card text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Residential Cleaning</h2>
              <p className="text-white/90 mb-6">
                Get a quote for home cleaning services including deep cleaning, recurring cleaning, and move-in/move-out
                cleaning.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/quote/residential">Get Residential Quote</Link>
              </Button>
            </div>

            <div className="service-card text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Commercial Cleaning</h2>
              <p className="text-white/90 mb-6">
                Get a quote for business cleaning services including office cleaning, janitorial services, and
                specialized cleaning.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/quote/commercial">Get Commercial Quote</Link>
              </Button>
            </div>

            <div className="service-card text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Realtor/Landlord Cleaning</h2>
              <p className="text-white/90 mb-6">
                Get a quote for property cleaning services including turnkey service, staging cleaning, and
                post-construction cleaning.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/quote/realtor">Get Realtor/Landlord Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

