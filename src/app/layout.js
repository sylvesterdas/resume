import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/layout/Navigation'
import { Inter } from 'next/font/google'
import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { generatePersonJsonLd } from '@/lib/generateJsonLd';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

/** @type {Metadata} */
export const metadata = {
  metadataBase: siteConfig.siteUrl,
  title: {
    default: siteConfig.title,
    template: '%s | Sylvester Das'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonJsonLd())
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}