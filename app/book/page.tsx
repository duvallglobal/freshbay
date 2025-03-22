"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

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

export default function BookPage(): React.ReactElement {
  const [submitted, setSubmitted] = useState(false)

  const [quoteData, setQuoteData] = useState<any>(null)

  // Load quote data from localStorage if coming from quote page
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('fromQuote')) {
      const storedQuoteData = localStorage.getItem('quoteData')
      if (storedQuoteData) {
        setQuoteData(JSON.parse(storedQuoteData))
      }
    }
  }, [])

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
      const bookingData = quoteData ? {
        ...data,
        formType: 'quote-booking',
        quoteId: quoteData.quoteId,
        quoteAmount: quoteData.quoteAmount,
        quoteDate: quoteData.quoteDate,
      } : {
        ...data,
        formType: 'direct-booking',
      }

      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
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
            {submitted ? (
              <Card className="service-card">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-white text-2xl">Booking Confirmed!</CardTitle>
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
            ) : (
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
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

