'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Puzzle, Smartphone } from 'lucide-react'

const STATUS_BADGES = {
  playstore: 'Live on Play Store',
  webstore: 'Live on Chrome Web Store',
  web: 'Live on Web',
}

const STORE_LINKS = {
  app: { label: 'Play Store', title: 'Google Play Store', Icon: Smartphone },
  extension: { label: 'Web Store', title: 'Chrome Web Store', Icon: Puzzle },
}

export default function Projects({ projects = [] }) {
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
            Privacy-first mobile apps, web tools, and browser extensions developed under{' '}
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
          {projects.map((app, index) => {
            const store = STORE_LINKS[app.kind]

            return (
            <motion.div
              key={app.key}
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

                  {app.status !== 'development' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      {STATUS_BADGES[app.status]}
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
                  {app.storeUrl && (
                    <a
                      href={app.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-primary-dark/80 hover:bg-primary-dark text-text text-sm font-medium border border-accent/25 hover:border-accent transition-all duration-200 text-center whitespace-nowrap"
                      title={store.title}
                    >
                      <store.Icon className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{store.label}</span>
                    </a>
                  )}
                </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
