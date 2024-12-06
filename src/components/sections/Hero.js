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
          <motion.div className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">Sylvester </span>
            <span className="text-[#8FBC8F]">Das</span>
          </motion.div>
          
          <motion.p className="text-lg md:text-xl text-gray-300 mb-12">
            Architecting Scalable Solutions for Enterprise Innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="inline-block"
          >
            <a 
              href="https://www.linkedin.com/in/sylvesterdas/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 flex items-center justify-center group"
            >
              {/* Rhombus background */}
              <div className="absolute w-full h-full border-2 border-[#8FBC8F] transform rotate-45 transition-all duration-300 group-hover:border-opacity-60" />
              
              {/* LinkedIn icon */}
              <svg 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#8FBC8F] relative z-10 group-hover:scale-110 transition-transform"
              >
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}