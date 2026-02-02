import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Briefcase, Award, Code, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ExperienceModal = ({ experience, isOpen, onClose }) => {
  const { t } = useLanguage();
  
  if (!experience) return null;

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
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-6 flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-blue-400 mb-2">
                    {experience.position}
                  </h2>
                  <div className="flex items-center gap-2 text-lg text-slate-300">
                    <Briefcase size={20} />
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-400 hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Period and Location */}
                <div className="flex flex-wrap gap-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-400" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-blue-400" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                {experience.responsibilities && experience.responsibilities.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle size={20} className="text-blue-400" />
                      {t('experience.responsibilities')}
                    </h3>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((item, index) => (
                        <li key={index} className="text-slate-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Award size={20} className="text-yellow-400" />
                      {t('experience.achievements')}
                    </h3>
                    <ul className="space-y-2">
                      {experience.achievements.map((item, index) => (
                        <li key={index} className="text-slate-300 flex items-start">
                          <span className="text-yellow-400 mr-3 mt-1">★</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Code size={20} className="text-cyan-400" />
                      {t('experience.technologies')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400 font-medium hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Details */}
                {experience.details && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {t('experience.additionalDetails')}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {experience.details}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-6">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  {t('experience.close')}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal;
