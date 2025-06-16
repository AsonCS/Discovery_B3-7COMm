import { render, screen } from "@testing-library/react"
import { BenefitsSection } from "../BenefitsSection"
import { mockBenefitsContent } from "@/__tests__/utils/test-utils"

describe("BenefitsSection Component", () => {
  it("should render section title and description", () => {
    render(<BenefitsSection data={mockBenefitsContent} />)

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockBenefitsContent.title)
    expect(screen.getByText(mockBenefitsContent.description)).toBeInTheDocument()
  })

  it("should render all benefits", () => {
    render(<BenefitsSection data={mockBenefitsContent} />)

    mockBenefitsContent.benefits.forEach((benefit) => {
      expect(screen.getByText(benefit.title)).toBeInTheDocument()
      expect(screen.getByText(benefit.description)).toBeInTheDocument()
      expect(screen.getByText(benefit.icon)).toBeInTheDocument()
    })
  })

  it("should have proper section id", () => {
    render(<BenefitsSection data={mockBenefitsContent} />)

    const section = screen.getByRole("region")
    expect(section).toHaveAttribute("id", "beneficios")
  })

  it("should have responsive grid layout", () => {
    const { container } = render(<BenefitsSection data={mockBenefitsContent} />)

    const grid = container.querySelector(".grid")
    expect(grid).toHaveClass("grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8")
  })

  it("should render cards with proper styling", () => {
    const { container } = render(<BenefitsSection data={mockBenefitsContent} />)

    const cards = container.querySelectorAll('[class*="hover:shadow-lg"]')
    expect(cards.length).toBe(mockBenefitsContent.benefits.length)
  })
})
