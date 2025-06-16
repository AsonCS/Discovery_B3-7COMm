import Link from "next/link"
import { Container } from "@/shared/design-system/components/Container"
import { Button } from "@/shared/design-system/components/Button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CD</span>
            </div>
            <span className="font-poppins font-bold text-xl">Colheita Digital</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#problema" className="text-sm font-medium hover:text-primary transition-colors">
              Problema
            </Link>
            <Link href="#solucao" className="text-sm font-medium hover:text-primary transition-colors">
              Solução
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">
              Benefícios
            </Link>
            <Link href="#futuro" className="text-sm font-medium hover:text-primary transition-colors">
              Futuro
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Cadastrar</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
