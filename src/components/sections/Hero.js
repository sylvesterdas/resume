'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Increasing font size and adjusting colors for better visibility
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = new Array(Math.floor(columns)).fill(1)
    
    // Characters to use in the rain
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const matrix = () => {
      // Using a darker fade for more visible trails
      ctx.fillStyle = 'rgba(47, 79, 79, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Brighter green for better visibility
      ctx.fillStyle = '#90EE90'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        // Randomly select a character from our char set
        const text = chars[Math.floor(Math.random() * chars.length)]
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Move the drop down
        drops[i]++

        // Reset drop to top with random delay
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
    }

    const animate = () => {
      matrix()
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Rest of the component remains the same
  return (
    <section className="h-screen relative overflow-hidden bg-[#2F4F4F]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.3 }}
      />
      
      <div className="relative h-full flex items-center justify-center">
        <motion.div 
          className="text-center z-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div 
            className="text-7xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">Sylvester </span>
            <span className="text-[#8FBC8F]">Das</span>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Engineering Digital Solutions
          </motion.p>

          <motion.div 
            className="space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a 
              href="https://www.linkedin.com/in/sylvesterdas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8FBC8F] text-white px-8 py-3 rounded hover:bg-[#729972] transition-colors"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="#contact" 
              className="inline-block border border-[#8FBC8F] text-[#8FBC8F] px-8 py-3 rounded hover:bg-[#8FBC8F]/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}