'use client'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Award, ArrowRight, ChevronDown } from 'lucide-react'
import SocialIcon from '@/components/ui/SocialIcon'
import HeroTerminal from '@/components/ui/HeroTerminal'
import { contact, mailtoLink } from '@/config/contact'

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-primary-dark/80 pointer-events-none" />

      <div className="relative container mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <motion.div
          className="text-center lg:text-left z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-accent/30 bg-primary-dark/70 backdrop-blur-sm text-sm text-text">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            Available for freelance projects
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-[1.05] text-text">
            Custom software that saves your business <span className="text-accent">hours every week</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted mb-4 max-w-xl mx-auto lg:mx-0">
            Automation, websites and web apps, Flutter mobile apps and Electron desktop apps.
            Fixed quotes, and you own the code.
          </p>

          <p className="text-sm md:text-base text-text-muted mb-10 font-mono">
            <span className="text-accent">Sylvester Das</span> · <span className="whitespace-nowrap">developer in {contact.locality}</span> · <span className="whitespace-nowrap">{contact.yearsExperience} years</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent-dark transition-colors"
            >
              Start a project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#services"
              onClick={scrollTo('services')}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-accent bg-primary/80 backdrop-blur-sm text-accent font-semibold hover:bg-primary-dark transition-colors"
            >
              See services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="inline-flex space-x-6 lg:pl-1"
          >
            <SocialIcon href="https://www.linkedin.com/in/sylvesterdas/" icon={Linkedin} tooltipText="LinkedIn Profile" />
            <SocialIcon href="https://github.com/sylvesterdas" icon={Github} tooltipText="GitHub Profile" />
            <SocialIcon href={mailtoLink()} icon={Mail} tooltipText="Send Email" />
            <SocialIcon href="https://www.credly.com/users/sylvester-das" icon={Award} tooltipText="Credly Profile" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <HeroTerminal />
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={scrollTo('about')}
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-accent/70 hover:text-accent animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  )
}
