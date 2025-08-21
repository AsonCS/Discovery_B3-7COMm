import Image from 'next/image'
import { Header } from '@/presentation/components/layout/Header'
import { Container } from '@/shared/design-system/components/bkp/Container'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/design-system/components/bkp/Card'
import {
  Users,
  Briefcase,
  ShoppingCart,
  HardHat,
  Landmark,
  ShieldCheck,
  Gavel,
  DollarSign,
  Scale,
  BookCheck,
  Lightbulb,
  FileText,
  Banknote,
  CreditCard
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proposta Completa | Colheita Digital',
  description:
    'Conheça em detalhes a proposta de valor, os tokens, os fluxos e as regras de negócio da plataforma Colheita Digital.'
}

const tokens = [
  {
    name: 'TIL',
    image: '/image/til_circle.png',
    fullName: 'Token de Impacto Local',
    type: 'Fungível',
    description:
      'Token de fidelidade "queimado" a cada uso em serviços. Sua inflação é controlada pela oferta/demanda de serviços nos parceiros.',
    color:
      'bg-green-100 text-green-800 border-green-200'
  },
  {
    name: 'TAP',
    image: '/image/tap_circle.png',
    fullName: 'Token de Ativo Produtivo',
    type: 'Não Fungível',
    description:
      'Representa uma parte imutável do valor de um ativo produtivo, como uma cota de um equipamento.',
    color:
      'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    name: 'TCN',
    image: '/image/tcn_circle.png',
    fullName: 'Token de Cota de Negócio',
    type: 'Não Fungível',
    description:
      'Representa uma parte imutável do valor de um negócio, como uma vaga em um curso ou horas de consultoria.',
    color:
      'bg-indigo-100 text-indigo-800 border-indigo-200'
  },
  {
    name: 'TRED',
    image: '/image/tred_circle.png',
    fullName: 'Token de Crédito',
    type: 'Fungível',
    description:
      'Crédito usado para transações na plataforma, como empréstimos e compras. Gerado para mineradores e na compra com dinheiro.',
    color:
      'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  {
    name: 'TOVE',
    image: '/image/tove_circle.png',
    fullName: 'Token de Governança',
    type: 'Fungível',
    description:
      'Funciona como ações da plataforma, dando poder de voto aos detentores sobre o futuro da Colheita Digital.',
    color:
      'bg-purple-100 text-purple-800 border-purple-200'
  }
]

const fluxos = [
  {
    role: 'Empreendedor',
    icon: Briefcase,
    description:
      'Capte recursos de forma antecipada, tokenizando produtos, serviços ou equipamentos. Obtenha empréstimos com garantia de ativos futuros ou baseados em sua reputação na plataforma.',
    color: 'text-sky-600'
  },
  {
    role: 'Investidor',
    icon: Users,
    description:
      'Apoie negócios locais que você conhece e confia. Receba tokens de fidelidade (TILs) como cashback e participe da governança da plataforma com tokens TOVE.',
    color: 'text-amber-600'
  },
  {
    role: 'Consumidor',
    icon: ShoppingCart,
    description:
      'Ganhe TILs ao consumir nos parceiros e troque por descontos e benefícios em toda a rede. Participe de iniciativas de impacto social e seja recompensado, fortalecendo o comércio local.',
    color: 'text-emerald-600'
  },
  {
    role: 'Minerador/Validador',
    icon: HardHat,
    description:
      'Receba recompensas em TREDs por validar blocos e ganhe poder de voto na rede com tokens TOVE, garantindo a segurança e a descentralização da plataforma.',
    color: 'text-slate-600'
  }
]

const faturamentos = [
  {
    title: 'Taxas de Transação',
    description:
      'Pequena porcentagem sobre o valor captado em emissões de tokens e sobre empréstimos concedidos.',
    icon: Banknote
  },
  {
    title: 'Assinaturas Premium',
    description:
      'Planos para empreendedores com ferramentas avançadas de análise, suporte dedicado e maior visibilidade.',
    icon: CreditCard
  },
  {
    title: 'Taxas de Listagem',
    description:
      'Valor (fixo ou percentual) para que o projeto de tokenização seja listado e promovido na plataforma.',
    icon: DollarSign
  },
  {
    title: 'Parcerias Estratégicas',
    description:
      'Com marcas que queiram se conectar com o ecossistema local ou oferecer benefícios exclusivos.',
    icon: Briefcase
  },
  {
    title: 'Data Analytics',
    description:
      'Venda de insights de mercado (anonimizados e agregados) para empresas de pesquisa ou governos.',
    icon: Lightbulb
  },
  {
    title: 'White Label',
    description:
      'Oferecer a tecnologia da Colheita Digital para outras cidades ou comunidades criarem seu próprio ecossistema.',
    icon: FileText
  }
]

