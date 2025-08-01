'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-20 text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          GET IN TOUCH
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-accent mx-1"></div>
            <div className="w-2 h-2 bg-accent mx-1"></div>
          </div>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a 
              href="mailto:you@sylvesterdas.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-8 bg-primary-dark rounded-lg border border-accent/20 hover:border-accent/40 transition-colors group"
            >
              <Mail className="w-6 h-6 text-accent mr-4 group-hover:scale-110 transition-transform" />
              <span className="text-text">you@sylvesterdas.com</span>
            </motion.a>

            <motion.a 
              href="https://maps.app.goo.gl/kEsChNZeC8r5ECbJ9"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-8 bg-primary-dark rounded-lg border border-accent/20 hover:border-accent/40 transition-colors group"
            >
              <MapPin className="w-6 h-6 text-accent mr-4 group-hover:scale-110 transition-transform" />
              <span className="text-text">India</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}