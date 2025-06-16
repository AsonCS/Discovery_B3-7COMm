import { render, screen } from "@testing-library/react"
import { Footer } from "../Footer"

describe("Footer Component", () => {
  it("should render the logo and brand name", () => {
    render(<Footer />)

    expect(screen.getByText("CD")).toBeInTheDocument()
    expect(screen.getByText("Colheita Digital")).toBeInTheDocument()
  })

  it("should render the company description", () => {
    render(<Footer />)

    expect(screen.getByText(/democratizando o acesso a capital/i)).toBeInTheDocument()
  })

  it("should render all footer sections", () => {
    render(<Footer />)

    expect(screen.getByText("Plataforma")).toBeInTheDocument()
    expect(screen.getByText("Recursos")).toBeInTheDocument()
    expect(screen.getByText("Empresa")).toBeInTheDocument()
  })

  it("should render platform links", () => {
    render(<Footer />)

    expect(screen.getByRole("link", { name: /como funciona/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /para empreendedores/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /para investidores/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /segurança/i })).toBeInTheDocument()
  })

  it("should render resource links", () => {
    render(<Footer />)

    expect(screen.getByRole("link", { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /documentação/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /api/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /suporte/i })).toBeInTheDocument()
  })

  it("should render company links", () => {
    render(<Footer />)

    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /equipe/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /carreiras/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /contato/i })).toBeInTheDocument()
  })

  it("should render copyright and legal links", () => {
    render(<Footer />)

    expect(screen.getByText(/© 2024 colheita digital/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /privacidade/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /termos/i })).toBeInTheDocument()
  })

  it("should have proper footer structure", () => {
    render(<Footer />)

    const footer = screen.getByRole("contentinfo")
    expect(footer).toHaveClass("border-t", "bg-muted/50")
  })
})
