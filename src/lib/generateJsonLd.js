import { siteConfig } from '@/config/seo'
import { contact, services } from '@/config/contact'

const personId = `${siteConfig.siteUrl}/#person`
const businessId = `${siteConfig.siteUrl}/#business`

const address = {
  '@type': 'PostalAddress',
  addressLocality: contact.locality,
  addressRegion: contact.region,
  addressCountry: contact.country,
}

const areaServed = [
  { '@type': 'City', name: contact.locality },
  { '@type': 'State', name: contact.region },
  { '@type': 'Country', name: contact.countryName },
  'Worldwide',
]

// Escape "<" so a string in the data can never close the <script> tag early
export const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c')

export function generateSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: contact.name,
        jobTitle: 'Freelance Software Developer',
        url: siteConfig.siteUrl,
        email: `mailto:${contact.email}`,
        telephone: contact.telephone,
        address,
        sameAs: [
          'https://www.linkedin.com/in/sylvesterdas/',
          'https://github.com/sylvesterdas',
          'https://www.minifyn.com'
        ],
        knowsAbout: [
          'Business Process Automation',
          'Web Application Development',
          'Flutter',
          'Cross-platform Mobile App Development',
          'Electron',
          'Desktop Application Development',
          'React',
          'Next.js',
          'Node.js',
          'API Integration',
          'Cloud Deployment'
        ],
        alumniOf: {
          '@type': 'Organization',
          name: 'University of Mumbai, Mumbai, IN'
        }
      },
      {
        '@type': 'ProfessionalService',
        '@id': businessId,
        name: `${contact.name}: Freelance Software Development`,
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/images/og/home.jpg`,
        logo: `${siteConfig.siteUrl}/images/general/icon-512.png`,
        description: siteConfig.description,
        email: contact.email,
        telephone: contact.telephone,
        address,
        areaServed,
        priceRange: '₹₹',
        founder: { '@id': personId },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software development services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              url: `${siteConfig.siteUrl}/services/${service.slug}`
            }
          }))
        }
      }
    ]
  }
}

export function generateServiceJsonLd(service) {
  const url = `${siteConfig.siteUrl}/services/${service.slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        serviceType: service.shortTitle,
        description: service.seoDescription,
        url,
        provider: { '@id': businessId },
        areaServed
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: service.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a }
        }))
      }
    ]
  }
}
