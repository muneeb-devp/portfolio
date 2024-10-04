import './globals.css'

export const metadata = {
  title: 'Muneeb Mughal | Portfolio',
  description: 'Portfolio site create in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
