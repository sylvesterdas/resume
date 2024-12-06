import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sylvester Das - Software Developer',
  description: 'Full stack developer specializing in MEAN/MERN stack development, with expertise in modern web and mobile applications.',
  keywords: 'Software developer, web application developer, full stack developer, MEAN stack, MERN stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}