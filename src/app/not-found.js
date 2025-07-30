import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#2F4F4F] text-white">
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
