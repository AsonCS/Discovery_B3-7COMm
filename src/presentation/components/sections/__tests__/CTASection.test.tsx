import { render, screen } from "@testing-library/react"
import { CTASection } from "../CTASection"
import { mockCTAContent } from "@/__tests__/utils/test-utils"

describe("CTASection Component", () => {
  it("should render section title and description", () => {
    render(<CTASection data={mockCTAContent} />)

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockCTAContent.title)
    expect(screen.getByText(mockCTAContent.description)).toBeInTheDocument()
  })

  it("should render both CTA buttons", () => {
    render(<CTASection data={mockCTAContent} />)

    expect(screen.getByRole("button", { name: mockCTAContent.primaryCta.text })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: mockCTAContent.secondaryCta.text })).toBeInTheDocument()
  })

  it("should have proper section id", () => {
    render(<CTASection data={mockCTAContent} />)

    const section = screen.getByRole("region")
    expect(section).toHaveAttribute("id", "cta")
  })

  it("should have gradient background", () => {
    render(<CTASection data={mockCTAContent} />)

    const section = screen.getByRole("region")
    expect(section).toHaveClass("bg-gradient-to-r", "from-primary", "to-primary/80")
  })

  it("should render buttons with correct variants", () => {
    render(<CTASection data={mockCTAContent} />)

    const primaryButton = screen.getByRole("button", { name: mockCTAContent.primaryCta.text })
    const secondaryButton = screen.getByRole("button", { name: mockCTAContent.secondaryCta.text })

    expect(primaryButton).toHaveClass("bg-white", "text-primary")
    expect(secondaryButton).toHaveClass("border-white", "text-white")
  })

  it("should handle empty secondary CTA", () => {
    const dataWithoutSecondaryCTA = {
      ...mockCTAContent,
      secondaryCta: { text: "", link: "" },
    }

    render(<CTASection data={dataWithoutSecondaryCTA} />)

    expect(screen.getByRole("button", { name: mockCTAContent.primaryCta.text })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "" })).not.toBeInTheDocument()
  })
})
