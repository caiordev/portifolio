import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import ExperienceModal from './ExperienceModal';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'SUINF - Superintendência de Informática (SSP-MA)',
      position: 'Desenvolvedor Full Stack',
      period: 'Ago 2024 - Presente',
      location: 'Presencial',
      description: 'Desenvolvimento de soluções escaláveis e liderança técnica',
      responsibilities: [
        'Desenvolvimento de aplicações web escaláveis usando Java e Vue',
        'Implementação de arquitetura de microserviços',
        'Code review e mentoria de desenvolvedores júnior',
        'Definição de padrões de código e boas práticas',
      ],
      achievements: [
        'Responsável pelo sistema de emissão de RG e CPF de todo o estado do Maranhão',
        'Criação de um sistem que integra diversas bases e faz o relacionamento entre ela por parâmetros ou reconhecimento facial',
        'Otimização de performance de consultas',
        'Implementação de testes automatizados',
        'Criação de Microserviços',
      ],
      technologies: ['Java', 'Vue', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ', 'GitLab', 'CI/CD', 'NGINX'],
      details: 'Responsável por arquitetar e desenvolver soluções robustas e escaláveis, garantindo alta qualidade de código e performance. Atuação próxima com product owners e designers para entregar produtos que excedem expectativas.',
    },
    {
      company: 'Inforgeneses',
      position: 'Desenvolvedor Full Stack',
      period: 'Dez 2023 - Nov 2024',
      location: 'São Paulo, SP',
      description: 'Desenvolvimento e manutenção de soluções web para escolas e faculdades',
      responsibilities: [
        'Integração com APIs de terceiros e serviços de pagamento',
        'Desenvolvimento de features para soluções web',
        'Manutenção e evolução de projetos legados',
      ],
      achievements: [
        'Otimizações de consultas',
        'Integrações financeiras com movimentos milionarios mensais',
        'Análise de consultas avançadas'
      ],
      technologies: ['PHP', 'CodeIgniter', 'SQlServer'],
      details: 'Trabalhei em ambiente de startup dinâmico, com foco em entrega rápida e iterativa. Experiência valiosa no desenvolvimento de soluções web para escolas e faculdades.',
    },
    {
      company: 'CPIT-Coordenação de Propriedade Intelectual',
      position: 'Desenvolvedor Full Stack',
      period: 'Mar 2023 - Nov 2023',
      location: 'Remoto',
      description: 'Criação de um software para manutenção e gerênciamento de patentes e propriedade intelectual',
      responsibilities: [
        'Criação de interfaces responsivas e acessíveis',
        'Desenvolvimento de componentes reutilizáveis',
        'Colaboração próxima com designers para implementação de UI/UX',
        'Otimização de SEO e performance',
      ],
      achievements: [
        'Aprendizado de React',
        'Aprendizado de Node.js',

      ],
      technologies: ['React', 'Material-UI', 'Figma', 'Tailwind CSS', 'Git'],
      details: 'Experiência valiosa no aprendizado de React e Node.js.',
    },
  ];

  const handleOpenModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('experience.title')} <span className="text-gradient">{t('experience.titleHighlight')}</span>
          </h2>
          <p className="text-slate-400 text-lg">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group"
                    onClick={() => handleOpenModal(exp)}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-semibold text-slate-300 mb-2">
                          <Briefcase size={20} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-slate-400 text-sm md:text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="px-3 py-1 text-sm text-slate-400">
                          +{exp.technologies.length - 5} mais
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                      <span>{t('experience.viewDetails')}</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <ExperienceModal
          experience={selectedExperience}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default Experience;
