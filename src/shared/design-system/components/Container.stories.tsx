import type { Meta, StoryObj } from "@storybook/react"
import { Container } from "./Container"

const meta = {
  title: "Design System/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A responsive container component that centers content and provides consistent padding. Available in multiple sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
      description: "The maximum width of the container",
    },
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

const SampleContent = () => (
  <div className="bg-green-100 p-8 rounded-lg border-2 border-green-200">
    <h2 className="text-2xl font-bold mb-4">Container Content</h2>
    <p className="text-gray-700">
      Este é um exemplo de conteúdo dentro do container. O container fornece padding consistente e centraliza o conteúdo
      na página.
    </p>
  </div>
)

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <Container {...args}>
      <SampleContent />
    </Container>
  ),
}

export const Medium: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Container {...args}>
      <SampleContent />
    </Container>
  ),
}

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <Container {...args}>
      <SampleContent />
    </Container>
  ),
}

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
  render: (args) => (
    <Container {...args}>
      <SampleContent />
    </Container>
  ),
}

export const Full: Story = {
  args: {
    size: "full",
  },
  render: (args) => (
    <Container {...args}>
      <SampleContent />
    </Container>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <Container size="sm">
        <div className="bg-blue-100 p-4 rounded border-2 border-blue-200">
          <h3 className="font-bold">Small Container (max-w-3xl)</h3>
          <p>Ideal para conteúdo de texto focado e formulários.</p>
        </div>
      </Container>

      <Container size="md">
        <div className="bg-green-100 p-4 rounded border-2 border-green-200">
          <h3 className="font-bold">Medium Container (max-w-5xl)</h3>
          <p>Bom para seções com conteúdo moderado e layouts de duas colunas.</p>
        </div>
      </Container>

      <Container size="lg">
        <div className="bg-yellow-100 p-4 rounded border-2 border-yellow-200">
          <h3 className="font-bold">Large Container (max-w-7xl)</h3>
          <p>Padrão para a maioria das seções da landing page.</p>
        </div>
      </Container>

      <Container size="xl">
        <div className="bg-purple-100 p-4 rounded border-2 border-purple-200">
          <h3 className="font-bold">Extra Large Container (max-w-screen-2xl)</h3>
          <p>Para layouts complexos e dashboards.</p>
        </div>
      </Container>

      <Container size="full">
        <div className="bg-red-100 p-4 rounded border-2 border-red-200">
          <h3 className="font-bold">Full Container (max-w-none)</h3>
          <p>Usa toda a largura disponível da tela.</p>
        </div>
      </Container>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all container sizes to help choose the right one for your content.",
      },
    },
  },
}
