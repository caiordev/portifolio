import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
  Layers,
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  Zap,
  Brain,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  
  const technicalSkills = [
    {
      category: 'Frontend',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Material UI', 'Vue.js'],
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
    },
    {
      category: 'Ferramentas',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
    {
      category: 'Arquitetura',
      icon: <Layers className="w-6 h-6" />,
      skills: ['Microserviços', 'REST API', 'Event-Driven', 'Clean Code'],
    },
  ];

  const softSkills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Trabalho em Equipe',
      description: 'Alta facilidade de trabalhar em equipe',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Comunicação',
      description: 'Comunicação clara, empática e efetiva',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Resolução de Problemas',
      description: 'Análise e solução de problemas complexos',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Organização',
      description: 'Capacidade de planejar e quebrar em tarefas menores',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Aprendizado Rápido',
      description: 'Adaptação rápida a novas tecnologias',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Pensamento Crítico',
      description: 'Análise crítica e tomada de decisões',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('skills.title')}</span> {t('skills.titleHighlight')}
          </h2>
          <p className="text-slate-400 text-lg">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">{t('skills.softSkillsTitle')}</h3>
          <p className="text-slate-400">{t('skills.softSkillsSubtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-cyan-400 mb-4">{skill.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
              <p className="text-slate-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
