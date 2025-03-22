import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">Contact Us</h1>
            <p className="mt-6 text-lg text-white/90">
              Have questions about our cleaning services? Get in touch with our team and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="service-card text-center">
              <div className="flex justify-center mb-4">
                <Phone className="feature-icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-white/80 mb-4">Call us directly</p>
              <a href="tel:+19546342408" className="text-lg font-semibold text-white hover:text-secondary">
                (954) 634-2408
              </a>
            </div>
            <div className="service-card text-center">
              <div className="flex justify-center mb-4">
                <Mail className="feature-icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white/80 mb-4">Send us an email</p>
              <a
                href="mailto:info@freshbaycleaning.pro"
                className="text-lg font-semibold text-white hover:text-secondary"
              >
                info@freshbaycleaning.pro
              </a>
            </div>
            <div className="service-card text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="feature-icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Office</h3>
              <address className="not-italic text-lg font-semibold text-white">
                York Road
                <br />
                Towson, MD 21204
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 glass-effect">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">Send Us a Message</h2>
            <p className="text-white/90 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
            <div className="service-card">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! We'll get back to you soon.");
              }}>
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
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Not ready to book yet?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Get an instant quote to see how affordable our professional cleaning services can be.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/quote">Get Your Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

