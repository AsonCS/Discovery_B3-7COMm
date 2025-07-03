import type { Metadata } from 'next'
import { HeroSection } from '@/presentation/components/sections/HeroSection'
import { ProblemSection } from '@/presentation/components/sections/ProblemSection'
import { SolutionSection } from '@/presentation/components/sections/SolutionSection'
import { BenefitsSection } from '@/presentation/components/sections/BenefitsSection'
import { FutureSection } from '@/presentation/components/sections/FutureSection'
import { CTASection } from '@/presentation/components/sections/CTASection'
import { contentRepository } from '@/infrastructure/repositories/ContentRepository'
import { Header } from '@/presentation/components/layout/Header'

export const metadata: Metadata = {
  title:
    'Colheita Digital - Tokenize-se: O Valor Além da Moeda',
  description:
    'Plataforma inovadora que permite pequenos empreendedores tokenizarem seus ativos produtivos e criarem um ecossistema de fidelidade local através da tecnologia blockchain.',
  keywords:
    'tokenização, blockchain, pequenos negócios, economia local, stablecoins, fidelidade digital',
  authors: [{ name: 'Colheita Digital Team' }],
  openGraph: {
    title:
      'Colheita Digital - Tokenize-se: O Valor Além da Moeda',
    description:
      'Democratize o acesso a capital e fortaleça a economia local com tokenização de ativos produtivos.',
    type: 'website',
    locale: 'pt_BR'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Colheita Digital - Tokenize-se: O Valor Além da Moeda',
    description:
      'Democratize o acesso a capital e fortaleça a economia local com tokenização de ativos produtivos.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default async function HomePage() {
  const content =
    await contentRepository.getPageContent('home')

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection data={content.hero} />
        <ProblemSection data={content.problem} />
        <SolutionSection
          data={content.solution}
        />
        <BenefitsSection
          data={content.benefits}
        />
        <FutureSection data={content.future} />
        <CTASection data={content.cta} />
      </main>
    </>
  )
}
