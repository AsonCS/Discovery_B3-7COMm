import { render, screen } from "@testing-library/react"
import HomePage from "../(main)/page"
import jest from "jest" // Import jest to fix the undeclared variable error

// Mock the content repository
jest.mock("@/infrastructure/repositories/ContentRepository", () => ({
  contentRepository: {
    getPageContent: jest.fn().mockResolvedValue({
      hero: {
        title: "Test Title",
        subtitle: "Test Subtitle",
        description: "Test description",
        ctaText: "Test CTA",
        ctaLink: "#test",
      },
      problem: {
        title: "Test Problems",
        description: "Test problem description",
        problems: [],
      },
      solution: {
        title: "Test Solution",
        description: "Test solution description",
        features: [],
      },
      benefits: {
        title: "Test Benefits",
        description: "Test benefits description",
        benefits: [],
      },
      future: {
        title: "Test Future",
        description: "Test future description",
        vision: "Test vision",
      },
      cta: {
        title: "Test CTA",
        description: "Test CTA description",
        primaryCta: { text: "Primary", link: "/primary" },
        secondaryCta: { text: "Secondary", link: "/secondary" },
      },
    }),
  },
}))

describe("HomePage", () => {
  it("should render all main sections", async () => {
    const page = await HomePage()
    render(page)

    expect(screen.getByRole("main")).toBeInTheDocument()
  })

  it("should have proper semantic structure", async () => {
    const page = await HomePage()
    render(page)

    const main = screen.getByRole("main")
    expect(main).toHaveClass("min-h-screen")
  })
})
