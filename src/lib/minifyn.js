const API_BASE = 'https://www.minifyn.com/api'
const REVALIDATE_SECONDS = 86400

// Used when the MiniFyn API is unreachable, so the page never blocks on it.
const FALLBACK_APPS = [
  {
    name: 'ScamGuard: Link Checker',
    tagline: 'Link & QR Threat Checker',
    description: 'Inspect suspicious links, QR codes, and redirect chains before opening them to safeguard against phishing and malicious links.',
    packageId: 'com.minifyn.linkguard',
    webUrl: 'https://www.minifyn.com/scamguard',
    playstoreURL: 'https://play.google.com/store/apps/details?id=com.minifyn.linkguard',
    logoUrl: 'https://www.minifyn.com/images/scamguard-logo.png',
    published: true,
  },
  {
    name: 'MiniFyn: URL Shortener & Hub',
    tagline: 'Edge URL Shortener & Dev Tools',
    description: 'Lightning-fast edge link shortening, custom bio-links, QR code generator, and link analytics with built-in Web Risk threat protection.',
    packageId: 'com.minifyn.web',
    webUrl: 'https://www.minifyn.com',
    playstoreURL: null,
    logoUrl: 'https://www.minifyn.com/images/minifyn-logo.png',
    published: true,
  },
  {
    name: 'CensorFyn: Offline Media Redact',
    tagline: '100% Offline Media Redaction',
    description: 'Auto-detect and irreversibly redact faces, passports, credit cards, PII text, and QR codes with true pixel destruction.',
    packageId: 'com.minifyn.censorfyn',
    webUrl: 'https://www.minifyn.com/censorfyn',
    playstoreURL: 'https://play.google.com/store/apps/details?id=com.minifyn.censorfyn',
    logoUrl: 'https://www.minifyn.com/images/censorfyn/logo_transparent.png',
    published: true,
  },
  {
    name: 'ClipFyn: Video Preparation',
    tagline: 'On-Device Video Preparation',
    description: 'Inspect, crop, fit, and prepare videos locally on Android for broadly compatible sharing without quality degradation or server uploads.',
    packageId: 'com.minifyn.clipfyn',
    webUrl: 'https://www.minifyn.com/clipfyn',
    playstoreURL: 'https://play.google.com/store/apps/details?id=com.minifyn.clipfyn',
    logoUrl: 'https://www.minifyn.com/images/clipfyn/logo.png',
    published: true,
  },
]

const FALLBACK_EXTENSIONS = [
  {
    id: 'scamguard-link-checker',
    name: 'ScamGuard: Link Checker',
    description: 'Check visible link warning signs locally before opening a site.',
    browser: 'chrome',
    published: true,
    logoUrl: 'https://www.minifyn.com/images/scamguard-logo.png',
    websiteUrl: 'https://www.minifyn.com/scamguard',
    storeUrl: 'https://chromewebstore.google.com/detail/scamguard-link-checker/cendbppkhplamddjfnbhgbejnpmfmlbi',
  },
]

async function fetchList(path, fallback) {
  try {
    const res = await fetch(`${API_BASE}/${path}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return fallback
    const data = await res.json()
    return Array.isArray(data) && data.length ? data : fallback
  } catch {
    return fallback
  }
}

function toAppProject(app) {
  let status = 'development'
  if (app.published) status = app.playstoreURL ? 'playstore' : 'web'

  return {
    key: app.packageId,
    kind: 'app',
    name: app.name,
    tagline: app.tagline,
    description: app.description,
    logoUrl: app.logoUrl,
    webUrl: app.webUrl,
    storeUrl: app.published ? app.playstoreURL : null,
    status,
  }
}

function toExtensionProject(ext) {
  const browser = ext.browser === 'chrome' ? 'Chrome' : ext.browser
  const published = ext.published && ext.storeUrl

  return {
    key: `ext-${ext.id}`,
    kind: 'extension',
    name: ext.name,
    tagline: `${browser} Extension`,
    description: ext.description,
    logoUrl: ext.logoUrl,
    webUrl: ext.websiteUrl,
    storeUrl: published ? ext.storeUrl : null,
    status: published ? 'webstore' : 'development',
  }
}

// Live projects first, then in-development ones; order within each group follows the API.
export async function getMinifynProjects() {
  const [apps, extensions] = await Promise.all([
    fetchList('apps', FALLBACK_APPS),
    fetchList('extensions', FALLBACK_EXTENSIONS),
  ])

  const projects = [
    ...apps.map(toAppProject),
    ...extensions.map(toExtensionProject),
  ]

  return [
    ...projects.filter((p) => p.status !== 'development'),
    ...projects.filter((p) => p.status === 'development'),
  ]
}
