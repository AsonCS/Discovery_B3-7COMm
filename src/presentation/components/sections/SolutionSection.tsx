import type { SolutionContent } from "@/domain/entities/Content"
import { Container } from "@/shared/design-system/components/bkp/Container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/design-system/components/bkp/Card"

interface SolutionSectionProps {
  data: SolutionContent
}

export function SolutionSection({ data }: SolutionSectionProps) {
  return (
    <section id="solucao" className="py-20">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">{data.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">Exemplos de Uso:</h4>
                  <ul className="space-y-2">
                    {feature.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start space-x-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
