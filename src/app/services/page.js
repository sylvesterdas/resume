import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Briefcase, MapPin, MessageCircle } from 'lucide-react'
import { contact, processSteps, services, whatsappLink } from '@/config/contact'
import { ogVersion, siteConfig } from '@/config/seo'
import ServiceCard from '@/components/ui/ServiceCard'

const title = 'Freelance Software Development Services, Trivandrum'
const description =
  'Automation, websites, web apps, Flutter mobile apps and Electron desktop apps by a freelance developer in Thiruvananthapuram with 10+ years of experience.'
const ogImage = { url: `/images/og/services.jpg?v=${ogVersion}`, width: 1200, height: 630, alt: 'Sylvester Das: freelance software development services' }

export const metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    ...siteConfig.openGraph,
    type: 'website',
    url: '/services',
    title: `${title} | Sylvester Das`,
    description,
    images: [ogImage],
  },
  twitter: {
    ...siteConfig.twitter,
    title: `${title} | Sylvester Das`,
    description,
    images: [ogImage.url],
  },
}

const sectionTitle = 'text-2xl md:text-3xl font-bold text-accent mb-6'

export default function ServicesPage() {
  const trust = [
    { icon: Briefcase, text: `${contact.yearsExperience} years building production software` },
    { icon: BadgeCheck, text: 'Udyam-registered MSME: proper invoices for every project' },
    { icon: MapPin, text: `Based in ${contact.locality}, working with clients across India & worldwide` },
  ]

  return (
    <main className="min-h-screen">
      <div className="relative overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/70 pointer-events-none" />
        <div className="relative container mx-auto px-6 max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Services</span>
          </nav>

          <header className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-text leading-tight mb-6">
                Software for your business, built to run on its own
              </h1>
              <p className="text-lg md:text-xl text-text-muted mb-8 max-w-3xl">
                I am a freelance developer with {contact.yearsExperience} years of experience. I build automations,
                websites and web applications, Flutter mobile apps and Electron desktop apps for businesses, startups
                and individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent-dark transition-colors"
                >
                  Start a project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href={whatsappLink("Hi Sylvester, I'd like to talk about a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent bg-primary/80 backdrop-blur-sm text-accent font-semibold hover:bg-primary-dark transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`relative aspect-square overflow-hidden rounded-xl border border-accent/20 shadow-xl shadow-black/30 group ${index % 2 ? 'translate-y-6' : ''}`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 50vw, 260px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-sm font-semibold text-text">{service.shortTitle}</span>
                </Link>
              ))}
            </div>
          </header>
        </div>
      </div>

      <div className="bg-primary/70 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
        <section className="mb-16">
          <h2 className="sr-only">Services</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <p className="text-text-muted mt-8">
            …and more: APIs, integrations, migrations, and maintenance of existing software.{' '}
            <Link href="/#contact" className="text-accent hover:underline">Ask me about your idea.</Link>
          </p>
        </section>

        <section className="mb-16 grid md:grid-cols-3 gap-4">
          {trust.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center p-4 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
              <Icon className="w-5 h-5 text-accent mr-3 shrink-0" />
              <span className="text-sm text-text">{text}</span>
            </div>
          ))}
        </section>

        <section>
          <h2 className={sectionTitle}>How it works</h2>
          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="p-5 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
                <span className="text-accent font-mono text-sm">0{index + 1}</span>
                <h3 className="text-lg font-bold text-text mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
        </div>
      </div>
    </main>
  )
}
