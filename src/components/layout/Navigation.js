'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#2F4F4F]/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-[#8FBC8F] text-2xl font-bold">SD</a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative text-white hover:text-[#8FBC8F] transition-colors ${
                  activeSection === id ? 'text-[#8FBC8F]' : ''
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8FBC8F]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}