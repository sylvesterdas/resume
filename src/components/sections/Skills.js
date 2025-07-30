'use client'
import { motion } from 'framer-motion'

export default function Skills() {
  const technicalSkills = [
    { name: 'Next.JS', level: 100 },
    { name: 'React.JS', level: 98 },
    { name: 'Node.JS', level: 95 },
    { name: 'AI/ML', level: 90 },
    { name: 'MLOps', level: 90 },
    { name: 'System Design & Architecture', level: 98 },
    { name: 'DevOps', level: 92 }
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
    <section id="skills" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-20 text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SKILLS
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-accent mx-1"></div>
            <div className="w-2 h-2 bg-accent mx-1"></div>
          </div>
        </motion.h2>

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
                <span className="text-text">{skill.name}</span>
                <span className="text-accent">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-primary-dark">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-12 text-text">MORE SKILLS</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 text-text-muted"
            >
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}