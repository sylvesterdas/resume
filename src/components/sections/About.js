"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary-dark/80">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-accent mx-1"></div>
            <div className="w-2 h-2 bg-accent mx-1"></div>
          </div>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">
                What I Do
              </h3>
              <p className="text-text-muted leading-relaxed">
                I am a software developer with more than 10 years of experience
                building production systems. I build software that removes
                repetitive work and gives businesses the tools they actually
                need: automations that run on their own, web applications,
                cross-platform mobile apps in Flutter and desktop apps in
                Electron. I work with startups, small businesses and teams, from
                Thiruvananthapuram and remotely anywhere.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">
                How I Work
              </h3>
              <p className="text-text-muted leading-relaxed">
                I start by understanding the problem, not the technology. You
                get a clear scope and a fixed quote up front, regular demos while
                I build, and clean, documented code that you fully own at the
                end. I prefer simple, maintainable solutions that are easy to
                run and cheap to host, and I stay available for support after
                launch.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {
                  [
                    "Process Automation",
                    "Web Applications",
                    "Flutter Mobile Apps",
                    "Electron Desktop Apps",
                    "APIs & Integrations",
                    "Cloud Deployment",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 text-text-muted"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span>{skill}</span>
                    </motion.div>
                  ))
                }
              </div>
            </div>

            
          </div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative mx-auto w-full max-w-[300px] md:max-w-[400px]"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-accent/10 rounded-lg transform -rotate-6"></div>
              <div className="absolute inset-0 bg-primary rounded-lg border border-accent/20"></div>
              <Image
                src="/images/general/myphoto.avif"
                alt="Sylvester Das"
                fill
                className="rounded-lg object-cover object-center z-10"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}