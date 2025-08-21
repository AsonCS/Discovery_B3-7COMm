import Image from 'next/image'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/bkp/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Separator } from '@/components/ui/separator'
import {
  ArrowRight,
  Gift,
  TrendingUp,
  Wallet
} from 'lucide-react'
import { Header } from '@/presentation/components/layout/Header'

// --- DADOS MOCKADOS (Substituir pela sua API) ---

const parceiro = {
  name: 'João da Silva',
  avatarUrl: 'https://i.pravatar.cc/150?u=joao',
  location: 'Sul de Minas, MG',
  about:
    'Produtor de café da terceira geração de uma família apaixonada pelo que faz. Nosso foco é a produção de cafés especiais de forma sustentável, valorizando nossa terra e nossa comunidade. Com a Colheita Digital, buscamos levar nossos projetos a um novo patamar.'
}

const campanhas = [
  {
    id: 1,
    title: 'Colheita de Café Especial 2024',
    status: 'Ativa',
    raisedAmount: 11530,
    goalAmount: 15000
  },
  {
    id: 2,
    title: 'Compra de Novo Secador',
    status: 'Finalizada',
    raisedAmount: 10000,
    goalAmount: 10000
  }
]

const promocoes = [
  {
    id: 1,
    title: 'Café da Manhã na Fazenda',
    description:
      'Troque seus ITLs por uma experiência única de café da manhã.',
    costInITL: 50
  },
  {
    id: 2,
    title: '10% de Desconto no Café Especial',
    description:
      'Use seus ITLs para ganhar desconto na compra do nosso melhor café.',
    costInITL: 20
  }
]

const extrato = [
  {
    date: '25/07/2024',
    description:
      "Aporte da campanha 'Colheita 2024'",
    type: 'Crédito',
    amount: 5000.0
  },
  {
    date: '20/07/2024',
    description:
      "Aporte da campanha 'Colheita 2024'",
    type: 'Crédito',
    amount: 6530.0
  },
  {
    date: '05/08/2024',
    description:
      "Pagamento Parcela 1/12 - Empréstimo 'Secador'",
    type: 'Débito',
    amount: -950.5
  }
]

// --- COMPONENTE DA PÁGINA ---

export default function PerfilParceiroPage() {
  return (
    <>
      <Header hasNav={false} />
      <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Seção de Perfil */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                  <AvatarImage
                    src={parceiro.avatarUrl}
                    alt={parceiro.name}
                  />
                  <AvatarFallback>
                    {parceiro.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">
                    {parceiro.name}
                  </h1>
                  <p className="text-md text-gray-500">
                    {parceiro.location}
                  </p>
                  <p className="max-w-prose text-gray-700">
                    {parceiro.about}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {/* Seção de Vaquinhas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    Minhas Vaquinhas
                  </CardTitle>
                  <CardDescription>
                    Acompanhe o andamento das suas
                    campanhas de arrecadação.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 sm:grid-cols-2">
                  {campanhas.map((campanha) => (
                    <Card
                      key={campanha.id}
                      className="flex flex-col"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {campanha.title}
                        </CardTitle>
                        <Badge
                          variant={
                            campanha.status ===
                            'Ativa'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {campanha.status}
                        </Badge>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <Progress
                          value={
                            (campanha.raisedAmount /
                              campanha.goalAmount) *
                            100
                          }
                          className="mb-2 h-2"
                        />
                        <p className="text-sm text-gray-600">
                          <span className="font-bold text-green-700">
                            R${' '}
                            {campanha.raisedAmount.toLocaleString(
                              'pt-BR'
                            )}
                          </span>{' '}
                          arrecadados de R${' '}
                          {campanha.goalAmount.toLocaleString(
                            'pt-BR'
                          )}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>

              {/* Seção de Extrato */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-6 w-6 text-blue-600" />
                    Extrato Financeiro
                  </CardTitle>
                  <CardDescription>
                    Visualize seus créditos
                    recebidos e contas a pagar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          Data
                        </TableHead>
                        <TableHead>
                          Descrição
                        </TableHead>
                        <TableHead className="text-right">
                          Valor (R$)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {extrato.map(
                        (item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {item.date}
                            </TableCell>
                            <TableCell>
                              {item.description}
                            </TableCell>
                            <TableCell
                              className={`text-right font-bold ${
                                item.type ===
                                'Crédito'
                                  ? 'text-green-600'
                                  : 'text-red-600'
                              }`}
                            >
                              {item.amount.toLocaleString(
                                'pt-BR',
                                {
                                  style:
                                    'currency',
                                  currency: 'BRL'
                                }
                              )}
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Seção de Promoções ITL */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-6 w-6 text-orange-500" />
                    Promoções em ITL
                  </CardTitle>
                  <CardDescription>
                    Recompensas que você oferece
                    para seus apoiadores.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {promocoes.map((promocao) => (
                    <div
                      key={promocao.id}
                      className="rounded-lg border p-4"
                    >
                      <h4 className="font-semibold">
                        {promocao.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {promocao.description}
                      </p>
                      <p className="mt-2 text-sm font-bold text-orange-600">
                        {promocao.costInITL} ITL
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
