'use client'
import { useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { contact, services, budgets, timelines, whatsappLink, mailtoLink } from '@/config/contact'

const otherService = 'Something else'

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-primary-dark border border-accent/20 text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors'

// The ?service=<slug> query from the service pages' "Start a project" links
const noopSubscribe = () => () => {}
const getLinkedService = () => {
  const slug = new URLSearchParams(window.location.search).get('service')
  return services.find((s) => s.slug === slug)?.title ?? ''
}

const tileClass =
  'flex items-center justify-center p-6 bg-primary-dark rounded-lg border border-accent/20 hover:border-accent/40 transition-colors group text-center'

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const linkedService = useSyncExternalStore(noopSubscribe, getLinkedService, () => '')
  // Until the visitor picks a service themselves, fall back to the linked one
  const service = form.service || linkedService

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const brief = () =>
    [
      `Hi Sylvester, I'm ${form.name.trim()}.`,
      '',
      `Service: ${service}`,
      form.budget ? `Budget: ${form.budget}` : null,
      form.timeline ? `Timeline: ${form.timeline}` : null,
      '',
      form.message.trim(),
    ]
      .filter((line) => line !== null)
      .join('\n')

  const send = (channel) => {
    if (!formRef.current.reportValidity()) return
    const text = brief()
    const url =
      channel === 'whatsapp'
        ? whatsappLink(text)
        : mailtoLink(`Project enquiry: ${service} (${form.name.trim()})`, text)
    if (channel === 'whatsapp') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-primary/70 overflow-hidden">
      <Image
        src="/images/general/contact-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
      <div className="relative container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          START A PROJECT
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-accent mx-1"></div>
            <div className="w-2 h-2 bg-accent mx-1"></div>
          </div>
        </motion.h2>
        <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
          Tell me a little about what you need. I usually reply within one working day with questions or a quote.
        </p>

        <div className="max-w-3xl mx-auto">
          <motion.form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault()
              send('whatsapp')
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            <label className="block">
              <span className="block text-sm text-text-muted mb-1">Your name *</span>
              <input
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={update}
                className={inputClass}
                placeholder="Jane Doe"
              />
            </label>

            <label className="block">
              <span className="block text-sm text-text-muted mb-1">What do you need? *</span>
              <select name="service" required value={service} onChange={update} className={inputClass}>
                <option value="" disabled>Choose a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value={otherService}>{otherService}</option>
              </select>
            </label>

            <label className="block">
              <span className="block text-sm text-text-muted mb-1">Budget</span>
              <select name="budget" value={form.budget} onChange={update} className={inputClass}>
                <option value="">Prefer not to say</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="block text-sm text-text-muted mb-1">Timeline</span>
              <select name="timeline" value={form.timeline} onChange={update} className={inputClass}>
                <option value="">Not decided</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="block text-sm text-text-muted mb-1">Project details *</span>
              <textarea
                name="message"
                required
                minLength={20}
                rows={5}
                value={form.message}
                onChange={update}
                className={inputClass}
                placeholder="What should it do, who will use it, and is there anything already in place?"
              />
            </label>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent-dark transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={() => send('email')}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send via Email
              </button>
            </div>
            <p className="md:col-span-2 text-xs text-text-muted text-center">
              Opens WhatsApp or your email app with the message ready to send. Nothing is stored on this site.
            </p>
          </motion.form>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <motion.a
              href={mailtoLink()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={tileClass}
            >
              <Mail className="w-5 h-5 text-accent mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-text text-sm break-all">{contact.email}</span>
            </motion.a>

            <motion.a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={tileClass}
            >
              <MessageCircle className="w-5 h-5 text-accent mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-text text-sm">{contact.whatsappDisplay}</span>
            </motion.a>

            <motion.a
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={tileClass}
            >
              <MapPin className="w-5 h-5 text-accent mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-text text-sm">{contact.locationLabel}</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
