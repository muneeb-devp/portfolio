import './globals.css'
import { Nunito } from 'next/font/google'
import ThemeProvider from '@/components/Providers/ThemeProvider'

export const metadata = {
  title: 'Muneeb Mughal | Portfolio',
  description: 'Portfolio site create in Next.js',
}

const nunito = Nunito({ weight: ['400', '700'], preload: false })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
