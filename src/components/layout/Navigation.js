'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationData = {
  logo: {
    src: '/favicon.ico',
    alt: 'Sylvester Das'
  },
  items: [
    { id: 'home', label: 'Home', type: 'link', path: '/' },
    { id: 'about', label: 'About', type: 'scroll', target: 'about' },
    { id: 'skills', label: 'Skills', type: 'scroll', target: 'skills' },
    { id: 'resume', label: 'Resume', type: 'scroll', target: 'resume' },
    { id: 'contact', label: 'Contact', type: 'scroll', target: 'contact' },
    { id: 'blog', label: 'Blog', type: 'link', path: '/blog' }
  ]
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentActive = 'home'

      // Check if scrolled to the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentActive = 'contact'
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          const rect = section.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            currentActive = section.id
            break
          }
        }
      }
      setActiveSection(currentActive)
    }

    // Set active section based on pathname for non-scroll links first
    if (pathname === '/') {
      setActiveSection('home')
      // Only add scroll listener if on the homepage
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Set initial active section based on scroll
    } else if (pathname.startsWith('/blog')) {
      setActiveSection('blog')
    } else {
      setActiveSection('') // No active section for other pages
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const scrollToSection = (id) => {
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
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative w-8 h-8">
            <Image
              src={navigationData.logo.src}
              alt={navigationData.logo.alt}
              width={32}
              height={32}
              className="object-contain brightness-0 invert"
              priority
              sizes="32px"
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavItems items={navigationData.items} activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text"
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
              <NavItems items={navigationData.items} activeSection={activeSection} scrollToSection={scrollToSection} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

function NavItems({ items, activeSection, scrollToSection }) {
  const pathname = usePathname()

  return items.map((item) => {
    const isActive = item.type === 'link' ? pathname === item.path : activeSection === item.target

    if (item.type === 'link') {
      return (
        <Link
          key={item.id}
          href={item.path}
          className={`relative text-text hover:text-accent transition-colors ${
            isActive ? 'text-accent' : ''
          }`}
        >
          {item.label}
          {isActive && (
            <motion.div
              layoutId="activeSection"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
            />
          )}
        </Link>
      )
    } else { // item.type === 'scroll'
      if (pathname === '/') {
        // On homepage, behave as a scroll button
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.target)}
            className={`relative text-text hover:text-accent transition-colors ${
              isActive ? 'text-accent' : ''
            }`}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
              />
            )}
          </button>
        )
      } else {
        // On other pages, behave as a link to homepage + scroll
        return (
          <Link
            key={item.id}
            href={`/#${item.target}`}
            className={`relative text-text hover:text-accent transition-colors ${
              isActive ? 'text-accent' : ''
            }`}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
              />
            )}
          </Link>
        )
      }
    }
  })
}
