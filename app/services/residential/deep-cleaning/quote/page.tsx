"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ServiceNavigation } from "@/components/service-navigation"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Please enter your full address." }),
  propertyType: z.string({ required_error: "Please select a property type." }),
  propertySize: z.string({ required_error: "Please select a property size." }),
  bedrooms: z.string({ required_error: "Please select the number of bedrooms." }),
  bathrooms: z.string({ required_error: "Please select the number of bathrooms." }),
  date: z.date({ required_error: "Please select a preferred date." }),
  additionalServices: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
  pets: z.boolean().default(false).optional(),
})

export default function DeepCleaningQuotePage() {
  const [quoteGenerated, setQuoteGenerated] = useState(false)
  const [quoteAmount, setQuoteAmount] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      specialRequests: "",
      additionalServices: [],
      pets: false,
    },
  })

  function calculateQuote(data: z.infer<typeof formSchema>) {
    // Base prices for different property sizes
    const sizePrices = {
      small: 250,
      medium: 350,
      large: 450,
      "extra-large": 550,
    }

    // Additional costs based on number of bedrooms and bathrooms
    const bedroomCosts = {
      "1": 0,
      "2": 25,
      "3": 50,
      "4": 75,
      "5+": 100,
    }

    const bathroomCosts = {
      "1": 0,
      "2": 30,
      "3": 60,
      "4+": 90,
    }

    // Additional services costs
    const serviceCosts: Record<string, number> = {
      "carpet-cleaning": 100,
      "upholstery-cleaning": 75,
      "window-cleaning": 50,
      "refrigerator-cleaning": 40,
      "oven-cleaning": 40,
      "cabinet-cleaning": 60,
    }

    // Calculate base price
    let basePrice = sizePrices[data.propertySize as keyof typeof sizePrices] || 350

    // Add bedroom and bathroom costs
    basePrice += bedroomCosts[data.bedrooms as keyof typeof bedroomCosts] || 0
    basePrice += bathroomCosts[data.bathrooms as keyof typeof bathroomCosts] || 0

    // Add costs for additional services
    if (data.additionalServices && data.additionalServices.length > 0) {
      data.additionalServices.forEach((service) => {
        basePrice += serviceCosts[service] || 0
      })
    }

    // Add cost for pets if applicable
    if (data.pets) {
      basePrice += 25 // Additional fee for pet hair cleaning
    }

    // Round to nearest 10
    return Math.round(basePrice / 10) * 10
  }

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Calculate quote
    const estimatedQuote = calculateQuote(data)
    setQuoteAmount(estimatedQuote)
    setQuoteGenerated(true)

    // In a real application, you would also send this data to your backend
    console.log(data)
  }

  const additionalServices = [
    { id: "carpet-cleaning", label: "Carpet Deep Cleaning" },
    { id: "upholstery-cleaning", label: "Upholstery Cleaning" },
    { id: "window-cleaning", label: "Interior Window Cleaning" },
    { id: "refrigerator-cleaning", label: "Refrigerator Deep Cleaning" },
    { id: "oven-cleaning", label: "Oven Deep Cleaning" },
    { id: "cabinet-cleaning", label: "Cabinet Interior Cleaning" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <ServiceNavigation category="residential" service="deep-cleaning" />
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Get a Deep Cleaning Quote
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Fill out the form below to receive an instant estimate for your deep cleaning service. Our quotes are
              based on the information you provide, but we can always adjust after an in-person assessment if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {!quoteGenerated ? (
              <Card>
                <CardHeader>
                  <CardTitle>Deep Cleaning Service Quote</CardTitle>
                  <CardDescription>
                    Please provide the details below to receive an instant quote for your deep cleaning service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Contact Information</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="(410) 555-1234" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="123 Main St, Towson, MD" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Property Details</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="propertyType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Property Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select property type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="apartment">Apartment/Condo</SelectItem>
                                    <SelectItem value="house">House</SelectItem>
                                    <SelectItem value="townhouse">Townhouse</SelectItem>
                                    <SelectItem value="duplex">Duplex</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="propertySize"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Property Size</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select property size" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="small">Small (up to 1,000 sq ft)</SelectItem>
                                    <SelectItem value="medium">Medium (1,000-2,000 sq ft)</SelectItem>
                                    <SelectItem value="large">Large (2,000-3,000 sq ft)</SelectItem>
                                    <SelectItem value="extra-large">Extra Large (3,000+ sq ft)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="bedrooms"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Number of Bedrooms</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select number of bedrooms" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1">1 Bedroom</SelectItem>
                                    <SelectItem value="2">2 Bedrooms</SelectItem>
                                    <SelectItem value="3">3 Bedrooms</SelectItem>
                                    <SelectItem value="4">4 Bedrooms</SelectItem>
                                    <SelectItem value="5+">5+ Bedrooms</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="bathrooms"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Number of Bathrooms</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select number of bathrooms" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1">1 Bathroom</SelectItem>
                                    <SelectItem value="2">2 Bathrooms</SelectItem>
                                    <SelectItem value="3">3 Bathrooms</SelectItem>
                                    <SelectItem value="4+">4+ Bathrooms</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Preferred Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalServices"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel>Additional Services</FormLabel>
                              <FormDescription>
                                Select any additional services you would like to add to your deep cleaning.
                              </FormDescription>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              {additionalServices.map((service) => (
                                <FormField
                                  key={service.id}
                                  control={form.control}
                                  name="additionalServices"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={service.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(service.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...(field.value || []), service.id])
                                                : field.onChange(field.value?.filter((value) => value !== service.id))
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">{service.label}</FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="pets"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>I have pets in my home</FormLabel>
                              <FormDescription>
                                Let us know if you have pets so our cleaners can be prepared for pet hair and dander.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requests or Notes</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please let us know if you have any special requests or areas that need extra attention."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>Include any specific cleaning requirements or concerns.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        Generate Quote
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Your Deep Cleaning Quote</CardTitle>
                  <CardDescription>Based on the information you provided, here's your estimated quote.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-5xl font-bold">${quoteAmount}</div>
                  <p className="text-muted-foreground">
                    This is an estimate based on the information provided. The final price may vary based on the actual
                    condition and specific requirements of your home.
                  </p>
                  <div className="mt-6 rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-semibold">What's included in your deep cleaning:</h3>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Thorough cleaning of all rooms and surfaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Detailed kitchen and bathroom cleaning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Baseboards, door frames, and window sills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Light fixtures and ceiling fans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Inside cabinets and drawers</span>
                      </li>
                      {(form.getValues("additionalServices") || []).length > 0 && (
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span>
                            Additional services:{" "}
                            {form
                              .getValues("additionalServices")
                              ?.map((id) => additionalServices.find((service) => service.id === id)?.label)
                              ?.join(", ") || ""}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full" size="lg">
                    Book This Service
                  </Button>
                  <Button variant="outline" onClick={() => setQuoteGenerated(false)}>
                    Modify Quote
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied customers have to say about our deep cleaning
              services.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "The deep cleaning service was worth every penny. They got to areas I didn't even know needed
                  cleaning. My home has never looked better!"
                </p>
                <div className="font-semibold">Jennifer Williams</div>
                <div className="text-sm text-muted-foreground">Towson, MD</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "I was amazed at the difference after FreshBay's deep cleaning. They removed years of built-up grime
                  from my kitchen and bathrooms. Highly recommended!"
                </p>
                <div className="font-semibold">Michael Thompson</div>
                <div className="text-sm text-muted-foreground">Towson, MD</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "I scheduled a deep cleaning before hosting a family gathering, and I'm so glad I did. My guests
                  couldn't stop complimenting how clean and fresh my home looked and smelled."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Towson, MD</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

