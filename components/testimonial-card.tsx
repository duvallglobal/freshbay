import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} />
          ))}
        </div>
        <p className="mb-4 italic">"{quote}"</p>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">{location}</div>
      </CardContent>
    </Card>
  )
}

