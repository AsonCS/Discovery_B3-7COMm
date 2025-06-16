import type { IContentRepository } from "@/domain/repositories/IContentRepository"
import type { PageContent } from "@/domain/entities/Content"

class ContentRepository implements IContentRepository {
  async getPageContent(pageId: string): Promise<PageContent> {
    // Mock data - will be replaced by external CMS
    return {
      hero: {
        title: "Colheita Digital",
        subtitle: "Tokenize-se: O Valor Além da Moeda",
        description:
          "A proposta é criar uma plataforma onde pequenos empreendedores podem tokenizar partes de seus ativos produtivos ou de sua produção futura para captar recursos, e ao mesmo tempo, recompensar seus clientes com tokens de fidelidade que geram benefícios dentro de um ecossistema local.",
        ctaText: "Começar Agora",
        ctaLink: "#cta",
      },
      problem: {
        title: "O Problema que Resolvemos",
        description: "Pequenos negócios e empreendedores autônomos muitas vezes enfrentam:",
        problems: [
          {
            title: "Dificuldade de Acesso a Crédito",
            description: "Altas taxas de juros e burocracia limitam o crescimento dos pequenos negócios.",
            icon: "💰",
          },
          {
            title: "Baixa Fidelização de Clientes",
            description: "Mercado competitivo dificulta a sustentabilidade a longo prazo.",
            icon: "👥",
          },
          {
            title: "Falta de Liquidez",
            description: "Ativos menores ou intangíveis não são aceitos como garantia em bancos convencionais.",
            icon: "🏦",
          },
        ],
      },
      solution: {
        title: "Como a Tokenização Atua",
        description: "Nossa plataforma oferece duas soluções integradas:",
        features: [
          {
            title: "Captação de Recursos via Tokenização",
            description: "Tokenize ativos produtivos e venda antecipadamente para a comunidade.",
            icon: "🌱",
            examples: [
              "Agricultor tokeniza porcentagem da próxima colheita de orgânicos",
              "Artesão tokeniza série de peças exclusivas que serão produzidas",
              "Restaurante tokeniza cupons de refeições futuras ou experiências",
            ],
          },
          {
            title: "Fidelização e Recompensas Comunitárias",
            description: "Sistema de tokens de impacto local compartilhados entre negócios participantes.",
            icon: "🎯",
            examples: [
              "Tokens de Impacto Local (TILs) acumulados em consórcio de negócios",
              "Resgate em qualquer negócio participante para descontos e produtos",
              "Gamificação com desafios e metas para incentivar consumo local",
            ],
          },
        ],
      },
      benefits: {
        title: "Diferenciais e Impacto",
        description: "Nossa solução transforma a economia local através de:",
        benefits: [
          {
            title: "Democratização do Acesso a Capital",
            description:
              "Pequenos empreendedores levantam fundos diretamente da comunidade, sem intermediários bancários.",
            icon: "🚀",
          },
          {
            title: "Economia Circular e Comunitária",
            description: "Fortalece laços entre consumidores e produtores locais, criando ecossistema valorizado.",
            icon: "🔄",
          },
          {
            title: "Novas Fontes de Renda",
            description: "Pessoas comuns investem pequenas quantias em negócios locais que conhecem e confiam.",
            icon: "💎",
          },
          {
            title: "Fidelidade Flexível e Valorizável",
            description: "Tokens de fidelidade com maior utilidade e liquidez que pontos tradicionais.",
            icon: "⭐",
          },
          {
            title: "Transparência e Eficiência",
            description: "Tecnologia blockchain garante transparência e reduz custos operacionais.",
            icon: "🔐",
          },
          {
            title: "Inclusão Financeira",
            description:
              "Participação em economia digital para indivíduos sem acesso a serviços bancários tradicionais.",
            icon: "🌍",
          },
        ],
      },
      future: {
        title: "Olhar de Futuro",
        description:
          "Este modelo cria uma nova infraestrutura financeira local, onde o valor é gerado e compartilhado de forma mais equitativa.",
        vision:
          "Ele não só resolve problemas atuais de acesso a crédito e fidelização, mas também constrói uma economia mais resiliente, descentralizada e focada no impacto social e ambiental ao promover o consumo consciente e o apoio à produção local.",
      },
      cta: {
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
      },
    }
  }
}

export const contentRepository = new ContentRepository()
