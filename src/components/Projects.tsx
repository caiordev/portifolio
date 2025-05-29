'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const frontendProjects = [
  {
    title: 'Sistema de venda de viagens',
    description: 'Sistema de venda de viagens, com sistema de login, carrinho de compras e gerenciamento de pedidos.',
    image: '/portifolio/agencia.png',
    link: 'https://main.diw1hbym4cplx.amplifyapp.com',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Sistema de cadastro de agências de viagens',
    description: 'Sistema de cadastro de agências de viagens, com sistema de login e gerenciamento de agências.',
    image: '/portifolio/vendas.png',
    link: 'https://main.d2gnbhqhxthodz.amplifyapp.com',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Landing page para uma agência de viagens',
    description: 'Landing page para uma agência de viagens, com design moderno e responsivo.',
    image: '/portifolio/levada.png',
    link: 'http://levadaturismo.com/',
    tech: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Projeto de Bíblia',
    description: 'Probjeto de bíblia, com consumo de api de liturgia. O sistema tem audio leitura.',
    image: '/portifolio/biblia.png',
    link: 'https://caiordev.github.io/projeto_biblia/',
    tech: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Projeto de DevDocs',
    description: 'Projeto para reunir informações de documentação e aprendizados e reunir os projetos do github utilzando a API deles.',
    image: '/portifolio/devdocs.png',
    link: 'https://dev-docs-orcin.vercel.app',
    tech: ['Vue', 'Node.js', 'Firebase'],
  }
]

const backendProjects = [
  {
    title: 'Geração de QRCode com salvamento no S3 da AWS',
    description: 'Projeto para geração de QRCode com salvamento no S3 da AWS.',
    image: '/portifolio/qrcode.png',
    link: 'sem link',
    tech: ['Java', 'Spring Boot', 'AWS S3'],
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
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
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Meus Projetos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência em diferentes tecnologias.
        </motion.p>

        {/* Frontend Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            Projetos Frontend
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {frontendProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Ver Projeto</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/0 to-blue-600/0 group-hover:to-blue-600/10 pointer-events-none transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            Projetos Backend
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {backendProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Ver Projeto</span>
                      <FaGithub className="text-sm" />
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/0 to-blue-600/0 group-hover:to-blue-600/10 pointer-events-none transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
