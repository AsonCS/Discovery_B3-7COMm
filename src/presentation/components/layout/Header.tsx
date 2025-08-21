import Link from 'next/link'
import { Container } from '@/shared/design-system/components/bkp/Container'
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
                <div className="flex h-16 items-center justify-center">
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
                        <span
                            className="font-poppins font-bold text-xl"
                            style={{
                                color: 'var(--primary)'
                            }}
                        >
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
