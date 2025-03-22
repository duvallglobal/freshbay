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
      ],
      link: "/services/commercial/office-space"
    },
    {
      title: "Retail Space Cleaning",
      description: "Create an inviting shopping environment with our specialized retail cleaning services.",
      items: [
        "Display area dusting and polishing",
        "Floor cleaning and maintenance",
        "Restroom sanitization",
        "Entrance and window cleaning"
      ],
      link: "/services/commercial"
    },
    {
      title: "Industrial Cleaning",
      description: "Maintain a safe and clean industrial environment with our heavy-duty cleaning services.",
      items: [
        "Warehouse cleaning",
        "Equipment cleaning",
        "Loading dock maintenance",
        "Industrial floor care"
      ],
      link: "/services/commercial"
    }
  ];

  const specializedServices = [
    {
      title: "Art Studio Cleaning",
      description: "Specialized cleaning for creative spaces that respects your artwork and materials.",
      link: "/services/commercial/art-studios"
    },
    {
      title: "Massage Parlor Cleaning",
      description: "Hygienic cleaning for wellness spaces with attention to sanitization and ambiance.",
      link: "/services/commercial/massage-parlors"
    },
    {
      title: "Janitorial Services",
      description: "Comprehensive facility maintenance for businesses of all sizes.",
      link: "/services/commercial/janitorial-services"
    }
  ];

  return (
    <ServiceLayout
      category="commercial"
      service="commercial cleaning"
      title="Commercial Cleaning Services"
      description="FreshBay Cleaning Co. provides professional commercial cleaning services in Towson, Maryland. From office spaces to retail stores and industrial facilities, we keep your business spotless and professional."
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center text-secondary mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Commercial Cleaning Solutions
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {commercialServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card group cursor-pointer h-full bg-white/10 hover:bg-white/15">
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-6 group-hover:text-white transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link 
                    href={service.link}
                    className="text-secondary hover:text-white transition-colors flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-3xl font-bold text-center text-secondary mt-20 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Specialized Commercial Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {specializedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.link} className="block">
                <div className="glass-card group cursor-pointer h-full bg-white/10 hover:bg-white/15 text-center">
                  <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-6 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  <Button 
                    variant="secondary"
                    className="group mt-4"
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            size="lg"
            asChild
            className="rounded-full text-base group transition-all duration-300 hover:scale-105 shadow-glow-strong"
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
        </motion.div>

        <div className="mt-24">
          <EnhancedCTASection
            title="Ready to Transform Your Business Space?"
            description="Get in touch with us today for a free quote and consultation. Our commercial cleaning experts are ready to help you maintain a pristine business environment."
            primaryButtonText="Get a Free Quote"
            primaryButtonLink="/quote/commercial"
            secondaryButtonText="Learn More"
            secondaryButtonLink="/services"
          />
        </div>
      </div>
    </ServiceLayout>
  )
}