import type { FutureContent } from "@/domain/entities/Content"
import { Container } from "@/shared/design-system/components/Container"

interface FutureSectionProps {
  data: FutureContent
}

export function FutureSection({ data }: FutureSectionProps) {
  return (
    <section id="futuro" className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">{data.title}</h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{data.description}</p>

            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <p className="text-lg leading-relaxed">{data.vision}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
