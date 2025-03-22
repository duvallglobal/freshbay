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
  address: z.string().min(5, { message: "Please enter your full address." }),
  propertyType: z.string({ required_error: "Please select a property type." }),
  propertySize: z.string({ required_error: "Please select a property size." }),
  bedrooms: z.string({ required_error: "Please select the number of bedrooms." }),
  bathrooms: z.string({ required_error: "Please select the number of bathrooms." }),
  serviceType: z.string({ required_error: "Please select a service type." }),
  frequency: z.string().optional(),
  date: z.date({ required_error: "Please select a preferred date." }),
  pets: z.boolean().default(false).optional(),
  specialAreas: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
})

export default function ResidentialQuotePage() {
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
      specialAreas: [],
      pets: false,
    },
  })

  function calculateQuote(data: z.infer<typeof formSchema>) {
    // Base prices for different service types
    const servicePrices = {
      "deep-cleaning": 50,
      "recurring-cleaning": 25,
      "move-in-out": 100,
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
      apartment: 10,
      condo: 20,
      house: 20,
      townhouse: 20,
    }

    // Bedroom and bathroom costs
    const bedroomCosts = {
      "1": 25,
      "2": 50,
      "3": 75,
      "4": 100,
      "5+": 125,
    }

    const bathroomCosts = {
      "1": 0,
      "2": 30,
      "3": 60,
      "4+": 90,
    }

    // Frequency discounts
    const frequencyDiscounts = {
      "one-time": 1,
      weekly: 0.7,
      "bi-weekly": 0.8,
      monthly: 0.9,
    }

    // Special areas costs
    const specialAreasCosts = {
      basement: 50,
      garage: 80,
      patio: 30,
      windows: 60,
    }

    // Calculate base price
    let basePrice = servicePrices[data.serviceType as keyof typeof servicePrices] || 30

    // Apply size multiplier
    basePrice *= sizeMultipliers[data.propertySize as keyof typeof sizeMultipliers] || 1

    // Add property type adjustment
    basePrice += propertyAdjustments[data.propertyType as keyof typeof propertyAdjustments] || 0

    // Add bedroom and bathroom costs
    basePrice += bedroomCosts[data.bedrooms as keyof typeof bedroomCosts] || 0
    basePrice += bathroomCosts[data.bathrooms as keyof typeof bathroomCosts] || 0

    // Apply frequency discount if applicable
    if (data.frequency && data.serviceType === "recurring-cleaning") {
      basePrice *= frequencyDiscounts[data.frequency as keyof typeof frequencyDiscounts] || 1
    }

    // Add costs for special areas
    if (data.specialAreas && data.specialAreas.length > 0) {
      data.specialAreas.forEach((area) => {
        basePrice += specialAreasCosts[area as keyof typeof specialAreasCosts] || 0
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

  const specialAreas = [
    { id: "basement", label: "Basement" },
    { id: "garage", label: "Garage" },
    { id: "patio", label: "Patio/Deck" },
    { id: "windows", label: "Interior Windows/Window Seals" },
  ]
return (
    <div className="flex min-h-screen flex-col">
      {/* Hidden form for Netlify */}
      <form name="residential-quote" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="residential-quote" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <input type="text" name="address" />
        <input type="text" name="propertyType" />
        <input type="text" name="propertySize" />
        <input type="text" name="bedrooms" />
        <input type="text" name="bathrooms" />
        <input type="text" name="serviceType" />
        <input type="text" name="frequency" />
        <input type="date" name="date" />
        <input type="checkbox" name="pets" />
        <input type="text" name="specialAreas" />
        <textarea name="specialRequests"></textarea>
      </form>
      
      {/* Hero Section */}
      <section className="bg-primary py-16 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
              Residential Cleaning Quote
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Fill out the form below to receive an instant estimate for your residential cleaning needs. Our quotes are
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
                  <CardTitle className="text-white text-2xl">Residential Cleaning Quote</CardTitle>
                  <CardDescription className="text-white/70">
                    Please provide the details below to receive an instant quote for your residential cleaning service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Contact Information</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Name Here"
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
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="your@email.com"
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
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Address</FormLabel>
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
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Property Details</h3>
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
                                    <SelectItem value="apartment">Apartment</SelectItem>
                                    <SelectItem value="condo">Condo</SelectItem>
                                    <SelectItem value="house">House</SelectItem>
                                    <SelectItem value="townhouse">Townhouse</SelectItem>
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
                            name="bedrooms"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Number of Bedrooms</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
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
                                <FormLabel className="text-white">Number of Bathrooms- Round up for Half Baths</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
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
                                  <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                                  <SelectItem value="recurring-cleaning">Recurring Cleaning</SelectItem>
                                  <SelectItem value="move-in-out">Move-in/Move-out Cleaning</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {form.watch("serviceType") === "recurring-cleaning" && (
                          <FormField
                            control={form.control}
                            name="frequency"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-white">Service Frequency</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="weekly" />
                                      </FormControl>
                                      <FormLabel className="font-normal text-white">Weekly</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="bi-weekly" />
                                      </FormControl>
                                      <FormLabel className="font-normal text-white">Bi-weekly</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="monthly" />
                                      </FormControl>
                                      <FormLabel className="font-normal text-white">Monthly</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="one-time" />
                                      </FormControl>
                                      <FormLabel className="font-normal text-white">One-time</FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}

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
                          name="specialAreas"
                          render={() => (
                            <FormItem>
                              <div className="mb-4">
                                <FormLabel className="text-white">Special Areas</FormLabel>
                                <FormDescription className="text-white/70">
                                  Select any special areas that need cleaning (additional charges may apply).
                                </FormDescription>
                              </div>
                              <div className="grid gap-4 sm:grid-cols-2">
                                {specialAreas.map((area) => (
                                  <FormField
                                    key={area.id}
                                    control={form.control}
                                    name="specialAreas"
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={area.id}
                                          className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(area.id)}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([...(field.value || []), area.id])
                                                  : field.onChange(field.value?.filter((value) => value !== area.id))
                                              }}
                                              className="border-white/20 data-[state=checked]:bg-secondary data-[state=checked]:text-primary"
                                            />
                                          </FormControl>
                                          <FormLabel className="font-normal text-white">{area.label}</FormLabel>
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
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-white/20 p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-white/20 data-[state=checked]:bg-secondary data-[state=checked]:text-primary"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-white">I have pets in my home</FormLabel>
                                <FormDescription className="text-white/70">
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
                  <CardTitle className="text-white text-2xl">Your Residential Cleaning Quote</CardTitle>
                  <CardDescription className="text-white/70">
                    Based on the information you provided, here's your estimated quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-5xl font-bold text-secondary">${quoteAmount}</div>
                  <p className="text-white/70">
                    This is an estimate based on the information provided. The final price may vary based on the actual
                    condition and specific requirements of your home.
                  </p>
                 <div className="mt-6 rounded-lg bg-white/10 p-4">
    <h3 className="mb-2 font-semibold text-white">What's included in your cleaning:</h3>
    <ul className="space-y-2 text-left">
      <li className="flex items-start gap-2">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
        <span className="text-white">Professional Cleaning by Our Trained Staff</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
        <span className="text-white">All Cleaning Supplies and Equipment</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
        <span className="text-white">Thurough Cleaning Service Every Time</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
        <span className="text-white">100% Satisfaction Guarantee!</span>
      </li>
    </ul>
  </div>
</CardContent>
<CardFooter className="flex flex-col gap-4">
  <Button
    className="w-full bg-secondary text-primary hover:bg-secondary/90"
    size="lg"
    onClick={() => {
      // Store quote data in localStorage for the booking form
      const data = form.getValues();
      localStorage.setItem('quoteData', JSON.stringify({
        ...data,
        quoteAmount: quoteAmount,
        quoteId: Date.now().toString(),
        quoteDate: new Date().toISOString()
      }));

      // Redirect to booking page
      window.location.href = '/book?fromQuote=true';
    }}
  >
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

