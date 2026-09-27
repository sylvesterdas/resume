'use client'
import { useEffect, useState, useSyncExternalStore } from 'react'

// Each session "runs" one kind of project, so the hero shows what gets built
const sessions = [
  {
    command: 'run automation --daily-report',
    output: [
      '✔ Pulled orders from store API',
      '✔ Synced invoices to accounting',
      '✔ Report emailed to owner@shop.in',
      '→ next run: tomorrow 07:00',
    ],
  },
  {
    command: 'deploy web-app --prod',
    output: [
      '✔ Built storefront (Next.js)',
      '✔ Razorpay checkout connected',
      '✔ Enquiry form → WhatsApp + email',
      '→ live at https://yourbusiness.in',
    ],
  },
  {
    command: 'flutter build --android --ios',
    output: [
      '✔ One codebase, two platforms',
      '✔ Offline mode for field staff',
      '✔ Uploaded to Play Store & App Store',
      '→ published under your account',
    ],
  },
  {
    command: 'electron-builder --win --mac',
    output: [
      '✔ Billing & inventory app packaged',
      '✔ Barcode scanner + receipt printer',
      '✔ Auto-updates enabled',
      '→ installers ready to ship',
    ],
  },
]

const typeDelay = 45
const lineDelay = 380
const holdDelay = 2600

const reducedQuery = '(prefers-reduced-motion: reduce)'
const subscribeReduced = (onChange) => {
  const media = window.matchMedia(reducedQuery)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

export default function HeroTerminal() {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState(0)
  const [lines, setLines] = useState(0)
  const reduced = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(reducedQuery).matches,
    () => false
  )

  const session = sessions[index]

  useEffect(() => {
    if (reduced) return
    let timer
    if (typed < session.command.length) {
      timer = setTimeout(() => setTyped(typed + 1), typeDelay)
    } else if (lines < session.output.length) {
      timer = setTimeout(() => setLines(lines + 1), lineDelay)
    } else {
      timer = setTimeout(() => {
        setIndex((index + 1) % sessions.length)
        setTyped(0)
        setLines(0)
      }, holdDelay)
    }
    return () => clearTimeout(timer)
  }, [reduced, typed, lines, index, session])

  const shownTyped = reduced ? session.command.length : typed
  const shownLines = reduced ? session.output.length : lines

  return (
    <div
      className="w-full max-w-lg rounded-xl border border-accent/30 bg-primary-dark/90 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden text-left"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-accent/15 bg-black/20">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-text-muted font-mono">sylvester@build: ~/your-project</span>
      </div>
      <div className="p-5 font-mono text-sm leading-7 h-[13.5rem]">
        <div>
          <span className="text-accent">$ </span>
          <span className="text-text">{session.command.slice(0, shownTyped)}</span>
          {shownTyped < session.command.length && <span className="inline-block w-2 h-4 -mb-0.5 bg-accent animate-pulse" />}
        </div>
        {session.output.slice(0, shownLines).map((line) => (
          <div key={line} className={line.startsWith('→') ? 'text-accent' : 'text-text-muted'}>
            {line}
          </div>
        ))}
        {shownLines === session.output.length && (
          <div>
            <span className="text-accent">$ </span>
            <span className="inline-block w-2 h-4 -mb-0.5 bg-accent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
