import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Header } from "./Header"

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The main navigation header for the Colheita Digital platform. Features responsive design with mobile menu support.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Story />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Página de Exemplo</h1>
          <p className="text-lg text-gray-600">
            Este é um exemplo de como o header aparece em uma página real. O header é sticky e permanece no topo durante
            o scroll.
          </p>
        </div>
      </div>
    ),
  ],
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}
