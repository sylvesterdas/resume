export const contact = {
  name: 'Sylvester Das',
  email: 'sylvesterdas.dev@gmail.com',
  // E.164 digits only, as wa.me expects
  whatsapp: '918446600164',
  whatsappDisplay: '+91 84466 00164',
  telephone: '+918446600164',
  locality: 'Thiruvananthapuram',
  region: 'Kerala',
  country: 'IN',
  countryName: 'India',
  locationLabel: 'Thiruvananthapuram, Kerala · Remote worldwide',
  mapUrl: 'https://maps.app.goo.gl/kEsChNZeC8r5ECbJ9',
  yearsExperience: '10+',
}

export const whatsappLink = (text = '') =>
  `https://wa.me/${contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const mailtoLink = (subject = '', body = '') => {
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${contact.email}${params.length ? `?${params.join('&')}` : ''}`
}

export const budgets = [
  'Under ₹50,000 / $600',
  '₹50,000 – ₹2,00,000 / $600 – $2,500',
  '₹2,00,000 – ₹5,00,000 / $2,500 – $6,000',
  'Above ₹5,00,000 / $6,000',
  'Not sure yet',
]

export const timelines = [
  'ASAP (within 2 weeks)',
  '1 – 2 months',
  '3 months or more',
  'Flexible',
]

export const processSteps = [
  { title: 'Brief', text: 'Tell me what you need over WhatsApp, email or a short call.' },
  { title: 'Quote', text: 'You get a fixed scope, timeline and price, in writing.' },
  { title: 'Build', text: 'Regular demos and updates, so there are no surprises.' },
  { title: 'Handover', text: 'Source code, documentation and deployment are yours. Support is available afterwards.' },
]

