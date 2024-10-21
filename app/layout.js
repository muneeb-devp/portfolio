import './globals.css'
import { Nunito } from 'next/font/google'
import ThemeProvider from '@/components/Providers/ThemeProvider'
import Header from '@/components/Header'
import LenisProvider from '@/components/Providers/LenisProvider'

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
          <Header />
          <LenisProvider>
            <main>{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
