import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/layout/Navigation'
import LoadingScreen from '@/components/LoadingScreen'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sylvester Das | Senior Software Engineer',
  description: 'Senior Software Engineer specializing in enterprise solutions, MEAN/MERN stack development, and scalable applications.',
  keywords: 'Software Engineer, Full Stack Developer, MEAN Stack, MERN Stack, Enterprise Solutions',
  openGraph: {
    title: 'Sylvester Das | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in enterprise solutions, MEAN/MERN stack development, and scalable applications.',
    images: [
      {
        url: '/images/sylvester-das-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sylvester Das',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LoadingScreen />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}