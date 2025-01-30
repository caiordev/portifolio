import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import SocialButtons from '@/components/SocialButtons'
import { ClientLayout } from '@/components/ClientLayout'

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors`}>
        <ClientLayout>
          {children}
          <SocialButtons />
        </ClientLayout>
      </body>
    </html>
  )
}
