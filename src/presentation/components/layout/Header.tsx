import Link from 'next/link'
import { Container } from '@/shared/design-system/components/Container'
import NavLinks from '@/components/ui/nav-links'
import Image from 'next/image'

export function Header({
  hasNav = true
}: {
  hasNav?: boolean
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex min-h-16 items-center justify-center flex-col">
          <Link
            href="/"
            className="flex flex-grow flex-shrink flex-basis-1/3 items-center space-x-1"
          >
            <div className="h-14 w-14 relative">
              <Image
                src="/image/logo_circle.png"
                alt="Colheita Digital Logo"
                fill
              />
            </div>
            <span className="font-poppins font-bold text-xl">
              Colheita Digital
            </span>
          </Link>
          <Link
            href="/app"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            App
          </Link>
          <NavLinks hasNav={hasNav} />
        </div>
      </Container>
    </header>
  )
}
