import { siteConfig } from '@/config/seo'
import { services } from '@/config/contact'

export const dynamic = 'force-static'

export default function sitemap() {
  const baseUrl = siteConfig.siteUrl
  const lastModified = new Date().toISOString().split('T')[0]

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
