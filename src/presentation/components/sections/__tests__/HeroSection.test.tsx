import { render, screen } from "@testing-library/react"
import { HeroSection } from "../HeroSection"
import { mockHeroContent } from "@/__tests__/utils/test-utils"

describe("HeroSection Component", () => {
  it("should render hero content correctly", () => {
    render(<HeroSection data={mockHeroContent} />)

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(mockHeroContent.title)
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockHeroContent.subtitle)
    expect(screen.getByText(mockHeroContent.description)).toBeInTheDocument()
  })

  it("should render CTA buttons", () => {
    render(<HeroSection data={mockHeroContent} />)

    expect(screen.getByRole("button", { name: mockHeroContent.ctaText })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /assistir demo/i })).toBeInTheDocument()
  })

  it("should have proper section structure", () => {
    render(<HeroSection data={mockHeroContent} />)

    const section = screen.getByRole("main")
    expect(section).toHaveClass("relative", "py-20", "lg:py-32")
  })

  it("should render with gradient background", () => {
    render(<HeroSection data={mockHeroContent} />)

    const section = screen.getByRole("main")
    expect(section).toHaveClass("bg-gradient-to-br", "from-primary/5", "via-background", "to-secondary/5")
  })

  it("should have responsive typography classes", () => {
    render(<HeroSection data={mockHeroContent} />)

    const title = screen.getByRole("heading", { level: 1 })
    expect(title).toHaveClass("text-4xl", "md:text-6xl", "lg:text-7xl")

    const subtitle = screen.getByRole("heading", { level: 2 })
    expect(subtitle).toHaveClass("text-xl", "md:text-2xl", "lg:text-3xl")
  })

  it("should render decorative elements", () => {
    const { container } = render(<HeroSection data={mockHeroContent} />)

    const decorativeElements = container.querySelectorAll(".absolute")
    expect(decorativeElements.length).toBeGreaterThan(0)
  })
})
