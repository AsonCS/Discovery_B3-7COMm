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
