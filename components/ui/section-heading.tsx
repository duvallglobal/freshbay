import { cn } from "@/lib/utils"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  as?: "h1" | "h2" | "h3"
}

export function SectionHeading({
  title,
  description,
  centered = true,
  className,
  titleClassName,
  descriptionClassName,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as

  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <RevealOnScroll delay={100}>
        <Heading className={cn("text-3xl font-bold tracking-tight text-foreground sm:text-4xl", titleClassName)}>
          <span className="relative">
            {title}
            <span className="absolute -bottom-1 left-0 h-1 w-12 rounded-full bg-primary" />
          </span>
        </Heading>
      </RevealOnScroll>

      {description && (
        <RevealOnScroll delay={200}>
          <p className={cn("mx-auto mt-4 max-w-2xl text-muted-foreground", descriptionClassName)}>{description}</p>
        </RevealOnScroll>
      )}
    </div>
  )
}

