import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/layout/Navigation'
import localFont from 'next/font/local'
import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { generatePersonJsonLd } from '@/lib/generateJsonLd';
import Script from 'next/script'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

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
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Navigation />
        {children}
        <Analytics />

        {/* LinkedIn Badge Script */}
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}