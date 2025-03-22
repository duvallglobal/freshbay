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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  companyphone: z.string().min(2,  { message: "Please enter a valid phone number." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Please enter your business address." }),
  businessType: z.string({ required_error: "Please select a business type." }),
  squareFootage: z.string({ required_error: "Please select the square footage." }),
  serviceType: z.string({ required_error: "Please select a service type." }),
  frequency: z.string({ required_error: "Please select a cleaning frequency." }),
  employeeCount: z.string({ required_error: "Please select the number of employees." }),
  date: z.date({ required_error: "Please select a preferred date." }),
  operatingHours: z.string().optional(),
  specialAreas: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
})

export default function CommercialQuotePage() {
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
      operatingHours: "",
      specialRequests: "",
      specialAreas: [],
    },
  })

  function calculateQuote(data: z.infer<typeof formSchema>) {
    // Base prices for different service types
    const servicePrices = {
      "office-cleaning": 300,
      "janitorial-services": 350,
      "specialized-cleaning": 400,
    }

    // Size multipliers based on square footage
    const sizeMultipliers = {
      "under-1000": 1,
      "1000-2500": 1.5,
      "2500-5000": 2,
      "5000-10000": 3,
      "over-10000": 4,
    }

    // Business type adjustments
    const businessAdjustments = {
      office: 0,
      retail: 50,
      restaurant: 150,
      medical: 200,
      industrial: 100,
      other: 50,
    }

    // Employee count adjustments (more employees = more mess)
    const employeeAdjustments = {
      "1-5": 0,
      "6-15": 50,
      "16-30": 100,
      "31-50": 150,
      "50+": 200,
    }

    // Frequency discounts
    const frequencyDiscounts = {
      daily: 0.7,
      weekly: 0.8,
      "bi-weekly": 0.9,
      monthly: 1,
      "one-time": 1.2,
    }

    // Special areas costs
    const specialAreasCosts = {
      kitchen: 75,
      restrooms: 100,
      lobby: 50,
      conference: 50,
    }

    // Calculate base price
    let basePrice = servicePrices[data.serviceType as keyof typeof servicePrices] || 300

    // Apply size multiplier
    basePrice *= sizeMultipliers[data.squareFootage as keyof typeof sizeMultipliers] || 1

    // Add business type adjustment
    basePrice += businessAdjustments[data.businessType as keyof typeof businessAdjustments] || 0

    // Add employee count adjustment
    basePrice += employeeAdjustments[data.employeeCount as keyof typeof employeeAdjustments] || 0

    // Apply frequency discount
    basePrice *= frequencyDiscounts[data.frequency as keyof typeof frequencyDiscounts] || 1

    // Add costs for special areas
    if (data.specialAreas && data.specialAreas.length > 0) {
      data.specialAreas.forEach((area) => {
        basePrice += specialAreasCosts[area as keyof typeof specialAreasCosts] || 0
      })
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
    { id: "kitchen", label: "Kitchen/Break Room" },
    { id: "restrooms", label: "Restrooms" },
    { id: "lobby", label: "Lobby/Reception" },
    { id: "conference", label: "Conference Rooms" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
              Commercial Cleaning Quote
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Fill out the form below to receive an instant estimate for your commercial cleaning needs. Our quotes are
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
                  <CardTitle className="text-white text-2xl">Commercial Cleaning Quote</CardTitle>
                  <CardDescription className="text-white/70">
                    Please provide the details below to receive an instant quote for your commercial cleaning service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" name="commercial-quote" netlify>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Contact Information</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Contact Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Name"
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
                                <FormLabel className="text-white">Your Company Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Company"
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
                                    placeholder="your@email.com"
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
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Business Address</FormLabel>
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

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Business Details</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="businessType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Business Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
                                      <SelectValue placeholder="Select business type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="office">Office</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="restaurant">Restaurant</SelectItem>
                                    <SelectItem value="medical">Art Studio/Massage Parlor</SelectItem>
                                    <SelectItem value="industrial">Industrial</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="squareFootage"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Square Footage</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
                                      <SelectValue placeholder="Select square footage" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="under-1000">Under 1,000 sq ft</SelectItem>
                                    <SelectItem value="1000-2500">1,000 - 2,500 sq ft</SelectItem>
                                    <SelectItem value="2500-5000">2,500 - 5,000 sq ft</SelectItem>
                                    <SelectItem value="5000-10000">5,000 - 10,000 sq ft</SelectItem>
                                    <SelectItem value="over-10000">Over 10,000 sq ft</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="employeeCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Number of Employees</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                                    <SelectValue placeholder="Select number of employees" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-5">1-5 employees</SelectItem>
                                  <SelectItem value="6-15">6-15 employees</SelectItem>
                                  <SelectItem value="16-30">16-30 employees</SelectItem>
                                  <SelectItem value="31-50">31-50 employees</SelectItem>
                                  <SelectItem value="50+">50+ employees</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="operatingHours"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Operating Hours</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Mon-Fri 9am-5pm"
                                  {...field}
                                  className="bg-white/10 text-white border-white/20"
                                />
                              </FormControl>
                              <FormDescription className="text-white/70">
                                This helps us schedule cleaning at the most convenient time for your business.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
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
                                  <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                                  <SelectItem value="janitorial-services">Janitorial Services</SelectItem>
                                  <SelectItem value="specialized-cleaning">Specialized Cleaning</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="frequency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Service Frequency</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                                    <SelectValue placeholder="Select service frequency" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="daily">Daily</SelectItem>
                                  <SelectItem value="weekly">Weekly</SelectItem>
                                  <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                                  <SelectItem value="monthly">Monthly</SelectItem>
                                  <SelectItem value="one-time">One-time</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-white">Preferred Start Date</FormLabel>
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
                  <CardTitle className="text-white text-2xl">Your Commercial Cleaning Quote</CardTitle>
                  <CardDescription className="text-white/70">
                    Based on the information you provided, here's your estimated quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-5xl font-bold text-secondary">${quoteAmount}</div>
                  <p className="text-white/70">
                    This is an estimate based on the information provided. The final price may vary based on the actual
                    condition and specific requirements of your business.
                  </p>
                  <div className="mt-6 rounded-lg bg-white/10 p-4">
                    <h3 className="mb-2 font-semibold text-white">What's included in your cleaning:</h3>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-white">Professional commercial cleaning by our trained staff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-white">All cleaning supplies and equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-white">Commercial-grade cleaning products</span>
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

