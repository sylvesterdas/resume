import Image from 'next/image'
import { useState } from 'react'

export default function OptimizedImage({ src, alt, ...props }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        {...props}
        priority={props.priority || false}
        onLoadingComplete={() => setIsLoading(false)}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${props.className || ''}`}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-primary-DEFAULT/20 animate-pulse" />
      )}
    </div>
  )
}