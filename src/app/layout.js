import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
)
}
