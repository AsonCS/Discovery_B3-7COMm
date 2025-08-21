import React from "react"
import { render, screen } from "@testing-library/react"
import { Container } from "../bkp/Container"

describe("Container Component", () => {
  it("should render with default props", () => {
    render(<Container data-testid="container">Content</Container>)

    const container = screen.getByTestId("container")
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass("mx-auto", "px-4", "sm:px-6", "lg:px-8", "max-w-7xl")
  })

  it("should render different sizes correctly", () => {
    const { rerender } = render(
      <Container size="sm" data-testid="container">
        Content
      </Container>,
    )
    expect(screen.getByTestId("container")).toHaveClass("max-w-3xl")

    rerender(
      <Container size="md" data-testid="container">
        Content
      </Container>,
    )
    expect(screen.getByTestId("container")).toHaveClass("max-w-5xl")

    rerender(
      <Container size="lg" data-testid="container">
        Content
      </Container>,
    )
    expect(screen.getByTestId("container")).toHaveClass("max-w-7xl")

    rerender(
      <Container size="xl" data-testid="container">
        Content
      </Container>,
    )
    expect(screen.getByTestId("container")).toHaveClass("max-w-screen-2xl")

    rerender(
      <Container size="full" data-testid="container">
        Content
      </Container>,
    )
    expect(screen.getByTestId("container")).toHaveClass("max-w-none")
  })

  it("should accept custom className", () => {
    render(
      <Container className="custom-container" data-testid="container">
        Content
      </Container>,
    )
    expect(screen.getByTestId("container")).toHaveClass("custom-container")
  })

  it("should forward ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Container ref={ref}>Container with ref</Container>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it("should render children correctly", () => {
    render(
      <Container>
        <h1>Test Heading</h1>
        <p>Test paragraph</p>
      </Container>,
    )

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Test Heading")
    expect(screen.getByText("Test paragraph")).toBeInTheDocument()
  })
})
