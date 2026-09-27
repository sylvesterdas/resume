import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BadgeCheck, Briefcase, CheckCircle2, MapPin, MessageCircle } from 'lucide-react'
import { contact, getService, processSteps, services, whatsappLink } from '@/config/contact'
import { ogVersion, siteConfig } from '@/config/seo'
import { generateServiceJsonLd, serializeJsonLd } from '@/lib/generateJsonLd'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const path = `/services/${service.slug}`
  const image = `/images/og/${service.slug}.jpg?v=${ogVersion}`
  return {
    title: service.metaTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: { canonical: path },
    openGraph: {
      ...siteConfig.openGraph,
      type: 'website',
      url: path,
      title: `${service.metaTitle} | Sylvester Das`,
      description: service.seoDescription,
      images: [{ url: image, width: 1200, height: 630, alt: service.seoTitle }],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${service.metaTitle} | Sylvester Das`,
      description: service.seoDescription,
      images: [image],
    },
  }
}

const sectionTitle = 'text-2xl md:text-3xl font-bold text-accent mb-6'

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const contactHref = `/?service=${service.slug}#contact`
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(generateServiceJsonLd(service)) }}
      />

      <div className="relative overflow-hidden pt-28 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/70 pointer-events-none" />
        <div className="relative container mx-auto px-6 max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-text">{service.shortTitle}</span>
          </nav>

          <header className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-text leading-tight mb-6">{service.seoTitle}</h1>
              <p className="text-lg md:text-xl text-text-muted mb-8">{service.oneLiner}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent-dark transition-colors"
                >
                  Start a project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href={whatsappLink(`Hi Sylvester, I'd like to talk about ${service.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent bg-primary/80 backdrop-blur-sm text-accent font-semibold hover:bg-primary-dark transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-accent/20 shadow-2xl shadow-black/40">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
            </div>
          </header>
        </div>
      </div>

      <div className="bg-primary/70 pt-12 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
        <section className="mb-16">
          <h2 className={sectionTitle}>The problem</h2>
          <p className="text-text-muted text-lg leading-relaxed">{service.problem}</p>
        </section>

        <section className="mb-16">
          <h2 className={sectionTitle}>What I build</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start p-4 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
                <CheckCircle2 className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span className="text-text">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className={sectionTitle}>What you get</h2>
          <ul className="space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start text-text-muted">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 mr-3 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className={sectionTitle}>How it works</h2>
          <ol className="grid sm:grid-cols-2 gap-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="p-5 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
                <span className="text-accent font-mono text-sm">0{index + 1}</span>
                <h3 className="text-lg font-bold text-text mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16 grid md:grid-cols-3 gap-4">
          <div className="flex items-center p-4 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
            <Briefcase className="w-5 h-5 text-accent mr-3 shrink-0" />
            <span className="text-sm text-text">{contact.yearsExperience} years building production software</span>
          </div>
          <div className="flex items-center p-4 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
            <BadgeCheck className="w-5 h-5 text-accent mr-3 shrink-0" />
            <span className="text-sm text-text">Udyam-registered MSME</span>
          </div>
          <div className="flex items-center p-4 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
            <MapPin className="w-5 h-5 text-accent mr-3 shrink-0" />
            <span className="text-sm text-text">{contact.locationLabel}</span>
          </div>
        </section>

        <section className="mb-16">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
          <div className="space-y-3">
            {service.faqs.map(({ q, a }) => (
              <details key={q} className="group p-5 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/10">
                <summary className="cursor-pointer list-none flex items-center justify-between text-text font-semibold">
                  {q}
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-text-muted mt-3">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/30 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">Have a project in mind?</h2>
          <p className="text-text-muted mb-6">
            Send a short brief and I will reply within one working day with questions or a fixed quote.
          </p>
          <Link
            href={contactHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent-dark transition-colors"
          >
            Start a project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>

        <section>
          <h2 className={sectionTitle}>Other services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="overflow-hidden rounded-lg bg-primary-dark/90 backdrop-blur-sm border border-accent/20 hover:border-accent/50 transition-colors group"
              >
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="block text-text font-semibold mb-1">{s.title}</span>
                  <span className="inline-flex items-center text-accent text-sm">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        </div>
      </div>
    </main>
  )
}
