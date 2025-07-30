'use client'
import { motion } from 'framer-motion'

export default function Resume() {
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
    {
      year: "2021",
      title: "International Academic Qualifications",
      institution: "World Education Services",
      description: "World Education Services (WES) has evaluated the associated credential on behalf of the holder. Verifies the authenticity of the claimed credential. Provides assurance that the awarding institution and/or program was accredited at the point that the credential was issued Indicates that the associated credential has been assessed for its Canadian equivalency"
    },
    {
      year: "2021",
      title: "Developing Cloud Applications with Node.js and React",
      institution: "Issued by edX,\nAuthorized by IBM",
      description: "This credential earner understands how to develop and deploy full-stack web applications and several JavaScript frameworks. The individual knows how to invoke Web Services, parse with JSON data and integrate with Cloud APIs to add AI capabilities to applications"
    }
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
    {
      period: "2017 - 2018",
      title: "Software Developer",
      company: "Purelogic Labs India Pvt. Ltd., New Delhi, IN",
      description: "We are a system solution architect, a one stop solution provider that builds electric hardware from scratch. Planned and built an android application for detecting and providing the Air Quality Index (AQI) of your surroundings. Built a server to absorb the AQI readings emitted from the PM2.5 sensors"
    },
    {
      period: "2018 - 2020",
      title: "Senior Software Engineer",
      company: "Tacto Infomedia Pvt Ltd, Mumbai, IN",
      description: "Service-based company for technical solutions and software development. Planned and developed a home delivery app called Pedidos, Bolivia. CM Chashak app for event management system for Maharashtra CM. Worked in a delivery system for HEB, Texas called Lash Delivery. Awarded Problem Solver of the year 2018."
    },
    {
      period: "2020 - 2021",
      title: "Senior Software Engineer",
      company: "Scitara Technologies Pvt. Ltd., Mumbai, IN",
      description: "Scitara is a global provider of laboratory-based, cloud-based software solutions for the life sciences and other science-based industries.. Planned, developed and managed end-to-end MS OneDrive connector. Planned, developed and managed end-to-end MS Excel connector. Planned, developed and managed end-to-end IDBS connector. Developed some frontend components in ReactJS"
    },
    {
      period: "2022 - ...",
      title: "Senior Software Engineer",
      company: "WizardTales GmbH, Ratingen, Germany",
      description: "We drive businesses that change the world. In the numerous companies we are active in and either founded or cooperate in a joint venture, they all share either of two things. They are shaping the world or are a major technical challenge."
    }
  ]

  return (
    <section id="resume" className="py-24 bg-primary-dark">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-20 text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          RESUME
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-accent mx-1"></div>
            <div className="w-2 h-2 bg-accent mx-1"></div>
          </div>
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-accent h-full hidden md:block"></div>

          {/* Education Section */}
          <motion.h3 
            className="absolute left-1/2 transform -translate-x-1/2 text-xl text-text px-4 bg-primary-dark z-20 whitespace-nowrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            EDUCATION
          </motion.h3>

          <div className="mb-20">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Content Box */}
                <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'}`}>
                  <div className="bg-primary/30 p-6 rounded-lg shadow-lg">
                    <h4 className="text-text font-bold mb-2 uppercase">{edu.title}</h4>
                    <p className="text-accent mb-2">{edu.institution}</p>
                    <p className="text-text-muted text-sm">{edu.description}</p>
                  </div>
                </div>

                {/* Year and Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center">
                  <div className="w-4 h-4 bg-accent rounded-full z-10"></div>
                  <div className="text-accent font-medium text-lg px-2 bg-primary-dark z-20 whitespace-nowrap">
                    {edu.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <motion.h3 
            className="absolute left-1/2 transform -translate-x-1/2 text-xl text-text px-4 bg-primary-dark z-20 whitespace-nowrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h3>

          <div>
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Content Box */}
                <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'}`}>
                  <div className="bg-primary/30 p-6 rounded-lg shadow-lg">
                    <h4 className="text-text font-bold mb-2 uppercase">{exp.title}</h4>
                    <p className="text-accent mb-2">{exp.company}</p>
                    <p className="text-text-muted text-sm">{exp.description}</p>
                  </div>
                </div>

                {/* Year and Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center">
                  <div className="w-4 h-4 bg-accent rounded-full z-10"></div>
                  <div className="text-accent font-medium text-lg px-2 bg-primary-dark z-20 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}