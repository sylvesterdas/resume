import { siteConfig } from '@/config/seo'

export const dynamic = 'force-static'

export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    };
}