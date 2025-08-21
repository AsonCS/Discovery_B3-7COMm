import type { HeroContent } from '@/domain/entities/Content'
import { Container } from '@/shared/design-system/components/bkp/Container'
import { Button } from '@/shared/design-system/components/Button'
import Link from 'next/link'

interface HeroSectionProps {
    data: HeroContent
}

export function HeroSection({
    data
}: HeroSectionProps) {
    return (
        <section
            style={{
                backgroundImage:
                    'url(/image/banner_original.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            className="relative py-20 lg:py-32"
        >
            <Container>
                <div className="max-w-4xl mx-auto text-center py-4 space-y-8 bg-gradient-to-br from-transparent via-white/80 to-white/100"
                style={{
                    backgroundImage:
                    'linear-gradient(to top left, var(--secondary), var(--secondary--20))'
                }}>
                    <div className="space-y-4">
                        <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            {data.title}
                        </h1>
                        <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-medium text-primary">
                            {data.subtitle}
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        {data.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/parceiro/solicitar">
                            <Button label="Crie sua Campanha de Empréstimo" />
                        </Link>
                        <Link href="/proposta">
                            <Button
                                label="Saiba Mais"
                                variant="primary-text"
                            />
                        </Link>
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
