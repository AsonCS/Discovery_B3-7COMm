import Image from 'next/image'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/bkp/button'
import { Progress } from '@/components/ui/progress'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Heart,
  Users,
  Target
} from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/presentation/components/layout/Header'

// Em uma aplicação real, estes dados viriam de uma API.
const campaign = {
  title:
    'Colheita de Café Especial no Sul de Minas',
  bannerUrl:
    '/image/Colheita-de-Cafe-Especial-no-Sul-de-Minas.png',
  // ATENÇÃO: Em uma aplicação real, o HTML deve ser sanitizado antes de ser renderizado.
  description: `
    <p>Olá, sou o João, um pequeno produtor de café da terceira geração de uma família apaixonada pelo que faz aqui no Sul de Minas. Nossa fazenda, o Sítio Esperança, é pequena, mas nosso sonho é grande: produzir um dos melhores cafés especiais do Brasil, de forma sustentável e justa.</p>
    <p>Nos últimos anos, temos enfrentado desafios com as mudanças climáticas e a alta dos insumos. Para garantir a qualidade da nossa próxima safra e expandir nossa produção de forma orgânica, precisamos investir em um novo sistema de irrigação por gotejamento e em equipamentos de secagem mais modernos.</p>
    <p>Com o seu apoio, poderemos não apenas melhorar nossa produtividade, mas também contratar mais 2 funcionários da nossa comunidade, gerando renda e fortalecendo a economia local. Cada real investido será um passo a mais na realização deste sonho, e como forma de agradecimento, todos os apoiadores receberão pacotes do nosso café especial ao final da colheita.</p>
    <p>Junte-se a nós nesta jornada e ajude a cultivar o futuro do café no Brasil!</p>
  `,
  raisedAmount: 11530,
  goalAmount: 15000,
  donorsCount: 42
}

const solicitor = {
  name: 'João da Silva',
  avatarUrl: 'https://i.pravatar.cc/150?u=joao',
  location: 'Sul de Minas, MG',
  bio: 'Produtor de café de família, apaixonado por agricultura sustentável e inovação no campo.'
}

const recentDonors = [
  {
    name: 'Maria Oliveira',
    avatarUrl:
      'https://i.pravatar.cc/150?u=maria',
    amount: 500
  },
  {
    name: 'Carlos Pereira',
    avatarUrl:
      'https://i.pravatar.cc/150?u=carlos',
    amount: 250
  },
  {
    name: 'Ana Costa',
    avatarUrl: 'https://i.pravatar.cc/150?u=ana',
    amount: 1000
  },
  {
    name: 'Lucas Souza',
    avatarUrl:
      'https://i.pravatar.cc/150?u=lucas',
    amount: 150
  },
  {
    name: 'Investidor Anônimo',
    avatarUrl: '',
    amount: 300
  }
]

export default function CampaignStatusPage() {
  const percentage =
    (campaign.raisedAmount /
      campaign.goalAmount) *
    100

  return (
    <>
      <Header hasNav={false} />
      <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Coluna Esquerda: Banner e Descrição */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full sm:h-96">
                  <Image
                    src={campaign.bannerUrl}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold tracking-tight lg:text-4xl">
                    {campaign.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="prose max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: campaign.description
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Coluna Direita: Status, Doadores e Solicitante */}
            <div className="space-y-8">
              {/* Card de Status */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-baseline justify-between">
                    <span className="text-3xl font-bold text-green-600">
                      R${' '}
                      {campaign.raisedAmount.toLocaleString(
                        'pt-BR'
                      )}
                    </span>
                    <span className="text-sm text-gray-500">
                      de R${' '}
                      {campaign.goalAmount.toLocaleString(
                        'pt-BR'
                      )}
                    </span>
                  </div>
                  <Progress
                    value={percentage}
                    className="mb-4 h-3"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-green-600" />
                      <span>
                        {Math.round(percentage)}%
                        da meta
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>
                        {campaign.donorsCount}{' '}
                        apoiadores
                      </span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="pointer-events-none mt-6 w-full text-lg"
                  >
                    <Heart className="mr-2 h-5 w-5" />{' '}
                    Apoiar este projeto
                  </Button>
                </CardContent>
              </Card>

              {/* Card de Últimos Apoiadores */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Últimos Apoiadores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {recentDonors.map(
                      (donor, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={
                                  donor.avatarUrl
                                }
                                alt={donor.name}
                              />
                              <AvatarFallback>
                                {donor.name.includes(
                                  ' '
                                )
                                  ? `${
                                      donor.name.split(
                                        ' '
                                      )[0][0]
                                    }${
                                      donor.name.split(
                                        ' '
                                      )[1][0]
                                    }`
                                  : donor.name.charAt(
                                      0
                                    )}
                              </AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">
                              {donor.name}
                            </p>
                          </div>
                          <span className="font-medium text-gray-700">
                            R${' '}
                            {donor.amount.toLocaleString(
                              'pt-BR'
                            )}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>

              {/* Card do Solicitante */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Sobre o Solicitante
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-start gap-4">
                  <Link href="/parceiro/perfil">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={solicitor.avatarUrl}
                        alt={solicitor.name}
                      />
                      <AvatarFallback>
                        {solicitor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                  <div className="text-sm">
                    <Link href="/parceiro/perfil">
                      <p className="font-bold">
                        {solicitor.name}
                      </p>
                    </Link>
                    <p className="text-gray-500">
                      {solicitor.location}
                    </p>
                    <p className="mt-2 text-gray-600">
                      {solicitor.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
