'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNode, FaJava, FaAws } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSpringboot, SiPhp, SiPostgresql, SiFirebase } from 'react-icons/si'

const skills = [
  {
    name: 'React',
    icon: FaReact,
    color: '#61DAFB'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6'
  },
  {
    name: 'Node.js',
    icon: FaNode,
    color: '#339933'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#000000'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4'
  },
  {
    name: 'Java',
    icon: FaJava,
    color: '#007396'
  },
  {
    name: 'SpringBoot',
    icon: SiSpringboot,
    color: '#6DB33F'
  },
  {
    name: 'PHP',
    icon: SiPhp,
    color: '#777BB4'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791'
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: '#FFCA28'
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: '#FF9900'
  }
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
          className="section-title text-center mb-12"
        >
          Minhas Habilidades
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-50 group-hover:opacity-70 blur transition-all duration-300" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center space-y-3 shadow-lg backdrop-blur-sm">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ color: skill.color }}
                  className="text-4xl"
                >
                  <skill.icon />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
