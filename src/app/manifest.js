export const dynamic = 'force-static'

export default function manifest() {
  return {
    name: 'Sylvester Das | Freelance Software Developer',
    short_name: 'Sylvester Das',
    description: 'Freelance software developer in Thiruvananthapuram, Kerala: automation, web apps, Flutter and Electron apps.',
    start_url: '/',
    display: 'browser',
    background_color: '#1A362F',
    theme_color: '#1A362F',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/images/general/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/general/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/images/general/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
