'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#1A2F2F]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-[#8FBC8F] mx-1"></div>
            <div className="w-2 h-2 bg-[#8FBC8F] mx-1"></div>
          </div>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content section remains the same */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#8FBC8F]">Professional Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in MEAN/MERN stack development with a focus on creating high-performance, scalable applications. With extensive experience in both web and mobile development, I bring a comprehensive approach to every project.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#8FBC8F]">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Hybrid Mobile Apps',
                  'Angular Development',
                  'Firebase Solutions',
                  'NodeJS/MongoDB',
                  'React/Next.js',
                  'Electron Apps'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="w-2 h-2 bg-[#8FBC8F] rounded-full"/>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Updated image container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative mx-auto w-full max-w-[300px] md:max-w-[400px]"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-[#8FBC8F]/10 rounded-lg transform -rotate-6"></div>
              <div className="absolute inset-0 bg-[#2F4F4F] rounded-lg border border-[#8FBC8F]/20"></div>
              <Image 
                src="/images/myphoto.avif" 
                alt="Sylvester Das"
                width={400}
                height={400}
                className="rounded-lg object-cover object-center relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}