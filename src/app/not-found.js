import Link from 'next/link'

// GitHub Pages serves this page for unknown paths and can't send 301s, so old
// /blog URLs are forwarded to the MiniFyn blog from the browser.
const blogRedirect = `
  var p = location.pathname;
  if (p === '/blog' || p.indexOf('/blog/') === 0) location.replace('https://www.minifyn.com' + p);
`

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[min(100svh,48rem)] px-6 text-center">
      <script dangerouslySetInnerHTML={{ __html: blogRedirect }} />
      <div className="p-10 rounded-xl bg-primary-dark/90 backdrop-blur-sm border border-accent/20">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight text-accent">404</h1>
        <h2 className="text-2xl md:text-3xl text-text mb-4">Page not found</h2>
        <p className="text-lg text-text-muted mb-10">Could not find the requested page.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent-dark transition-colors">
            Return home
          </Link>
          <Link href="/services" className="px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-primary-dark transition-colors">
            See services
          </Link>
        </div>
      </div>
    </main>
  )
}
