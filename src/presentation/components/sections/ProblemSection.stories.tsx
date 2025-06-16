import type { Meta, StoryObj } from "@storybook/react"
import { ProblemSection } from "./ProblemSection"
import type { ProblemContent } from "@/domain/entities/Content"

const meta = {
  title: "Sections/ProblemSection",
  component: ProblemSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Section that outlines the main problems faced by small businesses and entrepreneurs.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProblemSection>

export default meta
type Story = StoryObj<typeof meta>

const defaultData: ProblemContent = {
  title: "O Problema que Resolvemos",
  description: "Pequenos negócios e empreendedores autônomos muitas vezes enfrentam:",
  problems: [
    {
      title: "Dificuldade de Acesso a Crédito",
      description: "Altas taxas de juros e burocracia limitam o crescimento dos pequenos negócios.",
      icon: "💰",
    },
    {
      title: "Baixa Fidelização de Clientes",
      description: "Mercado competitivo dificulta a sustentabilidade a longo prazo.",
      icon: "👥",
    },
    {
      title: "Falta de Liquidez",
      description: "Ativos menores ou intangíveis não são aceitos como garantia em bancos convencionais.",
      icon: "🏦",
    },
  ],
}

export const Default: Story = {
  args: {
    data: defaultData,
  },
}

export const FourProblems: Story = {
  args: {
    data: {
      ...defaultData,
      problems: [
        ...defaultData.problems,
        {
          title: "Falta de Transparência",
          description: "Processos bancários complexos e pouco transparentes geram desconfiança.",
          icon: "🔍",
        },
      ],
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
