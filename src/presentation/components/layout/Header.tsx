import Link from 'next/link'
import { Container } from '@/shared/design-system/components/Container'
import NavLinks from '@/components/ui/nav-links'

export function Header({
  hasNav = true
}: {
  hasNav?: boolean
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-center">
          <Link
            href="/"
            className="flex flex-grow flex-shrink flex-basis-1/3 items-center space-x-2"
          >
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                CD
              </span>
            </div>
            <span className="font-poppins font-bold text-xl">
              Colheita Digital
            </span>
          </Link>

          <NavLinks hasNav={hasNav} />

          <div className="flex flex-grow flex-shrink flex-basis-1/3 items-center space-x-4">
            {/*
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Cadastrar</Button>
            */}
          </div>
        </div>
      </Container>
    </header>
  )
}
