import Link from 'next/link'

// GitHub Pages serves this page for unknown paths and can't send 301s,
// so old /blog URLs are forwarded to the MiniFyn blog from the browser.
const blogRedirect = `
  var p = location.pathname;
  if (p === '/blog' || p.indexOf('/blog/') === 0) {
    location.replace('https://www.minifyn.com' + p + location.search + location.hash);
  }
`

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#2F4F4F] text-white">
      <script dangerouslySetInnerHTML={{ __html: blogRedirect }} />
      <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
        <span className="text-white">404</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">Page Not Found</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-12">Could not find the requested resource</p>
      <Link href="/" className="px-6 py-3 border-2 border-[#8FBC8F] text-[#8FBC8F] rounded-lg hover:bg-[#8FBC8F] hover:text-white transition duration-300 text-lg font-semibold">
        Return Home
      </Link>
    </div>
  )
}
