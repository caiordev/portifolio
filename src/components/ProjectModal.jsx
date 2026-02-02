import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Users, Target, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t } = useLanguage();
  
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Image */}
              <div className="relative">
                {project.image && (
                  <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  </div>
                )}
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-400 hover:text-white" />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-slate-300">{project.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 text-sm">
                  {project.date && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={18} className="text-blue-400" />
                      <span>{project.date}</span>
                    </div>
                  )}
                  {project.team && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users size={18} className="text-cyan-400" />
                      <span>{project.team}</span>
                    </div>
                  )}
                  {project.status && (
                    <div className="flex items-center gap-2">
                      <Zap size={18} className="text-green-400" />
                      <span className="text-green-400 font-semibold">{project.status}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('projects.about')}</h3>
                  <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
                </div>

                {/* Problem & Solution */}
                {(project.problem || project.solution) && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.problem && (
                      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-red-400 mb-2 flex items-center gap-2">
                          <Target size={18} />
                          {t('projects.problem')}
                        </h4>
                        <p className="text-slate-300 text-sm">{project.problem}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                          <Zap size={18} />
                          {t('projects.solution')}
                        </h4>
                        <p className="text-slate-300 text-sm">{project.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('projects.features')}</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-slate-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('experience.technologies')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results/Metrics */}
                {project.results && project.results.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('projects.results')}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.results.map((result, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                          <p className="text-slate-300">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                      {t('projects.viewLive')}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      <Github size={20} />
                      {t('projects.sourceCode')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
