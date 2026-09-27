import { siteConfig } from '@/config/seo'

export const dynamic = 'force-static'

// AI search and assistant crawlers, named explicitly so they are welcome even if the default rule tightens later
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
]

export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/private/',
        },
        {
          userAgent: aiCrawlers,
          allow: '/',
        },
      ],
      sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    };
}
