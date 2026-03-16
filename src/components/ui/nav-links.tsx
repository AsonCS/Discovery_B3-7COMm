'use client'

import Link from 'next/link'

export default function NavLinks({
  hasNav
}: {
  hasNav: boolean
}) {
  if (!hasNav) return null

  return (
    <nav className="flex-grow flex-shrink flex-basis-1/3 flex items-center space-x-6">
      <Link
        href="#problema"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Problema
      </Link>
      <Link
        href="#solucao"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Solução
      </Link>
      <Link
        href="#beneficios"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Benefícios
      </Link>
      <Link
        href="#futuro"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Futuro
      </Link>
      <Link
        href="/docs/resumo"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Docs
      </Link>
    </nav>
  )
}
