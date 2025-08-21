import type { CTAContent } from '@/domain/entities/Content'
import { Container } from '@/shared/design-system/components/bkp/Container'
import { Button } from '@/shared/design-system/components/Button'
import Link from 'next/link'

interface CTASectionProps {
    data: CTAContent
}

export function CTASection({
    data
}: CTASectionProps) {
    return (
        <section
            id="cta"
            className="py-20"
            style={{
                backgroundImage:
                    'linear-gradient(to right, var(--secondary), var(--secondary--70))'
            }}
        >
            <Container>
                <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
                    <h2
                        className="font-poppins text-3xl md:text-4xl font-bold"
                        style={{
                            color: 'var(--black)'
                        }}
                    >
                        {data.title}
                    </h2>

                    <p
                        className="text-lg md:text-xl opacity-90 leading-relaxed"
                        style={{
                            color: 'var(--black)'
                        }}
                    >
                        {data.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/parceiro/solicitar">
                            <Button
                                label={
                                    'Crie sua Campanha de Empréstimo' /*data.primaryCta.text*/
                                }
                                variant="primary-filled"
                            />
                        </Link>
                        <Link href="/proposta">
                            <Button
                                label={
                                    data
                                        .secondaryCta
                                        .text
                                }
                                variant="primary-text"
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
