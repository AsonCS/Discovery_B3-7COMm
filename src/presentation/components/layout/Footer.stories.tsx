import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Footer } from "./Footer"

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The main footer for the Colheita Digital platform. Contains links, company information, and legal notices.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithContent: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 bg-gradient-to-br from-green-50 to-blue-50 p-8">
          <h1 className="text-4xl font-bold mb-4">Conteúdo da Página</h1>
          <p className="text-lg text-gray-600 mb-8">
            Este é um exemplo de como o footer aparece no final de uma página real.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Card {i}</h3>
                <p className="text-gray-600">Conteúdo de exemplo para demonstrar o layout.</p>
              </div>
            ))}
          </div>
        </div>
        <Story />
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
