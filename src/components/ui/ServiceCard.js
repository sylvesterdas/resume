import Link from 'next/link'
import Image from 'next/image'
import { Workflow, Globe, Smartphone, Monitor, ArrowRight } from 'lucide-react'

const icons = {
  automation: Workflow,
  'web-applications': Globe,
  'flutter-mobile-apps': Smartphone,
  'electron-desktop-apps': Monitor,
}

export default function ServiceCard({ service, headingLevel: Heading = 'h3' }) {
  const Icon = icons[service.slug] || Workflow
  return (
    <Link
      href={`/services/${service.slug}`}
      className="flex flex-col h-full overflow-hidden bg-primary-dark/90 backdrop-blur-sm rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 512px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent" />
      </div>
      <div className="flex flex-col flex-1 p-6 pt-2">
        <div className="flex items-center mb-4">
          <Icon className="w-7 h-7 text-accent mr-3 shrink-0" />
          <Heading className="text-xl font-bold text-text">{service.title}</Heading>
        </div>
        <p className="text-text-muted mb-4">{service.oneLiner}</p>
        <ul className="space-y-1 mb-6 text-sm text-text-muted">
          {service.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center text-accent text-sm font-medium">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
