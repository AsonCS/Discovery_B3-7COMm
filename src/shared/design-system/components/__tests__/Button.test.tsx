"use client"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../Button"
import { jest } from "@jest/globals"
import React from "react"

describe("Button Component", () => {
  it("should render with default props", () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-primary", "text-primary-foreground")
  })

  it("should render different variants correctly", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-primary")

    rerender(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-secondary")

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole("button")).toHaveClass("border", "border-input")

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole("button")).toHaveClass("hover:bg-accent")
  })

  it("should render different sizes correctly", () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-9", "px-3", "text-sm")

    rerender(<Button size="md">Medium</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-10", "py-2", "px-4")

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-11", "px-8", "text-lg")
  })

  it("should handle fullWidth prop", () => {
    render(<Button fullWidth>Full Width</Button>)
    expect(screen.getByRole("button")).toHaveClass("w-full")
  })

  it("should handle disabled state", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
    expect(button).toHaveClass("disabled:opacity-50", "disabled:pointer-events-none")
  })

  it("should handle click events", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Clickable</Button>)

    await user.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("should not trigger click when disabled", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    )

    await user.click(screen.getByRole("button"))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("should accept custom className", () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByRole("button")).toHaveClass("custom-class")
  })

  it("should forward ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref Button</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it("should have proper accessibility attributes", () => {
    render(<Button>Accessible Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("type", "button")
  })
})
