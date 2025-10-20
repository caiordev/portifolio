import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Download, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">{t('hero.badge')}</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient glow">{t('hero.title1')}</span>
            <br />
            <span className="text-white">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Code2 size={20} />
                {t('hero.contact')}
              </a>
              <a
                href="public/CAIOREIS.pdf"
                download
                className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                {t('hero.downloadCV')}
              </a>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/caiordev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
              >
                <Github size={20} />
                {t('hero.github')}
              </a>
              <a
                href="https://www.linkedin.com/in/caioreis17/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
              >
                <Linkedin size={20} />
                {t('hero.linkedin')}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#about" className="inline-flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors">
              <span className="text-sm mb-2">{t('hero.scrollDown')}</span>
              <ArrowDown className="animate-bounce" size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
