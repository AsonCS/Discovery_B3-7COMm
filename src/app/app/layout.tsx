export const metadata = {
  metadataBase: new URL(
    'https://discovery-b3-7comm.vercel.app/app/'
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
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
