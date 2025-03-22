"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceLayout } from "@/components/service-layout"
import { motion } from "framer-motion"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function CommercialServicesPage() {
  const commercialServices = [
    {
      title: "Office Cleaning",
      description: "Keep your workspace pristine and professional with our comprehensive office cleaning services.",
      items: [
        "Daily or weekly cleaning schedules",
        "Deep cleaning of workstations and common areas",
        "Kitchen and break room sanitization",
        "Window cleaning and floor maintenance"
      ]
    },
    {
      title: "Retail Space Cleaning",
      description: "Create an inviting shopping environment with our specialized retail cleaning services.",
      items: [
        "Display area dusting and polishing",
        "Floor cleaning and maintenance",
        "Restroom sanitization",
        "Entrance and window cleaning"
      ]
    },
    {
      title: "Industrial Cleaning",
      description: "Maintain a safe and clean industrial environment with our heavy-duty cleaning services.",
      items: [
        "Warehouse cleaning",
        "Equipment cleaning",
        "Loading dock maintenance",
        "Industrial floor care"
      ]
    }
  ];

  return (
    <ServiceLayout
      category="commercial"
      service="commercial cleaning"
      title="Commercial Cleaning Services"
      description="FreshBay Cleaning Co. provides professional commercial cleaning services in Towson, Maryland. From office spaces to art studios, we keep your business spotless and professional."
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {commercialServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card group cursor-pointer h-full">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 group-hover:text-white/90 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="rounded-full text-base group transition-all duration-300 hover:scale-105"
            variant="secondary"
          >
            <Link href="/quote/commercial">
              <span className="flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full bg-white/10 text-base text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Link href="/book">Book Now</Link>
          </Button>
        </div>

        <EnhancedCTASection
          title="Ready to Transform Your Business Space?"
          description="Get in touch with us today for a free quote and consultation."
          primaryButtonText="Get a Free Quote"
          primaryButtonLink="/quote/commercial"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/about"
        />
      </div>
    </ServiceLayout>
  )
}
