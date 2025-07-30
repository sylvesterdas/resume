"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LinkedInBadge from "@/components/ui/LinkedInBadge";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary-dark">
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
                Professional Overview
              </h3>
              <p className="text-text-muted leading-relaxed">
                As a Senior Software Engineer specializing in enterprise
                solutions, I bring extensive experience in architecting and
                delivering scalable applications that drive business
                transformation. With deep expertise in MEAN/MERN stack
                development, I focus on creating high-performance systems that
                adapt to evolving business needs while maintaining exceptional
                code quality and user experience.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">
                Technical Philosophy
              </h3>
              <p className="text-text-muted leading-relaxed">
                My approach combines strategic system design with practical
                implementation expertise. I believe in building solutions that
                not only meet current requirements but are also engineered for
                future scalability. Through my experience with cloud platforms
                and modern development frameworks, I deliver robust applications
                that provide measurable business value.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {
                  [
                    "Enterprise Architecture",
                    "Cloud Solutions",
                    "System Integration",
                    "Performance Optimization",
                    "Technical Leadership",
                    "Innovation Strategy",
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
                width={400}
                height={400}
                className="rounded-lg object-cover object-center relative z-10"
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