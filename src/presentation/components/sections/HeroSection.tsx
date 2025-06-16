import type { HeroContent } from "@/domain/entities/Content"
import { Container } from "@/shared/design-system/components/Container"
import { Button } from "@/shared/design-system/components/Button"

interface HeroSectionProps {
  data: HeroContent
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">{data.title}</h1>
            <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-medium text-primary">{data.subtitle}</h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[200px]">
              {data.ctaText}
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Assistir Demo
            </Button>
          </div>
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>
    </section>
  )
}
