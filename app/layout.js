import './globals.css'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import ThemeProvider from '@/components/Providers/ThemeProvider'
import Header from '@/components/Header'
import LenisProvider from '@/components/Providers/LenisProvider'

export const metadata = {
  title: 'Muneeb Mughal | Portfolio',
  description:
    'Explore the innovative projects and professional journey of Muneeb Mughal, a passionate developer specializing in creating dynamic and responsive web applications',
}

const bricolage = Bricolage_Grotesque({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jetbrainsMono.variable}`}>
      <body className={bricolage.className}>
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
