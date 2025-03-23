import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServiceNavigationProps {
  category: "residential" | "commercial" | "realtor"
  service?: string
}

export function ServiceNavigation({ category, service }: ServiceNavigationProps) {
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "residential":
        return "Residential"
      case "commercial":
        return "Commercial"
      case "realtor":
        return "Realtor/Landlord"
      default:
        return cat
    }
  }

  const formatServiceName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="bg-footer py-4 pt-6 relative mt-24 mt-24 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-white/90">
          <Link href="/" className="hover:text-secondary transition-colors duration-200">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/services" className="hover:text-secondary transition-colors duration-200">
            Services
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href={`/services/${category}`} className="hover:text-secondary transition-colors duration-200">
            {getCategoryLabel(category)}
          </Link>
          {service && (
            <>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-secondary">{formatServiceName(service)}</span>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}

