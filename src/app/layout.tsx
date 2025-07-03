import type React from 'react'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Footer } from '@/presentation/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://discovery-b3-7comm.vercel.app/'
  ),
  icons: {
    icon: '/image/logo_circle.png'
  },
  title: {
    default:
      'Colheita Digital - Tokenize-se: O Valor Além da Moeda',
    template: '%s | Colheita Digital'
  },
  description:
    'Plataforma inovadora que permite pequenos empreendedores tokenizarem seus ativos produtivos e criarem um ecossistema de fidelidade local através da tecnologia blockchain.',
  verification: {
    google: 'your-google-verification-code'
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        <link
          rel="canonical"
          href="https://discovery-b3-7comm.vercel.app/"
        />
      </head>
      <body className="font-inter antialiased bg-background text-foreground">
        {children}
        <Footer />
      </body>
    </html>
  )
}
