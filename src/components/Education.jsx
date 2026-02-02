import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: 'Bacharelado em Engenharia da Computação',
      institution: 'Universidade de Federal do Maranhão',
      period: '2020 - 2025',
      location: 'São Luís, MA',
      status: 'Concluído',
      description: 'Formação completa em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software e muito foco em hardware.',
      highlights: [
        'TCC: Projeto de uma plataforma de gerenciamento de atendimentos psicológicos',
        'Monitor de disciplinas',
        'Participação em projetos de extensão',
        'Dois projetos publicados no INPI'
      ],
      type: 'undergraduate',
    },
    {
      degree: 'Bacharelado Interdisciplinar em Ciência e Tecnologia',
      institution: 'Universidade de Federal do Maranhão',
      period: '2020 - 2023',
      location: 'São Luís, MA',
      status: 'Concluído',
      description: 'Curso voltado para a base de engenheiros com diversas cadeira de cálculo, física, química e cadeiras do núcleo técnico.',
      highlights: [
        'TCC: Projeto de uma plataforma de gerenciamento e manutenção de patentes',
        'Monitor de disciplinas',
        'Participação em projetos de extensão',
      ],
      type: 'undergraduate',
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'undergraduate':
        return <Award className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'undergraduate':
        return 'Graduação';
      default:
        return 'Graduação';
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Formação <span className="text-gradient">Acadêmica</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Minha trajetória educacional e qualificações profissionais
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
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
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        {/* Type Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-3">
                          {getIcon(edu.type)}
                          <span>{getTypeLabel(edu.type)}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-blue-400 mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-semibold text-slate-300 mb-2">
                          <GraduationCap size={20} />
                          {edu.institution}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 text-slate-400 text-sm md:text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2 md:justify-end">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 md:justify-end">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 md:self-end">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {edu.status}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4">{edu.description}</p>

                    {/* Highlights */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-slate-400 mb-2">
                          Destaques:
                        </h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-slate-300 text-sm flex items-start"
                            >
                              <span className="text-blue-400 mr-2">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Certificações <span className="text-gradient">Adicionais</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Java Avançado',
                issuer: 'Udemy',
                year: '2024',
              },
              {
                name: 'Microsserviços com Spring Boot',
                issuer: 'Udemy',
                year: '2024',
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                    <p className="text-sm text-slate-400 mb-2">{cert.issuer}</p>
                    <span className="text-xs text-slate-500">{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
