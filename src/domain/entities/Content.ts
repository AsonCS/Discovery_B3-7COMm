export interface HeroContent {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundImage?: string
}

export interface ProblemContent {
  title: string
  description: string
  problems: Array<{
    title: string
    description: string
    icon: string
  }>
}

export interface SolutionContent {
  title: string
  description: string
  features: Array<{
    title: string
    description: string
    icon: string
    examples: string[]
  }>
}

export interface BenefitContent {
  title: string
  description: string
  icon: string
}

export interface BenefitsContent {
  title: string
  description: string
  benefits: BenefitContent[]
}

export interface FutureContent {
  title: string
  description: string
  vision: string
}

export interface CTAContent {
  title: string
  description: string
  primaryCta: {
    text: string
    link: string
  }
  secondaryCta: {
    text: string
    link: string
  }
}

export interface PageContent {
  hero: HeroContent
  problem: ProblemContent
  solution: SolutionContent
  benefits: BenefitsContent
  future: FutureContent
  cta: CTAContent
}
