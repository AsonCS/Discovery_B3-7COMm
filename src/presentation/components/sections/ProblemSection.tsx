import type { ProblemContent } from "@/domain/entities/Content"
import { Container } from "@/shared/design-system/components/bkp/Container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/design-system/components/bkp/Card"

interface ProblemSectionProps {
  data: ProblemContent
}

export function ProblemSection({ data }: ProblemSectionProps) {
  return (
    <section id="problema" className="py-20 bg-muted/30">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">{data.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.problems.map((problem, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{problem.icon}</div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{problem.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
