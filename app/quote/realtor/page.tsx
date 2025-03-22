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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  companyName: z.string().optional(),
  address: z.string().min(5, { message: "Please enter the property address." }),
  propertyType: z.string({ required_error: "Please select a property type." }),
  propertySize: z.string({ required_error: "Please select the property size." }),
  propertyStatus: z.string({ required_error: "Please select the property status." }),
  serviceType: z.string({ required_error: "Please select a service type." }),
  timeline: z.string({ required_error: "Please select a timeline." }),
  date: z.date({ required_error: "Please select a preferred date." }),
  propertyCount: z.string().optional(),
  specialConditions: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
})

export default function RealtorQuotePage() {
  const [quoteGenerated, setQuoteGenerated] = useState(false)
  const [quoteAmount, setQuoteAmount] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      address: "",
      propertyCount: "1",
      specialRequests: "",
      specialConditions: [],
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const quote = calculateQuote(data)
      setQuoteAmount(quote)

      // Send form data to webhook
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          quoteAmount: quote,
          formType: 'realtor-quote',
          date: data.date.toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setQuoteGenerated(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error appropriately
    }
  }

  function calculateQuote(data: z.infer<typeof formSchema>) {
    // Base prices for different service types
    const servicePrices = {
      "turnkey-service": 300,
      "staging-cleaning": 250,
      "post-construction": 400,
      "property-preparation": 275,
      "end-of-tenancy": 325,
    }

    // Size multipliers
    const sizeMultipliers = {
      small: 1,
      medium: 1.5,
      large: 2,
      "extra-large": 2.5,
    }

    // Property type adjustments
    const propertyAdjustments = {
      "single-family": 0,
      "multi-unit": 100,
      condo: -50,
      commercial: 200,
    }

    // Property status adjustments
    const statusAdjustments = {
      vacant: 0,
      occupied: 50,
      furnished: 75,
      renovation: 100,
    }

    // Timeline adjustments
    const timelineAdjustments = {
      standard: 0,
      urgent: 100,
      flexible: -50,
    }

    // Special conditions costs
    const specialConditionsCosts = {
      "heavy-cleaning": 150,
      "pet-damage": 100,
      "smoke-damage": 200,
      "water-damage": 250,
    }

    // Property count multiplier
    const propertyCountMultiplier = (count: string) => {
      const numProperties = Number.parseInt(count) || 1
      if (numProperties === 1) return 1
      if (numProperties <= 3) return 0.95
      if (numProperties <= 5) return 0.9
      if (numProperties <= 10) return 0.85
      return 0.8
    }

    // Calculate base price
    let basePrice = servicePrices[data.serviceType as keyof typeof servicePrices] || 300

    // Apply size multiplier
    basePrice *= sizeMultipliers[data.propertySize as keyof typeof sizeMultipliers] || 1

    // Add property type adjustment
    basePrice += propertyAdjustments[data.propertyType as keyof typeof propertyAdjustments] || 0

    // Add property status adjustment
    basePrice += statusAdjustments[data.propertyStatus as keyof typeof statusAdjustments] || 0

    // Add timeline adjustment
    basePrice += timelineAdjustments[data.timeline as keyof typeof timelineAdjustments] || 0

    // Add costs for special conditions
    if (data.specialConditions && data.specialConditions.length > 0) {
      data.specialConditions.forEach((condition) => {
        basePrice += specialConditionsCosts[condition as keyof typeof specialConditionsCosts] || 0
      })
    }

    // Apply property count multiplier if applicable
    if (data.propertyCount && data.propertyCount !== "1") {
      basePrice *= propertyCountMultiplier(data.propertyCount)
    }

    // Round to nearest 10
    return Math.round(basePrice / 10) * 10
  }

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const estimatedQuote = calculateQuote(data)
      setQuoteAmount(estimatedQuote)

      // Send form data to webhook
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          quoteAmount: estimatedQuote,
          formType: 'realtor-quote',
          date: data.date.toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setQuoteGenerated(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error appropriately - you might want to show an error message to the user
    }
  }

  const specialConditions = [
    { id: "heavy-cleaning", label: "Heavy Cleaning Needed" },
    { id: "pet-damage", label: "Pet Damage" },
    { id: "smoke-damage", label: "Smoke Damage" },
    { id: "water-damage", label: "Water Damage" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
              Realtor & Landlord Cleaning Quote
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Fill out the form below to receive an instant estimate for your property cleaning needs. Our quotes are
              based on the information you provide, but we can always adjust after an in-person assessment if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {!quoteGenerated ? (
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Realtor & Landlord Cleaning Quote</CardTitle>
                  <CardDescription className="text-white/70">
                    Please provide the details below to receive an instant quote for your property cleaning service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Contact Information</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    {...field}
                                    className="bg-white/10 text-white border-white/20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Company Name (Optional)</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="ABC Realty"
                                    {...field}
                                    className="bg-white/10 text-white border-white/20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="john@example.com"
                                    {...field}
                                    className="bg-white/10 text-white border-white/20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="(410) 555-1234"
                                    {...field}
                                    className="bg-white/10 text-white border-white/20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Property Details</h3>
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Property Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="123 Main St, Towson, MD"
                                  {...field}
                                  className="bg-white/10 text-white border-white/20"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="propertyType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Property Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
                                      <SelectValue placeholder="Select property type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="single-family">Single Family Home</SelectItem>
                                    <SelectItem value="multi-unit">Multi-Unit Building</SelectItem>
                                    <SelectItem value="condo">Condo/Apartment</SelectItem>
                                    <SelectItem value="commercial">Commercial Property</SelectItem>
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
                                <FormLabel className="text-white">Property Size</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
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
                            name="propertyStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Property Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
                                      <SelectValue placeholder="Select property status" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="vacant">Vacant</SelectItem>
                                    <SelectItem value="occupied">Occupied</SelectItem>
                                    <SelectItem value="furnished">Furnished/Staged</SelectItem>
                                    <SelectItem value="renovation">Post-Renovation</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="propertyCount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Number of Properties</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
                                      <SelectValue placeholder="Select number of properties" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1">1 Property</SelectItem>
                                    <SelectItem value="2-3">2-3 Properties</SelectItem>
                                    <SelectItem value="4-5">4-5 Properties</SelectItem>
                                    <SelectItem value="6-10">6-10 Properties</SelectItem>
                                    <SelectItem value="10+">10+ Properties</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription className="text-white/70">
                                  For property managers with multiple properties (discounts available).
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Service Details</h3>
                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Service Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                                    <SelectValue placeholder="Select a service type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="turnkey-service">Turnkey Service</SelectItem>
                                  <SelectItem value="staging-cleaning">Staging Cleaning</SelectItem>
                                  <SelectItem value="post-construction">Post-Construction Cleaning</SelectItem>
                                  <SelectItem value="property-preparation">Property Preparation</SelectItem>
                                  <SelectItem value="end-of-tenancy">End-of-Tenancy Cleaning</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Timeline</FormLabel>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="urgent" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-white">Urgent (24-48 hours)</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="standard" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-white">Standard (3-5 days)</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="flexible" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-white">Flexible (1+ week)</FormLabel>
                                </FormItem>
                              </RadioGroup>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-white">Preferred Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal bg-white/10 text-white border-white/20",
                                        !field.value && "text-white/70",
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
                          name="specialConditions"
                          render={() => (
                            <FormItem>
                              <div className="mb-4">
                                <FormLabel className="text-white">Special Conditions</FormLabel>
                                <FormDescription className="text-white/70">
                                  Select any special conditions that apply (additional charges may apply).
                                </FormDescription>
                              </div>
                              <div className="grid gap-4 sm:grid-cols-2">
                                {specialConditions.map((condition) => (
                                  <FormField
                                    key={condition.id}
                                    control={form.control}
                                    name="specialConditions"
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={condition.id}
                                          className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(condition.id)}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([...(field.value || []), condition.id])
                                                  : field.onChange(
                                                      field.value?.filter((value) => value !== condition.id),
                                                    )
                                              }}
                                              className="border-white/20 data-[state=checked]:bg-secondary data-[state=checked]:text-primary"
                                            />
                                          </FormControl>
                                          <FormLabel className="font-normal text-white">{condition.label}</FormLabel>
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
                          name="specialRequests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Special Requests or Notes</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please let us know if you have any special requests or areas that need extra attention."
                                  className="resize-none bg-white/10 text-white border-white/20"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription className="text-white/70">
                                Include any specific cleaning requirements or concerns.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90">
                        Generate Quote
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card className="service-card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-white text-2xl">Your Realtor/Landlord Cleaning Quote</CardTitle>
                  <CardDescription className="text-white/70">
                    Based on the information you provided, here's your estimated quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-5xl font-bold text-secondary">${quoteAmount}</div>
                  <p className="text-white/70">
                    This is an estimate based on the information provided. The final price may vary based on the actual
                    condition and specific requirements of your property.
                  </p>
                  <div className="mt-6 rounded-lg bg-white/10 p-4">
                    <h3 className="mb-2 font-semibold text-white">What's included in your cleaning:</h3>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-white">Professional property cleaning by our trained staff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-white">All cleaning supplies and equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-white">Eco-friendly cleaning products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-white">100% satisfaction guarantee</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full bg-secondary text-primary hover:bg-secondary/90" size="lg">
                    Book This Service
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setQuoteGenerated(false)}
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Modify Quote
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

