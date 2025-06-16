import type { Meta, StoryObj } from "@storybook/react"
import { BenefitsSection } from "./BenefitsSection"
import type { BenefitsContent } from "@/domain/entities/Content"

const meta = {
  title: "Sections/BenefitsSection",
  component: BenefitsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Section showcasing the key benefits and differentials of the tokenization platform.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BenefitsSection>

export default meta
type Story = StoryObj<typeof meta>

const defaultData: BenefitsContent = {
  title: "Diferenciais e Impacto",
  description: "Nossa solução transforma a economia local através de:",
  benefits: [
    {
      title: "Democratização do Acesso a Capital",
      description: "Pequenos empreendedores levantam fundos diretamente da comunidade, sem intermediários bancários.",
      icon: "🚀",
    },
    {
      title: "Economia Circular e Comunitária",
      description: "Fortalece laços entre consumidores e produtores locais, criando ecossistema valorizado.",
      icon: "🔄",
    },
    {
      title: "Novas Fontes de Renda",
      description: "Pessoas comuns investem pequenas quantias em negócios locais que conhecem e confiam.",
      icon: "💎",
    },
    {
      title: "Fidelidade Flexível e Valorizável",
      description: "Tokens de fidelidade com maior utilidade e liquidez que pontos tradicionais.",
      icon: "⭐",
    },
    {
      title: "Transparência e Eficiência",
      description: "Tecnologia blockchain garante transparência e reduz custos operacionais.",
      icon: "🔐",
    },
    {
      title: "Inclusão Financeira",
      description: "Participação em economia digital para indivíduos sem acesso a serviços bancários tradicionais.",
      icon: "🌍",
    },
  ],
}

export const Default: Story = {
  args: {
    data: defaultData,
  },
}

export const ThreeBenefits: Story = {
  args: {
    data: {
      ...defaultData,
      benefits: defaultData.benefits.slice(0, 3),
    },
  },
}

export const Mobile: Story = {
  args: {
    data: defaultData,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
}
