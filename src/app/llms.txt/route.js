import { contact, processSteps, services } from '@/config/contact'
import { siteConfig } from '@/config/seo'

export const dynamic = 'force-static'

// Plain-text summary for AI assistants and answer engines (https://llmstxt.org), built from the same config as the pages
export function GET() {
  const url = siteConfig.siteUrl
  const lines = [
    `# ${contact.name}: Freelance Software Developer`,
    '',
    `> ${siteConfig.description}`,
    '',
    `${contact.name} is a freelance software developer based in ${contact.locality}, ${contact.region}, ${contact.countryName}, with ${contact.yearsExperience} years of experience. He works with businesses, startups and individuals across India and worldwide, fully remotely. He is a Udyam-registered MSME, so businesses get a proper invoice. Every project has a fixed quote, and the client owns the source code.`,
    '',
    '## Services',
    '',
    ...services.map((s) => `- [${s.title}](${url}/services/${s.slug}/): ${s.oneLiner}`),
    '',
    '## How a project works',
    '',
    ...processSteps.map((step, i) => `${i + 1}. ${step.title}: ${step.text}`),
    '',
    '## Contact',
    '',
    `- Email: ${contact.email}`,
    `- WhatsApp / phone: ${contact.whatsappDisplay}`,
    `- Contact form: ${url}/#contact`,
    `- Location: ${contact.locationLabel}`,
    '- LinkedIn: https://www.linkedin.com/in/sylvesterdas/',
    '- GitHub: https://github.com/sylvesterdas',
    '',
    ...services.flatMap((s) => [
      `## ${s.title}`,
      '',
      s.problem,
      '',
      'What he builds:',
      ...s.bullets.map((b) => `- ${b}`),
      '',
      'FAQ:',
      ...s.faqs.flatMap(({ q, a }) => [`- Q: ${q}`, `  A: ${a}`]),
      '',
    ]),
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
