import type { BenefitsContent } from "@/domain/entities/Content"
import { Container } from "@/shared/design-system/components/bkp/Container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/design-system/components/bkp/Card"

interface BenefitsSectionProps {
  data: BenefitsContent
}

export function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">{data.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
