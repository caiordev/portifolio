'use client'

import { ThemeProvider } from './ThemeProvider'
import { ThemeToggle } from './ThemeToggle'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ThemeToggle />
        {children}
      </div>
    </ThemeProvider>
  )
}
