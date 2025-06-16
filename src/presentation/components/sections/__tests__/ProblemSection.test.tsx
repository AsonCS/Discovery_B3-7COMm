import { render, screen } from "@testing-library/react"
import { ProblemSection } from "../ProblemSection"
import { mockProblemContent } from "@/__tests__/utils/test-utils"

describe("ProblemSection Component", () => {
  it("should render section title and description", () => {
    render(<ProblemSection data={mockProblemContent} />)

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockProblemContent.title)
    expect(screen.getByText(mockProblemContent.description)).toBeInTheDocument()
  })

  it("should render all problems", () => {
    render(<ProblemSection data={mockProblemContent} />)

    mockProblemContent.problems.forEach((problem) => {
      expect(screen.getByText(problem.title)).toBeInTheDocument()
      expect(screen.getByText(problem.description)).toBeInTheDocument()
      expect(screen.getByText(problem.icon)).toBeInTheDocument()
    })
  })

  it("should have proper section id", () => {
    render(<ProblemSection data={mockProblemContent} />)

    const section = screen.getByRole("region")
    expect(section).toHaveAttribute("id", "problema")
  })

  it("should have grid layout for problems", () => {
    const { container } = render(<ProblemSection data={mockProblemContent} />)

    const grid = container.querySelector(".grid")
    expect(grid).toHaveClass("grid-cols-1", "md:grid-cols-3", "gap-8")
  })

  it("should render cards with hover effects", () => {
    const { container } = render(<ProblemSection data={mockProblemContent} />)

    const cards = container.querySelectorAll('[class*="hover:shadow-lg"]')
    expect(cards.length).toBe(mockProblemContent.problems.length)
  })

  it("should have proper background styling", () => {
    render(<ProblemSection data={mockProblemContent} />)

    const section = screen.getByRole("region")
    expect(section).toHaveClass("py-20", "bg-muted/30")
  })
})
