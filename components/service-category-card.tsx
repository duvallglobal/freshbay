import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCategoryCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  category?: "residential" | "commercial" | "realtor"
}

export function ServiceCategoryCard({
  title,
  description,
  imageSrc,
  href,
  category = "residential",
}: ServiceCategoryCardProps) {
  return (
    <div className="service-card group">
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <Image
          src={imageSrc || "/placeholder.svg?height=600&width=800"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/90 mb-6">{description}</p>
      <div className="flex gap-4">
        <Button asChild variant="secondary" className="flex-1 group">
          <Link href={href}>
            <span className="flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Button>
        <Button asChild variant="outline" className="flex-1 bg-white/10 text-white border-white/20 hover:bg-white/20">
          <Link href={`/quote/${category}`}>Get Quote</Link>
        </Button>
      </div>
    </div>
  )
}

