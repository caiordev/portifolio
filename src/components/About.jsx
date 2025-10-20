import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Lightbulb, Target, Languages, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imagens para o carrossel
  const carouselImages = [
    {
      url: 'public/WhatsApp Image 2025-10-20 at 13.05.25.jpeg',
      alt: 'Workspace com código',
    },
    {
      url: 'public/WhatsApp Image 2025-10-20 at 13.05.26 (1).jpeg',
      alt: 'Desenvolvimento de software',
    },
    {
      url: 'public/WhatsApp Image 2025-10-20 at 13.05.26.jpeg',
      alt: 'Programação em equipe',
    },
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  
  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      titleKey: 'about.value1Title',
      descKey: 'about.value1Desc',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      titleKey: 'about.value2Title',
      descKey: 'about.value2Desc',
    },
    {
      icon: <Target className="w-8 h-8" />,
      titleKey: 'about.value3Title',
      descKey: 'about.value3Desc',
    },
    {
      icon: <Languages className="w-8 h-8" />,
      titleKey: 'about.value4Title',
      descKey: 'about.value4Desc',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-slate-400 text-lg">{t('about.subtitle2')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">{t('about.journeyTitle')}</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>{t('about.journeyP1')}</p>
              <p>{t('about.journeyP2')}</p>
              <p>{t('about.journeyP3')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Carrossel de Imagens */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-blue-500/20 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselImages[currentImageIndex].url}
                    alt={carouselImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </motion.div>
              </AnimatePresence>

              {/* Texto sobre a imagem */}
              <div className="absolute inset-0 flex items-end justify-center p-8">
                <div className="text-center z-10">
                  <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gradient">{t('about.roleTitle')}</p>
                  <p className="text-slate-200 mt-2">{t('about.roleSubtitle')}</p>
                </div>
              </div>

              {/* Botões de navegação */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-800 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-800 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-blue-400 w-8'
                        : 'bg-slate-400/50 hover:bg-slate-400'
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">{t('about.valuesTitle')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{t(value.titleKey)}</h4>
                <p className="text-slate-400 text-sm">{t(value.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
