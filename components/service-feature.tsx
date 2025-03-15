import { CheckCircle } from "lucide-react"

interface ServiceFeatureProps {
  text: string
}

export function ServiceFeature({ text }: ServiceFeatureProps) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <span>{text}</span>
    </div>
  )
}

