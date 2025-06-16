# Colheita Digital, Tokenize-se: O Valor Além da Moeda

## A proposta é criar uma plataforma onde pequenos empreendedores podem tokenizar partes de seus ativos produtivos ou de sua produção futura para captar recursos, e ao mesmo tempo, recompensar seus clientes com tokens de fidelidade que geram benefícios dentro de um ecossistema local.

### 1. O Problema que Resolvemos

Pequenos negócios e empreendedores autônomos muitas vezes enfrentam:

- Dificuldade de acesso a crédito tradicional, com altas taxas de juros e burocracia, limitando seu crescimento.
- Baixa fidelização de clientes em um mercado competitivo, dificultando a sustentabilidade a longo prazo.
- Falta de liquidez para ativos menores ou intangíveis que não são aceitos como garantia em bancos convencionais.

### 2. Como a Tokenização Atua

- Captação de Recursos via Tokenização de Ativos Produtivos:
  - Um pequeno agricultor pode tokenizar uma porcentagem de sua próxima colheita de orgânicos, vendendo esses tokens antecipadamente para a comunidade. Os compradores recebem o produto final ou um retorno financeiro sobre o valor investido.
  - Um artesão pode tokenizar uma série de peças exclusivas que serão produzidas, recebendo capital para matéria-prima e mão de obra.
  - Um dono de restaurante pode tokenizar cupons de refeições futuras ou a experiência de um "chef por um dia", convertendo antecipadamente seu fluxo de caixa e criando uma base de clientes engajados.
  - Stablecoins seriam usadas para a transferência de fundos de forma rápida, transparente e com baixas taxas, conectando investidores (pessoas comuns) diretamente aos empreendedores.
- Fidelização e Recompensas Comunitárias:
  - Ao comprar produtos ou investir em tokens de ativos produtivos, os clientes/investidores são recompensados com "Tokens de Impacto Local" (TILs).
  - Esses TILs são compartilhados e acumulados em um consórcio de pequenos negócios locais participantes (padarias, hortifrútis, salões de beleza, etc.).
  - Os TILs podem ser resgatados em qualquer um dos negócios participantes para obter descontos, produtos exclusivos, ou até mesmo trocados por outros serviços ou stablecoins dentro da plataforma.
  - Gamificação: Desafios e metas poderiam ser criados (ex: "Apoie 5 negócios diferentes no mês e ganhe 50 TILs bônus"), incentivando a exploração e o consumo local.

### 3. Diferenciais e Impacto

- Democratização do Acesso a Capital: Permite que pequenos empreendedores levantem fundos diretamente da comunidade, sem a necessidade de intermediários bancários ou garantias tradicionais.
- Economia Circular e Comunitária: Fortalece os laços entre consumidores e produtores locais, criando um ecossistema onde o dinheiro circula e se valoriza dentro da própria comunidade.
- Novas Fontes de Renda e Investimento: Pessoas comuns podem investir pequenas quantias em negócios locais que conhecem e confiam, gerando retornos e contribuindo para o desenvolvimento da sua vizinhança.
- Fidelidade Flexível e Valorizável: Os tokens de fidelidade têm maior utilidade e liquidez do que os pontos tradicionais, podendo ser usados em múltiplos estabelecimentos e até ter seu valor negociado.
- Transparência e Eficiência: A tecnologia blockchain garante transparência nas transações e reduz custos operacionais.
- Inclusão Financeira: Permite que indivíduos sem acesso a serviços bancários tradicionais participem de uma economia digital, tanto como empreendedores quanto como investidores/consumidores.

### 4. Olhar de Futuro

Este modelo cria uma nova infraestrutura financeira local, onde o valor é gerado e compartilhado de forma mais equitativa. Ele não só resolve problemas atuais de acesso a crédito e fidelização, mas também constrói uma economia mais resiliente, descentralizada e focada no impacto social e ambiental ao promover o consumo consciente e o apoio à produção local.

# Colheita Digital - Landing Page

Uma plataforma inovadora que permite pequenos empreendedores tokenizarem seus ativos produtivos e criarem um ecossistema de fidelidade local através da tecnologia blockchain.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Storybook** - Documentação de componentes
- **Jest & React Testing Library** - Testes unitários

## 🏗️ Arquitetura

Este projeto segue os princípios da **Clean Architecture**:

\`\`\`
src/
├── domain/ # Entidades e interfaces
├── infrastructure/ # Implementações (repositórios, APIs)
├── presentation/ # Componentes de UI
├── shared/ # Design system e utilitários
└── **tests**/ # Testes unitários
\`\`\`

## 🧪 Testes

### Executar Testes

\`\`\`bash

# Executar todos os testes

npm test

# Executar testes em modo watch

npm run test:watch

# Executar testes com coverage

npm run test:coverage

# Executar testes para CI

npm run test:ci
\`\`\`

### Cobertura de Testes

O projeto mantém uma cobertura mínima de 80% em:

- Branches
- Functions
- Lines
- Statements

### Estrutura de Testes

- **Design System**: Testes para Button, Card, Container
- **Layout**: Testes para Header e Footer
- **Sections**: Testes para todas as seções da landing page
- **Utils**: Testes para funções utilitárias
- **Repository**: Testes para o repositório de conteúdo
- **Integration**: Testes da página principal

## 📚 Storybook

\`\`\`bash

# Executar Storybook

npm run storybook

# Build do Storybook

npm run build-storybook
\`\`\`

## 🛠️ Desenvolvimento

\`\`\`bash

# Instalar dependências

npm install

# Executar em desenvolvimento

npm run dev

# Build para produção

npm run build

# Executar build de produção

npm start
\`\`\`

## 🎯 Scripts Disponíveis

- `dev` - Servidor de desenvolvimento
- `build` - Build para produção
- `start` - Servidor de produção
- `lint` - Linting do código
- `test` - Executar testes
- `test:watch` - Testes em modo watch
- `test:coverage` - Testes com relatório de cobertura
- `test:ci` - Testes para CI/CD
- `storybook` - Servidor do Storybook
- `build-storybook` - Build do Storybook

## 📋 Funcionalidades Testadas

### Componentes do Design System

- ✅ Button - Todas as variantes e estados
- ✅ Card - Estrutura completa e subcomponentes
- ✅ Container - Todos os tamanhos e responsividade

### Componentes de Layout

- ✅ Header - Navegação e elementos interativos
- ✅ Footer - Links e estrutura

### Seções da Landing Page

- ✅ HeroSection - Conteúdo e CTAs
- ✅ ProblemSection - Problemas e cards
- ✅ BenefitsSection - Benefícios e grid
- ✅ CTASection - Chamadas para ação

### Utilitários e Infraestrutura

- ✅ cn() - Função de merge de classes
- ✅ ContentRepository - Dados mockados
- ✅ HomePage - Integração completa

## 🔧 Configuração de Testes

O projeto usa Jest com as seguintes configurações:

- **Environment**: jsdom para testes de componentes React
- **Setup**: Configuração automática do Next.js
- **Mocks**: Next.js router, Link, Image
- **Coverage**: Relatórios detalhados de cobertura
- **Threshold**: 80% mínimo de cobertura

## 📊 Métricas de Qualidade

- **Cobertura de Testes**: 80%+ em todas as métricas
- **TypeScript**: Tipagem estrita habilitada
- **ESLint**: Regras do Next.js aplicadas
- **Acessibilidade**: Testes com Testing Library
- **Performance**: Componentes otimizados

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Escreva testes para novas funcionalidades
4. Execute os testes: `npm test`
5. Verifique a cobertura: `npm run test:coverage`
6. Commit suas mudanças
7. Abra um Pull Request
