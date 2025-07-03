import type React from 'react'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
