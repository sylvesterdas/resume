'use client'
import { motion } from 'framer-motion'

export default function Skills() {
  const technicalSkills = [
    { name: 'AWS', level: 80 },
    { name: 'Firebase', level: 95 },
    { name: 'Electron JS', level: 75 },
    { name: 'System Design', level: 95 },
    { name: 'Vue 3', level: 100 },
    { name: 'NodeJS', level: 90 }
  ]

  const softSkills = [
    { name: 'Leadership', level: 75 },
    { name: 'Creativity', level: 80 },
    { name: 'Management', level: 80 },
    { name: 'Troubleshooting', level: 95 },
    { name: 'Learning', level: 95 },
    { name: 'Motivation', level: 100 }
  ]

  return (
    <section id="skills" className="py-24 bg-[#2F4F4F]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-20 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SKILLS
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-[#8FBC8F] mx-1"></div>
            <div className="w-2 h-2 bg-[#8FBC8F] mx-1"></div>
          </div>
        </motion.h2>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 mb-20">
          {technicalSkills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-[#8FBC8F]">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800">
                <motion.div
                  className="h-full bg-[#8FBC8F]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Skills Title */}
        <h3 className="text-2xl font-bold text-center mb-12 text-white">MORE SKILLS</h3>

        {/* Circular Progress Bars */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#2F4F4F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <motion.path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8FBC8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `${skill.level}, 100` }}
                    whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                    viewport={{ once: true }}
                  />
                  <text x="18" y="20.35" className="text-white text-[6px]" textAnchor="middle">
                    {`${skill.level}%`}
                  </text>
                </svg>
              </div>
              <span className="text-white text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}