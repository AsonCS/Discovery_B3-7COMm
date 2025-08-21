import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { HeroSection } from "./HeroSection"
import type { HeroContent } from "@/domain/entities/Content"

const meta = {
  title: "Sections/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The hero section of the landing page. Features the main value proposition and call-to-action buttons.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

const defaultData: HeroContent = {
  title: "Colheita Digital",
  subtitle: "Tokenize-se: O Valor Além da Moeda",
  description:
    "A proposta é criar uma plataforma onde pequenos empreendedores podem tokenizar partes de seus ativos produtivos ou de sua produção futura para captar recursos, e ao mesmo tempo, recompensar seus clientes com tokens de fidelidade que geram benefícios dentro de um ecossistema local.",
  ctaText: "Começar Agora",
  ctaLink: "#cta",
}

export const Default: Story = {
  args: {
    data: defaultData,
  },
}

export const Alternative: Story = {
  args: {
    data: {
      ...defaultData,
      title: "Revolução Financeira Local",
      subtitle: "Democratize o Acesso a Capital",
      description:
        "Transforme a economia da sua comunidade através da tokenização de ativos produtivos. Conecte empreendedores locais com investidores da região de forma transparente e eficiente.",
      ctaText: "Descobrir Como",
    },
  },
}

export const Short: Story = {
  args: {
    data: {
      title: "Tokenização Simples",
      subtitle: "Para Pequenos Negócios",
      description: "Acesse capital de forma inovadora e construa uma rede de fidelidade local.",
      ctaText: "Começar",
      ctaLink: "#start",
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
