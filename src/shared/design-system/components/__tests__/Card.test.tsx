import React from "react"
import { render, screen } from "@testing-library/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../bkp/Card"

describe("Card Components", () => {
  describe("Card", () => {
    it("should render with default styles", () => {
      render(<Card data-testid="card">Card content</Card>)

      const card = screen.getByTestId("card")
      expect(card).toBeInTheDocument()
      expect(card).toHaveClass("rounded-lg", "border", "bg-card", "text-card-foreground", "shadow-sm")
    })

    it("should accept custom className", () => {
      render(
        <Card className="custom-card" data-testid="card">
          Content
        </Card>,
      )
      expect(screen.getByTestId("card")).toHaveClass("custom-card")
    })

    it("should forward ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>()
      render(<Card ref={ref}>Card with ref</Card>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe("CardHeader", () => {
    it("should render with correct styles", () => {
      render(<CardHeader data-testid="header">Header content</CardHeader>)

      const header = screen.getByTestId("header")
      expect(header).toHaveClass("flex", "flex-col", "space-y-1.5", "p-6")
    })
  })

  describe("CardTitle", () => {
    it("should render as h3 with correct styles", () => {
      render(<CardTitle>Card Title</CardTitle>)

      const title = screen.getByRole("heading", { level: 3 })
      expect(title).toBeInTheDocument()
      expect(title).toHaveClass("text-2xl", "font-semibold", "leading-none", "tracking-tight")
      expect(title).toHaveTextContent("Card Title")
    })
  })

  describe("CardDescription", () => {
    it("should render with correct styles", () => {
      render(<CardDescription data-testid="description">Card description</CardDescription>)

      const description = screen.getByTestId("description")
      expect(description).toHaveClass("text-sm", "text-muted-foreground")
      expect(description).toHaveTextContent("Card description")
    })
  })

  describe("CardContent", () => {
    it("should render with correct styles", () => {
      render(<CardContent data-testid="content">Card content</CardContent>)

      const content = screen.getByTestId("content")
      expect(content).toHaveClass("p-6", "pt-0")
    })
  })

  describe("Complete Card", () => {
    it("should render a complete card structure", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardDescription>Test description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test content</p>
          </CardContent>
        </Card>,
      )

      expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Test Title")
      expect(screen.getByText("Test description")).toBeInTheDocument()
      expect(screen.getByText("Test content")).toBeInTheDocument()
    })
  })
})
