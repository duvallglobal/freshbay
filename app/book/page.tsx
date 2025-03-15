import Link from "next/link"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
              Book Your Cleaning Service
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Schedule your cleaning service with FreshBay Cleaning Co. Fill out the form below to book your preferred
              date and time.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="service-card">
              <form className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Contact Information</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="(410) 555-1234"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-white mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="123 Main St, Towson, MD"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Service Details</h3>
                  <div>
                    <label htmlFor="service-type" className="block text-white mb-2">
                      Service Type
                    </label>
                    <select
                      id="service-type"
                      className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select a service type</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="recurring-cleaning">Recurring Cleaning</option>
                      <option value="move-in-out">Move-in/Move-out Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="realtor">Realtor/Landlord Services</option>
                    </select>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="date" className="block text-white mb-2">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-white mb-2">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          id="time"
                          className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Select a time slot</option>
                          <option value="morning">Morning (8am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 4pm)</option>
                          <option value="evening">Evening (4pm - 8pm)</option>
                        </select>
                        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Additional Information</h3>
                  <div>
                    <label htmlFor="notes" className="block text-white mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Please let us know if you have any special requests or areas that need extra attention."
                    ></textarea>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90">
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Section (would be shown after form submission) */}
      <section className="py-16 hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="service-card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h2>
              <p className="text-white/90 mb-6">
                Your cleaning service has been scheduled successfully. We've sent a confirmation email with all the
                details.
              </p>
              <div className="mb-6 rounded-lg bg-white/10 p-6">
                <div className="mb-4 flex items-center justify-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-white">Monday, April 15, 2024</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-white">Morning (8am - 12pm)</span>
                </div>
              </div>
              <Button asChild className="w-full bg-secondary text-primary hover:bg-secondary/90">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">NOT READY TO BOOK YET?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote to see how affordable our cleaning services can be.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link href="/quote">GET A FREE QUOTE</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

