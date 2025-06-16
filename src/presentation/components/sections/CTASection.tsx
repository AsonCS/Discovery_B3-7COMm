import type { CTAContent } from "@/domain/entities/Content"
import { Container } from "@/shared/design-system/components/Container"
import { Button } from "@/shared/design-system/components/Button"

interface CTASectionProps {
  data: CTAContent
}

export function CTASection({ data }: CTASectionProps) {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">{data.title}</h2>

          <p className="text-lg md:text-xl opacity-90 leading-relaxed">{data.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="min-w-[200px] bg-white text-primary hover:bg-white/90">
              {data.primaryCta.text}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary"
            >
              {data.secondaryCta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
