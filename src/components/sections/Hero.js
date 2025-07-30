'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Mail, Linkedin, Github, Award } from 'lucide-react'
import SocialIcon from '@/components/ui/SocialIcon'

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
      const rootStyles = getComputedStyle(document.documentElement);
      const primaryColor = rootStyles.getPropertyValue('--color-primary').trim();
      const textColor = rootStyles.getPropertyValue('--color-text').trim();

      ctx.fillStyle = `rgba(${primaryColor}, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgb(${textColor})`;
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
    <section id="home" className="h-screen relative overflow-hidden bg-primary">
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
            <span className="text-text">Sylvester </span>
            <span className="text-accent">Das</span>
          </motion.div>
          
          <motion.p className="text-lg md:text-xl text-text-muted mb-12">
            Architecting Scalable Solutions for Enterprise Innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="inline-flex space-x-6"
          >
            <SocialIcon href="https://www.linkedin.com/in/sylvesterdas/" icon={Linkedin} tooltipText="LinkedIn Profile" />
            <SocialIcon href="https://github.com/sylvesterdas" icon={Github} tooltipText="GitHub Profile" />
            <SocialIcon href="mailto:you@sylvesterdas.com" icon={Mail} tooltipText="Send Email" />
            <SocialIcon href="https://www.credly.com/users/sylvester-das" icon={Award} tooltipText="Credly Profile" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}