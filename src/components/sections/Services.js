'use client'
import { motion } from 'framer-motion'
import { BadgeCheck, MapPin, Briefcase } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import { services, processSteps, contact } from '@/config/contact'

const trust = [
  { icon: Briefcase, text: `${contact.yearsExperience} years building production software` },
  { icon: BadgeCheck, text: 'Udyam-registered MSME: proper invoices for every project' },
  { icon: MapPin, text: `Based in ${contact.locality}, working with clients across India & worldwide` },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary/70">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Work With Me
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-accent mx-1"></div>
            <div className="w-2 h-2 bg-accent mx-1"></div>
          </div>
        </motion.h2>
        <p className="text-center text-text-muted max-w-2xl mx-auto mb-16">
          I take on freelance projects for businesses, startups and individuals. Here is what I do most often.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-text-muted mt-8">
          …and more: APIs, integrations, migrations, and maintenance of existing software.{' '}
          <a href="#contact" className="text-accent hover:underline">Ask me about your idea.</a>
        </p>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-16">
          {trust.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center p-4 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
              <Icon className="w-5 h-5 text-accent mr-3 shrink-0" />
              <span className="text-sm text-text">{text}</span>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-accent text-center mb-8">How it works</h3>
          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative p-5 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
                <span className="text-accent font-mono text-sm">0{index + 1}</span>
                <h4 className="text-lg font-bold text-text mt-1 mb-2">{step.title}</h4>
                <p className="text-sm text-text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
