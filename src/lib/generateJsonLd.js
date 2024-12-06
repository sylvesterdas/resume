export function generatePersonJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sylvester Das',
      jobTitle: 'Senior Software Engineer',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      sameAs: [
        'https://www.linkedin.com/in/sylvesterdas/',
        'https://github.com/sylvesterdas'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'WizardTales GmbH, Ratingen, Germany'
      },
      knowsAbout: [
        'Software Engineering',
        'Enterprise Solutions Architecture',
        'Cloud Computing',
        'React',
        'Node.js',
        'Full Stack Development'
      ],
      alumniOf: {
        '@type': 'Organization',
        name: 'University of Mumbai, Mumbai, IN'
      }
    };
  }