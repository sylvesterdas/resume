'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navigationData = {
  logo: {
    src: '/favicon.ico',
    alt: 'Sylvester Das'
  },
  items: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
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
          <button onClick={() => scrollTo('home')} className="relative w-8 h-8">
            <Image
              src={navigationData.logo.src}
              alt={navigationData.logo.alt}
              width={32}
              height={32}
              className="object-contain brightness-0 invert"
              priority
            />
          </button>
          
          <div className="hidden md:flex space-x-8">
            <NavItems items={navigationData.items} activeSection={activeSection} scrollTo={scrollTo} />
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-4">
              <NavItems items={navigationData.items} activeSection={activeSection} scrollTo={scrollTo} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

function NavItems({ items, activeSection, scrollTo }) {
  return items.map(({ id, label }) => (
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
  ))
}