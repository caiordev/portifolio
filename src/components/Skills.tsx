'use client'

import { motion } from 'framer-motion'

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Next.js',
  'Tailwind CSS',
  'Java',
  'SpringBoot',
  'PHP',
  'PostgreSQL',
  'Firebase',
  'AWS'
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/50" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Minhas Habilidades
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="gradient-border"
            >
              <div className="card group backdrop-blur-lg">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                    {skill}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
