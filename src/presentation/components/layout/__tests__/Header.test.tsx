import { render, screen } from "@testing-library/react"
import { Header } from "../Header"

describe("Header Component", () => {
  it("should render the logo and brand name", () => {
    render(<Header />)

    expect(screen.getByText("CD")).toBeInTheDocument()
    expect(screen.getByText("Colheita Digital")).toBeInTheDocument()
  })

  it("should render navigation links", () => {
    render(<Header />)

    expect(screen.getByRole("link", { name: /problema/i })).toHaveAttribute("href", "#problema")
    expect(screen.getByRole("link", { name: /solução/i })).toHaveAttribute("href", "#solucao")
    expect(screen.getByRole("link", { name: /benefícios/i })).toHaveAttribute("href", "#beneficios")
    expect(screen.getByRole("link", { name: /futuro/i })).toHaveAttribute("href", "#futuro")
  })

  it("should render action buttons", () => {
    render(<Header />)

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /cadastrar/i })).toBeInTheDocument()
  })

  it("should have proper header structure", () => {
    render(<Header />)

    const header = screen.getByRole("banner")
    expect(header).toHaveClass("sticky", "top-0", "z-50", "w-full", "border-b")
  })

  it("should have accessible logo link", () => {
    render(<Header />)

    const logoLink = screen.getByRole("link", { name: /cd colheita digital/i })
    expect(logoLink).toHaveAttribute("href", "/")
  })

  it("should render with proper responsive classes", () => {
    render(<Header />)

    const nav = screen.getByRole("navigation")
    expect(nav).toHaveClass("hidden", "md:flex")
  })
})
