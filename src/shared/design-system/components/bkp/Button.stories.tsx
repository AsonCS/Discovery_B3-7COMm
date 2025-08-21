import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "./Button"

import '../../../../styles/globals.css'

const meta = {
  title: "Bkp/Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants and sizes. Part of the Colheita Digital design system.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the button should take full width of its container",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    children: {
      control: { type: "text" },
      description: "The content of the button",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Começar Tokenização",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Saiba Mais",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Login",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Cancelar",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Pequeno",
  },
}

export const Medium: Story = {
  args: {
    size: "md",
    children: "Médio",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Grande",
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Botão Largura Total",
  },
  parameters: {
    layout: "padded",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Desabilitado",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All button variants displayed together for comparison.",
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All button sizes displayed together for comparison.",
      },
    },
  },
}
