import { useEffect } from 'react'

export function useScrollPerformance() {
  useEffect(() => {
    let requestId
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      requestId = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const direction = scrollY > lastScrollY ? 'down' : 'up'
        
        document.documentElement.style.setProperty(
          '--scroll-direction', 
          direction
        )
        document.documentElement.style.setProperty(
          '--scroll-progress',
          (scrollY / (document.documentElement.scrollHeight - window.innerHeight)).toString()
        )
        
        lastScrollY = scrollY
        requestId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (requestId) {
        window.cancelAnimationFrame(requestId)
      }
    }
  }, [])
}