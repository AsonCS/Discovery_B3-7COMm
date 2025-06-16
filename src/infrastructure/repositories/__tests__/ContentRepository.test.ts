import { contentRepository } from "../ContentRepository"

describe("ContentRepository", () => {
  it("should return page content for home page", async () => {
    const content = await contentRepository.getPageContent("home")

    expect(content).toBeDefined()
    expect(content.hero).toBeDefined()
    expect(content.problem).toBeDefined()
    expect(content.solution).toBeDefined()
    expect(content.benefits).toBeDefined()
    expect(content.future).toBeDefined()
    expect(content.cta).toBeDefined()
  })

  it("should return hero content with required fields", async () => {
    const content = await contentRepository.getPageContent("home")

    expect(content.hero.title).toBe("Colheita Digital")
    expect(content.hero.subtitle).toBe("Tokenize-se: O Valor Além da Moeda")
    expect(content.hero.description).toContain("plataforma onde pequenos empreendedores")
    expect(content.hero.ctaText).toBe("Começar Agora")
    expect(content.hero.ctaLink).toBe("#cta")
  })

  it("should return problem content with problems array", async () => {
    const content = await contentRepository.getPageContent("home")

    expect(content.problem.title).toBe("O Problema que Resolvemos")
    expect(content.problem.problems).toHaveLength(3)

    const firstProblem = content.problem.problems[0]
    expect(firstProblem.title).toBe("Dificuldade de Acesso a Crédito")
    expect(firstProblem.description).toContain("Altas taxas de juros")
    expect(firstProblem.icon).toBe("💰")
  })

  it("should return solution content with features", async () => {
    const content = await contentRepository.getPageContent("home")

    expect(content.solution.title).toBe("Como a Tokenização Atua")
    expect(content.solution.features).toHaveLength(2)

    const firstFeature = content.solution.features[0]
    expect(firstFeature.title).toBe("Captação de Recursos via Tokenização")
    expect(firstFeature.examples).toHaveLength(3)
  })

  it("should return benefits content with benefits array", async () => {
    const content = await contentRepository.getPageContent("home")

    expect(content.benefits.title).toBe("Diferenciais e Impacto")
    expect(content.benefits.benefits).toHaveLength(6)

    const firstBenefit = content.benefits.benefits[0]
    expect(firstBenefit.title).toBe("Democratização do Acesso a Capital")
    expect(firstBenefit.icon).toBe("🚀")
  })

  it("should return future content", async () => {
    const content = await contentRepository.getPageContent("home")

    expect(content.future.title).toBe("Olhar de Futuro")
    expect(content.future.description).toContain("nova infraestrutura financeira local")
    expect(content.future.vision).toContain("economia mais resiliente")
  })

  it("should return CTA content with both actions", async () => {
    const content = await contentRepository.getPageContent("home")

    expect(content.cta.title).toBe("Pronto para Transformar sua Comunidade?")
    expect(content.cta.primaryCta.text).toBe("Começar Tokenização")
    expect(content.cta.primaryCta.link).toBe("/cadastro")
    expect(content.cta.secondaryCta.text).toBe("Saiba Mais")
    expect(content.cta.secondaryCta.link).toBe("/sobre")
  })

  it("should handle different page IDs", async () => {
    // Since it's a mock, it should return the same content for any page ID
    const content1 = await contentRepository.getPageContent("home")
    const content2 = await contentRepository.getPageContent("about")

    expect(content1).toEqual(content2)
  })

  it("should return content asynchronously", async () => {
    const startTime = Date.now()
    await contentRepository.getPageContent("home")
    const endTime = Date.now()

    // Should complete quickly since it's mocked data
    expect(endTime - startTime).toBeLessThan(100)
  })
})
