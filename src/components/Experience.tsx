'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const education = [
    {
      degree: 'Bacharelado em Engenharia da Computação',
      institution: 'Universidade Federal do Maranhão',
      period: '2020 - 2025',
      description: 'Foco em desenvolvimento de hardware e software.',
    },
    {
      degree: 'Bacharelado Interdisciplinar em Ciência e Tecnologia',
      institution: 'Universidade Federal do Maranhão',
      period: '2020 - 2023',
      description: 'Foco na criação de soluções tecnologicas e uso de técnicas da engenharia.',
    },
  ]

  const workExperience = [
    {
      role: 'Analista de Sistemas',
      company: 'IBRAPP - Secretaria de Segurança Pública',
      period: '2024 - Presente',
      responsibilities: [
        'Desenvolvimento de aplicações web escaláveis',
        'Criação e suporte a APIs REST usando Spring Boot (Spring MVC, JPA, JWT, OAuth2) e banco de dados PostgreSQL',
        'Desenvolvimento de microsserviços com a stack Spring, envolvendo API Gateway, Netflix Eureka, Open Feign, RabbitMQ, GitLab CI e Docker',
        'Trabalho com o frontend utilizando Vue.js 3.x, Bootstrap e HTML/CSS',
      ],
    },
    {
      role: 'Desenvolvedor Full-Stack',
      company: 'Inforgeneses',
      period: '2023 - 2024',
      responsibilities: [
        'Manutenção de sistemas acadêmicos e financeiros',
        'Análise e criação de novas funcionalidades e integração com API’s externas',
        'Otimização de consultas',
        'integração com Itaú, caixa, pagedu e sistemas de NFSE',
      ],
    },
    {
      role: 'Desenvolvedor Full-Stack',
      company: 'DPIT',
      period: '2023 - 2023',
      responsibilities: [
        'Levantamento de requisitos',
        'Reunião de usuários',
        'Desenvolvimento de banco de dados',
        'Desenvolvimento de Front e Back',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Educação */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Formação Acadêmica
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                    {edu.degree}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg text-blue-800 dark:text-blue-200 mb-2">
                  {edu.institution}
                </p>
                <p className="text-blue-700 dark:text-blue-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experiência Profissional */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Experiência Profissional
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                    {work.role}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {work.period}
                  </span>
                </div>
                <p className="text-lg text-blue-800 dark:text-blue-200 mb-4">
                  {work.company}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {work.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * respIndex }}
                      className="text-blue-700 dark:text-blue-300"
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
