import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { CTASection } from "./CTASection"
import type { CTAContent } from "@/domain/entities/Content"

const meta = {
  title: "Sections/CTASection",
  component: CTASection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Call-to-action section with primary and secondary action buttons. Features gradient background.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CTASection>

export default meta
type Story = StoryObj<typeof meta>

const defaultData: CTAContent = {
  title: "Pronto para Transformar sua Comunidade?",
  description: "Junte-se à revolução da tokenização e construa uma economia local mais forte e sustentável.",
  primaryCta: {
    text: "Começar Tokenização",
    link: "/cadastro",
  },
  secondaryCta: {
    text: "Saiba Mais",
    link: "/sobre",
  },
}

export const Default: Story = {
  args: {
    data: defaultData,
  },
}

export const Alternative: Story = {
  args: {
    data: {
      title: "Revolucione sua Economia Local",
      description:
        "Seja parte da transformação digital que está mudando a forma como pequenos negócios acessam capital e fidelizam clientes.",
      primaryCta: {
        text: "Criar Conta Grátis",
        link: "/registro",
      },
      secondaryCta: {
        text: "Ver Demonstração",
        link: "/demo",
      },
    },
  },
}

export const SingleCTA: Story = {
  args: {
    data: {
      title: "Comece Hoje Mesmo",
      description: "Não perca tempo. Transforme seu negócio com a tokenização.",
      primaryCta: {
        text: "Começar Agora",
        link: "/start",
      },
      secondaryCta: {
        text: "",
        link: "",
      },
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