export const services = [
  {
    slug: 'automation',
    image: '/images/services/automation.webp',
    imageAlt: 'Rack of servers with green status lights',
    title: 'Workflow & Business Automation',
    shortTitle: 'Automation',
    metaTitle: 'Automation Developer in Trivandrum, Kerala',
    seoTitle: 'Business Process Automation Developer in Thiruvananthapuram (Trivandrum), Kerala',
    seoDescription:
      'Freelance automation developer in Thiruvananthapuram, 10+ years of experience. Integrations, scheduled reports, web scraping, PDF data extraction, bots and cron jobs.',
    oneLiner: 'Stop doing the same task every day. I turn repetitive manual work into scripts, bots and integrations that run on their own.',
    problem:
      'Re-typing the same orders into two systems, pulling numbers together for the weekly report, copying details out of PDFs or websites by hand: this kind of work quietly eats hours every day and invites mistakes. Most of it can be automated reliably, around the tools you already use.',
    bullets: [
      'Connect your apps: sync orders, customers and invoices between systems',
      'Reports generated and emailed to you on a schedule',
      'Web scraping: collect prices, listings or leads from websites',
      'Pull data out of PDFs, invoices and statements automatically',
      'Scheduled jobs and bots that run without anyone watching',
      'Small internal tools that replace manual, repetitive steps',
    ],
    deliverables: [
      'Working automation, deployed where you need it (your server, cloud or PC)',
      'Clear documentation on how it runs and how to change it',
      'Error alerts and logs, so failures never go unnoticed',
      'Full source code, owned by you',
    ],
    keywords: 'automation developer Thiruvananthapuram, business process automation Kerala, API integration developer Trivandrum, web scraping developer India, workflow automation freelancer',
    faqs: [
      {
        q: 'What kind of tasks can be automated?',
        a: 'Anything that follows a predictable pattern: moving data between systems, generating and emailing reports, processing files or PDFs, pulling data from websites and running jobs on a schedule. If you can explain the steps, it can usually be automated.',
      },
      {
        q: 'Do I need to change the software I already use?',
        a: 'Usually not. I build automations around your existing tools, such as your online store, CRM, accounting software or database, wherever they offer an API, an export or a scriptable interface.',
      },
      {
        q: 'How much does an automation project cost?',
        a: 'Small, single-task automations are often a few days of work. Larger integrations are quoted after a short discussion. You always get a fixed price before any work starts.',
      },
      {
        q: 'Can you issue a proper invoice for my business?',
        a: 'I am a Udyam-registered MSME, so businesses get a proper invoice for every engagement.',
      },
      {
        q: 'Do you work with clients outside Thiruvananthapuram?',
        a: 'Yes. I am based in Thiruvananthapuram, Kerala and work with clients across India and abroad, fully remotely.',
      },
    ],
  },
  {
    slug: 'web-applications',
    image: '/images/services/web-applications.webp',
    imageAlt: 'Monitor on a desk showing a web app and a website side by side',
    title: 'Websites & Web Applications',
    shortTitle: 'Websites & Web Apps',
    metaTitle: 'Website & Web App Developer in Trivandrum, Kerala',
    seoTitle: 'Website & Web Application Developer in Thiruvananthapuram (Trivandrum), Kerala',
    seoDescription:
      'Freelance web developer in Thiruvananthapuram, 10+ years of experience. Business websites, online stores, lead forms, dashboards and SaaS with React, Next.js and Node.js.',
    oneLiner: 'From a fast business website or online store to dashboards, customer portals and complete SaaS products.',
    problem:
      'A slow or outdated website quietly loses enquiries, and off-the-shelf tools rarely fit how your business actually works. A well-built site brings customers in, and a focused web application gives your team and customers exactly the workflow they need, from any browser.',
    bullets: [
      'Business websites and storefronts that load fast and show up on Google',
      'Online stores with cart, payments and order management',
      'Lead collection forms and landing pages that send enquiries straight to you',
      'Admin dashboards & internal tools for your team',
      'Customer portals, booking and membership systems',
      'SaaS products & MVPs for startups',
      'Payment gateway integration (Razorpay, Stripe, PayPal)',
      'Fixing, speeding up and maintaining existing sites and apps',
    ],
    deliverables: [
      'Responsive site or app that works on desktop and mobile browsers',
      'SEO-ready pages: fast loading, proper titles, descriptions and sitemap',
      'Deployment to your hosting or cloud account',
      'Admin access, documentation and a handover walkthrough',
      'Full source code in your repository',
    ],
    keywords: 'website developer Thiruvananthapuram, web developer Trivandrum, ecommerce website developer Kerala, web application developer Thiruvananthapuram, React developer Kerala, Next.js developer India, freelance full stack developer Kerala',
    faqs: [
      {
        q: 'Do you build regular business websites and online stores too?',
        a: 'Yes. Business websites, product storefronts, online stores and landing pages with enquiry forms, built to load fast, work well on phones and be easy for Google to index.',
      },
      {
        q: 'Which technologies do you use?',
        a: 'Mostly React and Next.js on the front end, and Node.js with PostgreSQL, MongoDB or Firebase on the back end. I choose what fits your budget, hosting and team, not what is fashionable.',
      },
      {
        q: 'Can you take over or improve an existing web app?',
        a: 'Yes. I regularly work on existing codebases: fixing bugs, improving performance, adding features or modernising older stacks step by step.',
      },
      {
        q: 'How long does a typical web app take?',
        a: 'A focused MVP or internal tool is usually 3–8 weeks. You get a timeline with milestones in the quote.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. The source code, repositories and deployment accounts are handed over to you in full.',
      },
      {
        q: 'Do you provide maintenance after launch?',
        a: 'Yes. Ongoing support and small improvements are available on a monthly or per-task basis.',
      },
    ],
  },
  {
    slug: 'flutter-mobile-apps',
    image: '/images/services/flutter-mobile-apps.webp',
    imageAlt: 'Hand holding a glowing smartphone in the dark',
    title: 'Cross-platform Mobile Apps (Flutter)',
    shortTitle: 'Mobile Apps',
    metaTitle: 'Flutter App Developer in Trivandrum, Kerala',
    seoTitle: 'Flutter App Developer in Thiruvananthapuram (Trivandrum), Kerala',
    seoDescription:
      'Freelance Flutter developer in Thiruvananthapuram building Android and iOS apps from a single codebase. 10+ years of software experience, from idea to Play Store and App Store.',
    oneLiner: 'One codebase, both platforms. Android and iOS apps built with Flutter, from first screen to store release.',
    problem:
      'Building separate Android and iOS apps doubles the cost and the maintenance. Flutter lets one codebase deliver a native-feeling app on both platforms, so you reach all your users sooner and for less.',
    bullets: [
      'Customer apps for ordering, booking and loyalty',
      'Field staff apps for sales, surveys, deliveries and collections, working offline',
      'Companion apps for your existing website or web app',
      'Startup MVPs on Android and iOS from one codebase',
      'Taking over and updating apps left behind by a previous developer',
      'Play Store & App Store publishing under your own accounts',
    ],
    deliverables: [
      'Published app on Google Play and/or the App Store',
      'Backend and admin panel if needed',
      'Store listing assets and release setup',
      'Full source code and build instructions',
    ],
    keywords: 'Flutter developer Thiruvananthapuram, mobile app developer Trivandrum, app development Kerala, Android app developer Trivandrum, iOS app developer Kerala, freelance Flutter developer India',
    faqs: [
      {
        q: 'Why Flutter instead of native apps?',
        a: 'Flutter produces fast, native-feeling apps for Android and iOS from one codebase, which typically cuts development and maintenance cost substantially. When a feature truly needs native code, Flutter supports that too.',
      },
      {
        q: 'Will you publish the app to the Play Store and App Store?',
        a: 'Yes. I handle the build, signing and store submission, using your developer accounts so the app stays under your ownership.',
      },
      {
        q: 'Can the app work offline?',
        a: 'Yes. Offline-first design with local storage and background sync is something I build regularly.',
      },
      {
        q: 'Can you also build the backend?',
        a: 'Yes. I can build the API, database and admin panel, or integrate with a backend you already have.',
      },
      {
        q: 'Do you work with startups in Technopark or Kerala Startup Mission?',
        a: 'Yes. I am based in Thiruvananthapuram and happy to work with local startups and businesses, as well as remote clients anywhere.',
      },
    ],
  },
  {
    slug: 'electron-desktop-apps',
    image: '/images/services/electron-desktop-apps.webp',
    imageAlt: 'Desk at night with a laptop and a desktop monitor running an app',
    title: 'Desktop Apps (Electron)',
    shortTitle: 'Desktop Apps',
    metaTitle: 'Electron Desktop App Developer in Trivandrum',
    seoTitle: 'Desktop Application Developer (Electron) in Thiruvananthapuram (Trivandrum), Kerala',
    seoDescription:
      'Freelance Electron desktop app developer in Thiruvananthapuram. Windows, macOS and Linux apps, offline tools, hardware and file-system integrations, with 10+ years of experience.',
    oneLiner: 'Cross-platform desktop software for Windows, macOS and Linux, including offline tools that work with local files and hardware.',
    problem:
      'Some work belongs on the desktop: tools that must run offline, handle large local files, talk to printers or devices, or sit in the system tray all day. Electron delivers one modern app for Windows, macOS and Linux.',
    bullets: [
      'Custom offline billing, inventory and record-keeping tools for shops, clinics and offices',
      'Barcode scanner and receipt/label printer integrations',
      'Batch processing for large folders of files, images or documents',
      'Desktop versions of your existing web app, with offline support',
      'Windows, macOS & Linux installers with automatic updates',
    ],
    deliverables: [
      'Signed installers for the platforms you need',
      'Auto-update setup',
      'User guide and technical documentation',
      'Full source code and build pipeline',
    ],
    keywords: 'Electron developer Thiruvananthapuram, desktop application developer Kerala, Windows app developer Trivandrum, cross platform desktop app India, freelance Electron developer',
    faqs: [
      {
        q: 'Why Electron for a desktop app?',
        a: 'Electron lets one codebase run on Windows, macOS and Linux with a modern interface, and it can reuse web code you may already have. That makes it fast to build and easy to maintain.',
      },
      {
        q: 'Can the app work without the internet?',
        a: 'Yes. Desktop apps can be fully offline, storing data locally and optionally syncing when a connection is available.',
      },
      {
        q: 'Can it integrate with local hardware or files?',
        a: 'Yes. Electron apps have full access to the file system and can integrate with printers, serial/USB devices and other local software.',
      },
      {
        q: 'How are updates delivered?',
        a: 'I set up installers and automatic updates, so users always get the latest version without reinstalling.',
      },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