const regrasNegocio = [
  {
    title: 'Validação de Empreendedores',
    description:
      'Processo de KYC/KYB para garantir idoneidade e legitimidade dos negócios.',
    icon: ShieldCheck
  },
  {
    title: 'Contratos Inteligentes Seguros',
    description:
      'Termos implementados via contratos inteligentes robustos, auditados e imutáveis.',
    icon: Gavel
  },
  {
    title: 'Resolução de Disputas',
    description:
      'Sistema claro para lidar com falhas, incluindo mediação, fundos de garantia ou arbitragem.',
    icon: Scale
  },
  {
    title: 'Transparência nas Taxas',
    description:
      'Todas as taxas da plataforma devem ser claramente comunicadas aos usuários.',
    icon: FileText
  }
]

const regrasLegais = [
  {
    title: 'Marco Legal dos Criptoativos',
    description:
      'Enquadramento como PSAV, exigindo autorização do BACEN para operar.',
    icon: Landmark
  },
  {
    title: 'Regulamentação da CVM',
    description:
      'Tokens podem ser considerados valores mobiliários, sujeitos à regulamentação da CVM.',
    icon: Gavel
  },
  {
    title: 'Direito do Consumidor (CDC)',
    description:
      'Relações na plataforma estão sujeitas ao CDC, garantindo transparência e responsabilidade.',
    icon: BookCheck
  },
  {
    title: 'LGPD e AML/CFT',
    description:
      'Conformidade total com a LGPD e implementação de políticas de KYC, AML e CFT.',
    icon: ShieldCheck
  }
]

export default function PropostaPage() {
  return (
    <>
      <Header hasNav={false} />
      <main className="min-h-screen bg-background">
        <section
          style={{
            backgroundImage:
              'url(/image/banner_original.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className="py-20 lg:py-28 bg-muted/30"
        >
          <Container>
            <div className="mx-auto max-w-4xl p-4 space-y-6 text-center  bg-gradient-to-b from-transparent via-secondary/80 to-secondary/100">
              <h1 className="font-poppins text-4xl font-bold tracking-tight md:text-5xl">
                Proposta Colheita Digital
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Uma plataforma DeFi inovadora que
                empodera pequenos empreendedores
                com acesso a capital via
                tokenização e fortalece o
                engajamento comunitário,
                oferecendo a oportunidade de
                apoiar negócios locais e receber
                benefícios tangíveis.
              </p>
            </div>
          </Container>
        </section>

        <section id="tokens" className="py-20">
          <Container>
            <div className="mb-16 space-y-4 text-center">
              <h2 className="font-poppins text-3xl font-bold md:text-4xl">
                Nossos Tokens
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                O ecossistema da Colheita Digital
                é sustentado por um conjunto de
                tokens com finalidades
                específicas.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tokens.map((token) => (
                <Card
                  key={token.name}
                  className="flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-6 w-6 relative">
                          <Image
                            src={token.image}
                            alt={token.name}
                            fill
                          />
                        </div>

                        <CardTitle className="text-2xl font-bold">
                          {token.name}
                        </CardTitle>
                      </div>
                      <Badge
                        variant="outline"
                        className={token.color}
                      >
                        {token.type}
                      </Badge>
                    </div>
                    <CardDescription>
                      {token.fullName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      {token.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="fluxos"
          className="py-20 bg-muted/30"
        >
          <Container>
            <div className="mb-16 space-y-4 text-center">
              <h2 className="font-poppins text-3xl font-bold md:text-4xl">
                Fluxos e Interações
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Cada participante tem um papel
                fundamental no fortalecimento da
                economia local.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {fluxos.map((fluxo) => (
                <Card
                  key={fluxo.role}
                  className="flex items-start space-x-6 p-6"
                >
                  <fluxo.icon
                    className={`mt-1 h-8 w-8 flex-shrink-0 ${fluxo.color}`}
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">
                      {fluxo.role}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {fluxo.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="faturamento"
          className="py-20"
        >
          <Container>
            <div className="mb-16 space-y-4 text-center">
              <h2 className="font-poppins text-3xl font-bold md:text-4xl">
                Modelo de Negócio
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                A sustentabilidade da plataforma é
                garantida por múltiplas fontes de
                receita alinhadas ao sucesso do
                ecossistema.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {faturamentos.map((item) => (
                <Card key={item.title}>
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="regras"
          className="py-20 bg-muted/30"
        >
          <Container>
            <div className="mb-16 space-y-4 text-center">
              <h2 className="font-poppins text-3xl font-bold md:text-4xl">
                Regras e Considerações
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Operamos com base em um conjunto
                claro de regras de negócio e em
                conformidade com a legislação
                vigente.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <h3 className="text-center font-poppins text-2xl font-bold lg:text-left">
                  Regras de Negócio
                </h3>
                <div className="space-y-6">
                  {regrasNegocio.map((regra) => (
                    <div
                      key={regra.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <regra.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {regra.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {regra.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="font-poppins text-center text-2xl font-bold lg:text-left">
                  Considerações Legais (Brasil)
                </h3>
                <div className="space-y-6">
                  {regrasLegais.map((regra) => (
                    <div
                      key={regra.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <regra.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {regra.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {regra.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
