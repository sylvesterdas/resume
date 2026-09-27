import Navigation from '@/components/layout/Navigation'
import MatrixRain from '@/components/ui/MatrixRain'
import ScrollToTop from '@/components/ui/ScrollToTop'
import localFont from 'next/font/local'
import { siteConfig } from '@/config/seo';
import { generateSiteJsonLd, serializeJsonLd } from '@/lib/generateJsonLd';
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

/** @type {import('next').Metadata} */
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
};

export const viewport = {
  themeColor: '#1A362F',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(generateSiteJsonLd())
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-primary`}>
        <MatrixRain fixed opacity={0.25} />
        <Navigation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
