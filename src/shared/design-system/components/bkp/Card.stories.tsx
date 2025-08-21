import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./Card"

import '../../../../styles/globals.css'

const meta = {
  title: "Bkp/Design System/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component with header, title, description, and content sections. Used throughout the Colheita Digital platform.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Tokenização de Ativos</CardTitle>
        <CardDescription>Transforme seus ativos produtivos em tokens digitais</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Nossa plataforma permite que pequenos empreendedores tokenizem seus ativos e captem recursos diretamente da
          comunidade.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Card className="w-80 text-center">
      <CardHeader>
        <div className="text-4xl mb-4">🌱</div>
        <CardTitle>Captação de Recursos</CardTitle>
        <CardDescription>Tokenize ativos produtivos e venda antecipadamente</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Um agricultor pode tokenizar uma porcentagem de sua próxima colheita, recebendo capital antecipadamente.</p>
      </CardContent>
    </Card>
  ),
}

export const Benefit: Story = {
  render: () => (
    <Card className="w-80 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-3xl mb-4">🚀</div>
        <CardTitle className="text-lg">Democratização do Acesso a Capital</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          Pequenos empreendedores levantam fundos diretamente da comunidade, sem intermediários bancários.
        </CardDescription>
      </CardContent>
    </Card>
  ),
}

export const Problem: Story = {
  render: () => (
    <Card className="w-80 text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-4xl mb-4">💰</div>
        <CardTitle className="text-xl">Dificuldade de Acesso a Crédito</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          Altas taxas de juros e burocracia limitam o crescimento dos pequenos negócios.
        </CardDescription>
      </CardContent>
    </Card>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-3xl">🌱</div>
            <CardTitle className="text-xl">Captação de Recursos</CardTitle>
          </div>
          <CardDescription className="text-base">
            Tokenize ativos produtivos e venda antecipadamente para a comunidade.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide text-green-600">Exemplos de Uso:</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Agricultor tokeniza porcentagem da próxima colheita</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Artesão tokeniza série de peças exclusivas</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-3xl">🎯</div>
            <CardTitle className="text-xl">Fidelização Comunitária</CardTitle>
          </div>
          <CardDescription className="text-base">
            Sistema de tokens de impacto local compartilhados entre negócios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide text-green-600">Exemplos de Uso:</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Tokens acumulados em consórcio de negócios</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Gamificação com desafios e metas</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}
