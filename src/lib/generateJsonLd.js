export function generatePersonJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sylvester Das',
      jobTitle: 'Senior Software Engineer',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      sameAs: [
        'https://www.linkedin.com/in/sylvesterdas/',
        'https://github.com/sylvesterdas',
        'https://www.minifyn.com'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'WizardTales GmbH, Ratingen, Germany'
      },
      knowsAbout: [
        'Software Engineering',
        'Enterprise Solutions Architecture',
        'Cloud Computing',
        'Next.js',
        'React',
        'Node.js',
        'Android App Development',
        'Full Stack Development',
        'On-Device AI & Media Processing',
        'Cybersecurity & Threat Detection'
      ],
      alumniOf: {
        '@type': 'Organization',
        name: 'University of Mumbai, Mumbai, IN'
      }
    };
  }