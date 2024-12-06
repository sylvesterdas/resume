'use client'
import { motion } from 'framer-motion'

export default function Experience() {
  const education = [
    {
      year: "2010",
      title: "HIGHER SECONDARY CERTIFICATE",
      institution: "Elphinstone College, Maharashtra board, Mumbai, IN",
      description: "From this college of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend."
    },
    {
      year: "2017",
      title: "BACHELOR OF SCIENCE IN IT",
      institution: "University of Mumbai, Mumbai, IN",
      description: "I have completed Bachelors degree from the Mumbai University."
    },
    // ... add other education entries
  ]

  const experience = [
    {
      period: "2016",
      title: "INTERN - ANDROID APP DEVELOPMENT",
      company: "Intellinects Ventures Pvt Ltd, Mumbai, IN",
      description: "The starting point of my programming career. Apart from android, includes a project that required me to build it using any Java framework, so I used Struts2."
    },
    {
      period: "2016 - 2017",
      title: "FULL STACK PROGRAMMER",
      company: "Intellinects Ventures Pvt Ltd, Mumbai, IN",
      description: "One of the major projects that I was involved in was The bus tracking system for parents/administrators of the school to track the location of the respective school buses."
    },
    // ... add other experience entries
  ]

  return (
    <section id="resume" className="py-24 bg-[#1A2F2F]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-20 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          RESUME
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-[#8FBC8F] mx-1"></div>
            <div className="w-2 h-2 bg-[#8FBC8F] mx-1"></div>
          </div>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Education Section */}
          <motion.h3 
            className="text-xl text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            EDUCATION
          </motion.h3>

          <div className="space-y-12 mb-20">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-[100px_1fr] gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#8FBC8F] font-medium">
                  {edu.year}
                </div>
                <div className="bg-[#2F4F4F]/30 p-6 rounded-lg">
                  <h4 className="text-white font-bold mb-2">{edu.title}</h4>
                  <p className="text-[#8FBC8F] mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <motion.h3 
            className="text-xl text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h3>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-[100px_1fr] gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#8FBC8F] font-medium">
                  {exp.period}
                </div>
                <div className="bg-[#2F4F4F]/30 p-6 rounded-lg">
                  <h4 className="text-white font-bold mb-2">{exp.title}</h4>
                  <p className="text-[#8FBC8F] mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}