export const dynamic = 'force-static'

export default function manifest() {
  return {
    name: 'Sylvester Das | Freelance Software Developer',
    short_name: 'Sylvester Das',
    description: 'Freelance software developer in Thiruvananthapuram, Kerala: automation, web apps, Flutter and Electron apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A362F',
    theme_color: '#1A362F',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/images/general/favicon.png', sizes: '256x256', type: 'image/png' },
    ],
  }
}
