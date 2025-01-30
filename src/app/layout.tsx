import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SocialButtons from '@/components/SocialButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de desenvolvedor full-stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <SocialButtons />
      </body>
    </html>
  )
}
