"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  date: z.date({ required_error: "Please select a date." }),
  timeframe: z.string({ required_error: "Please select a time frame." }),
  serviceType: z.string({ required_error: "Please select a service type." }),
  address: z.string().min(5, { message: "Please enter your address." }),
  specialInstructions: z.string().optional(),
})

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      specialInstructions: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'booking',
          date: data.date.toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit booking')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting booking:', error)
      // Handle error appropriately
    }
  }

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
            {!submitted ? (
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Book Your Service</CardTitle>
                  <CardDescription className="text-white/70">
                    Please provide your details and preferred time for the service.
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
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@example.com"
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
                                    placeholder="(123) 456-7890"
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
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Service Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="residential">Residential Cleaning</SelectItem>
                                    <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                                    <SelectItem value="realtor">Realtor Services</SelectItem>
                                  </SelectContent>
                                </Select>
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
                              <FormLabel className="text-white">Service Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="123 Main St, City, State, ZIP"
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
                            name="date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel className="text-white">Preferred Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={"bg-white/10 text-white border-white/20 w-full pl-3 text-left font-normal"}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date < new Date() || date < new Date("1900-01-01")
                                      }
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
                            name="timeframe"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Preferred Time</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 text-white border-white/20">
                                      <SelectValue placeholder="Select a time frame" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                                    <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                                    <SelectItem value="evening">Evening (4:00 PM - 8:00 PM)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="specialInstructions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Special Instructions</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any special instructions or requirements..."
                                  {...field}
                                  className="bg-white/10 text-white border-white/20 min-h-[100px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Book Service
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Booking Submitted!</CardTitle>
                  <CardDescription className="text-white/70">
                    Thank you for booking with FreshBay Cleaning Co. We'll contact you shortly to confirm your appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <CheckCircle className="h-16 w-16 text-secondary" />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
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

