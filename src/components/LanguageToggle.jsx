import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = ({ mobile = false }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 ${
        mobile ? 'w-full justify-center' : ''
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg">{language === 'pt-br' ? '🇧🇷' : '🇺🇸'}</span>
      <span className="text-sm font-semibold text-slate-300">
        {language === 'pt-br' ? 'PT' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
