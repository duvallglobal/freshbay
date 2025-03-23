import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceCategoryCard } from "@/components/service-category-card"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }]} />
          <div className="mx-auto max-w-3xl text-center mt-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Cleaning Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              FreshBay Cleaning Co. offers a comprehensive range of cleaning services to meet all your needs in Towson,
              Maryland and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="bg-background py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Service Categories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer specialized cleaning services for different needs. Explore our service categories to find the
              perfect solution for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCategoryCard
              title="Residential Services"
              description="Professional cleaning services for homes and apartments, from deep cleaning to recurring maintenance."
              imageSrc="/placeholder.svg?height=600&width=800"
              href="/services/seservices/rvices/seservices/rvices/services/residential"
              category="services/residential"
            />
            <ServiceCategoryCard
              title="Commercial Services"
              description="Specialized cleaning for businesses, including offices, art studios, and wellness centers."
              imageSrc="/placeholder.svg?height=600&width=800"
              href="/services/services/services/services/services/services/commercial"
              category="services/commercial"
            />
            <ServiceCategoryCard
              title="Realtor Services"
              description="Comprehensive cleaning solutions for real estate professionals, property managers, and landlords."
              imageSrc="/placeholder.svg?height=600&width=800"
              href="/services/services/services/services/services/realtor"
          category="services/services/realtor"
          />
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="bg-muted py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Residential Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Keep your home clean, healthy, and comfortable with our residential cleaning services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Standard Cleaning</CardTitle>
                <CardDescription>Regular cleaning for a consistently clean home</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our standard cleaning service provides thorough, reliable cleaning for your home, maintaining a
                  consistently clean and comfortable living space.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services/residential/standard-cleaning">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deep Cleaning</CardTitle>
                <CardDescription>Thorough cleaning for your entire home</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our deep cleaning service tackles those hard-to-reach areas and stubborn dirt and grime, giving your
                  home a fresh start.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services/residential/deep-cleaning">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Event Cleaning</CardTitle>
                <CardDescription>Comprehensive cleaning for special occasions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Make your special occasions truly memorable with our event cleaning services. We handle the cleanup
                  before and after your events.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services/residential/special-event-cleaning">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/seservices/rvices/seservices/rvices/seservices/rvices/services/residential">View All Residential Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="bg-background py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Commercial Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Keep your business environment clean, professional, and welcoming with our commercial cleaning services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Office Space</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Keep your office environment clean, healthy, and professional with our comprehensive office cleaning
                  services.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/commercial/office-space">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Art Studios</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialized cleaning that respects the creative environment while maintaining cleanliness.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/commercial/art-studios">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Massage Parlors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Meticulous cleaning and sanitization to maintain a healthy, relaxing environment for clients.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/commercial/massage-parlors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Janitorial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive janitorial services with flexible scheduling options for businesses of all sizes.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/services/commercial/janitorial-services">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/services/services/services/services/services/services/commercial">View All Commercial Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Realtor Services Section */}
      <section className="bg-muted py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Realtor Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Specialized cleaning services for realtors, landlords, and property managers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Pre-Listing Cleaning</CardTitle>
                <CardDescription>Maximize your property's appeal</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our pre-listing cleaning service ensures your property makes the best possible first impression on
                  potential buyers.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services/realtor/pre-listing-cleaning">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Open House Cleaning</CardTitle>
                <CardDescription>Perfect presentation for showings</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Make every open house a success with our professional cleaning services that ensure your property
                  looks its absolute best.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services/realtor/open-house-cleaning">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Cleaning</CardTitle>
                <CardDescription>Fast response for urgent situations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  24/7 availability for unexpected situations. We're here to help when you need immediate cleaning
                  assistance.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services/realtor/emergency-cleaning-services">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/services/services/services/services/realtor">w All Realtor Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready for a Cleaner Space?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Get in touch with us today to schedule your cleaning service or request a free quote.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book">Book Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

