import Link from "next/link"
import { ArrowRight, Building, Key, Repeat, Settings, Sparkles, Truck } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "key":
        return <Key className="h-10 w-10 text-primary" />
      case "truck":
        return <Truck className="h-10 w-10 text-primary" />
      case "sparkles":
        return <Sparkles className="h-10 w-10 text-primary" />
      case "repeat":
        return <Repeat className="h-10 w-10 text-primary" />
      case "building":
        return <Building className="h-10 w-10 text-primary" />
      case "settings":
        return <Settings className="h-10 w-10 text-primary" />
      default:
        return <Sparkles className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Card className="flex h-full flex-col border-none shadow-md transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">{getIcon()}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="w-full justify-between">
          <Link href={href}>
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

