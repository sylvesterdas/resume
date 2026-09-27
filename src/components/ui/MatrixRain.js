'use client'
import { useEffect, useRef } from 'react'

// Characters to use in the rain
const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const fontSize = 16
const frameInterval = 50 // ms per drop step (20 fps for classic Matrix pace)
const introInterval = 16 // first fall runs at ~60 fps so the screen fills quickly

// Matrix-style falling characters that fill the nearest positioned parent,
// or the whole viewport behind the page when `fixed` is set.
export default function MatrixRain({ opacity = 0.3, fixed = false, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let drops = []
    let intro = true

    const resizeCanvas = () => {
      const { width, height } = fixed
        ? { width: window.innerWidth, height: window.innerHeight }
        : canvas.parentElement.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      drops = new Array(Math.floor(width / fontSize)).fill(1)
      intro = true
    }
    resizeCanvas()
    let observer
    if (fixed) {
      window.addEventListener('resize', resizeCanvas)
    } else {
      observer = new ResizeObserver(resizeCanvas)
      observer.observe(canvas.parentElement)
    }

    const matrix = () => {
      const rootStyles = getComputedStyle(document.documentElement)
      const primaryColor = rootStyles.getPropertyValue('--color-primary').trim()
      const textColor = rootStyles.getPropertyValue('--color-text').trim()

      ctx.fillStyle = `rgba(${primaryColor}, 0.08)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = `rgb(${textColor})`
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        drops[i]++

        // Reset drop to top with random delay
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
      if (intro && drops.every((d) => d === 0 || d * fontSize > canvas.height)) intro = false
    }

    let lastTime = 0
    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate)
      if (currentTime - lastTime >= (intro ? introInterval : frameInterval)) {
        matrix()
        lastTime = currentTime
      }
    }
    const start = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(animate)
    }
    const stop = () => cancelAnimationFrame(animationFrameId)

    // Reduced motion: paint a still frame of rain and never animate.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      drops = drops.map(() => Math.floor(Math.random() * 40))
      for (let i = 0; i < 40; i++) matrix()
    } else {
      start()
    }

    // Don't burn frames while the tab is in the background.
    const onVisibilityChange = () => {
      if (reduceMotion) return
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      stop()
    }
  }, [fixed])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${fixed ? 'fixed -z-10' : 'absolute'} inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  )
}
