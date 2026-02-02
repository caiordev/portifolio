import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Code } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'Site de Bíblia Online',
      subtitle: 'Leitura bíblica online',
      category: 'fullstack',
      image: 'Captura de tela de 2025-10-20 14-09-47.png',
      description: 'Site de leitura bíblica online',
      fullDescription: 'Desenvolvimento de uma plataforma de leitura bíblica online, com foco em performance e experiência do usuário. O site inclue progresso, audio leitura e liturgia diária',
      problem: 'Cliente precisava de uma plataforma de leitura bíblica online.',
      solution: 'Desenvolvimento de uma plataforma de leitura bíblica online, com foco em performance e experiência do usuário. O site inclui progresso, audio leitura e liturgia diária',
      features: [
        'Progresso',
        'Audio leitura',
        'Liturgia diária',
      ],
      technologies: ['React'],
      results: [
        'Plataforma de leitura bíblica online',

      ],
      date: '2025',
      team: 'Projeto Solo',
      status: 'Em Produção',
      liveUrl: 'https://www.leiturabiblicahoje.com.br',
      githubUrl: '',
    },
    {
      id: 2,
      title: 'Levada Turismo',
      subtitle: 'Site de venda de viagens e pacotes',
      category: 'fullstack',
      image: 'Captura de tela de 2025-10-20 14-20-00.png',
      description: 'Site de venda de viagens e pacotes',
      fullDescription: 'O site foi desenvolvido para o cliente Levada Turismo, que é uma empresa de viagens e pacotes. O site foi desenvolvido para ser responsivo e moderno, com uma interface intuitiva e fácil de usar.',
      problem: 'Cliente precisava de um site para venda de viagens e pacotes.',
      solution: 'Desenvolvimento de um site para venda de viagens e pacotes, com foco em performance e experiência do usuário.',
      features: [
        'Busca de viagens',
        'Detalhes de viagens',
      ],
      technologies: ['React.js', 'TypeScript'],
      results: [
        'Plataforma de venda de viagens e pacotes',
      ],
      date: '2025',
      team: 'Projeto Solo',
      status: 'Em Produção',
      liveUrl: 'https://www.levadaturismo.com/',
      githubUrl: '',
    },
  ];

  const categories = [
    { id: 'all', label: t('projects.all') },
    { id: 'fullstack', label: t('projects.fullstack') },
    { id: 'frontend', label: t('projects.frontend') },
    { id: 'mobile', label: t('projects.mobile') },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            {t('projects.subtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                onClick={() => handleOpenModal(project)}
                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <div className="p-3 bg-white/90 rounded-full">
                          <ExternalLink size={20} className="text-slate-900" />
                        </div>
                      )}
                      {project.githubUrl && (
                        <div className="p-3 bg-white/90 rounded-full">
                          <Github size={20} className="text-slate-900" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">{project.subtitle}</p>
                  <p className="text-slate-300 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    <Rocket size={16} />
                    <span>{t('projects.viewProject')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Code size={64} className="mx-auto text-slate-600 mb-4" />
            <p className="text-slate-400 text-lg">
              {t('projects.noProjects')}
            </p>
          </motion.div>
        )}

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default Projects;
