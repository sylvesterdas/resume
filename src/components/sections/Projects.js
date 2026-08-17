'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Smartphone } from 'lucide-react'

const apps = [
  {
    name: 'ScamGuard: Link Checker',
    tagline: 'Link & QR Threat Checker',
    description: 'Inspect suspicious links, QR codes, and redirect chains before opening them to safeguard against phishing and malicious links.',
    packageId: 'com.minifyn.linkguard',
    webUrl: 'https://www.minifyn.com/scamguard',
    playstoreURL: 'https://play.google.com/store/apps/details?id=com.minifyn.linkguard',
    appstoreURL: null,
    logoUrl: 'https://www.minifyn.com/images/scamguard-logo.png',
    published: true,
  },
  {
    name: 'CensorFyn: Offline Media Redact',
    tagline: '100% Offline Media Redaction',
    description: 'Auto-detect and irreversibly redact faces, passports, credit cards, PII text, and QR codes with true pixel destruction.',
    packageId: 'com.minifyn.censorfyn',
    webUrl: 'https://www.minifyn.com/censorfyn',
    playstoreURL: 'https://play.google.com/store/apps/details?id=com.minifyn.censorfyn',
    appstoreURL: null,
    logoUrl: 'https://www.minifyn.com/images/censorfyn/logo_transparent.png',
    published: false,
  },
  {
    name: 'ClipFyn: Video Preparation',
    tagline: 'On-Device Video Preparation',
    description: 'Inspect, crop, fit, and prepare videos locally on Android for broadly compatible sharing without quality degradation or server uploads.',
    packageId: 'com.minifyn.clipfyn',
    webUrl: 'https://www.minifyn.com/clipfyn',
    playstoreURL: 'https://play.google.com/store/apps/details?id=com.minifyn.clipfyn',
    appstoreURL: null,
    logoUrl: 'https://www.minifyn.com/images/clipfyn/logo.png',
    published: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-primary-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            PERSONAL PROJECTS
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-accent mx-1" />
            <div className="w-2 h-2 bg-accent mx-1" />
          </div>
          <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg">
            Privacy-first on-device mobile and web applications developed under{' '}
            <a
              href="https://www.minifyn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold inline-flex items-center gap-1"
            >
              Minifyn
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.packageId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-primary/90 rounded-2xl p-6 border border-accent/15 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-accent/5 backdrop-blur-sm group"
            >
              <div>
                {/* Card Header: Logo & Status Badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary-dark/90 border border-accent/20 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300 p-2">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={app.logoUrl}
                        alt={`${app.name} logo`}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {app.published ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Live on Play Store
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-text-muted/10 text-text-muted border border-text-muted/20">
                      <span className="w-2 h-2 rounded-full bg-text-muted/60" />
                      In Development
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-text mb-1 group-hover:text-accent transition-colors duration-200">
                  {app.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
                  {app.tagline}
                </p>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {app.description}
                </p>
              </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-accent/10 flex items-center gap-3">
                  {app.webUrl && (
                    <a
                      href={app.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-accent text-primary-dark font-semibold text-sm hover:bg-accent-dark transition-colors duration-200 shadow-md text-center whitespace-nowrap"
                    >
                      <span>Overview</span>
                      <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    </a>
                  )}
                  {app.published && app.playstoreURL && (
                    <a
                      href={app.playstoreURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-primary-dark/80 hover:bg-primary-dark text-text text-sm font-medium border border-accent/25 hover:border-accent transition-all duration-200 text-center whitespace-nowrap"
                      title="Google Play Store"
                    >
                      <Smartphone className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Play Store</span>
                    </a>
                  )}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
