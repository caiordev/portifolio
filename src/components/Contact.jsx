import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      titleKey: 'contact.email',
      value: 'caio33115@gmail.com',
      descKey: 'contact.emailDesc',
      link: 'mailto:caio33115@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      titleKey: 'contact.phone',
      value: '+55 (98) 984924264',
      descKey: 'contact.phoneDesc',
      link: 'https://wa.me/5598984924264',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      titleKey: 'contact.location',
      value: 'São Luís, MA',
      descKey: 'contact.locationDesc',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      titleKey: 'contact.availability',
      valueKey: 'contact.availabilityValue',
      descKey: 'contact.availabilityDesc',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-slate-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">{t('contact.infoTitle')}</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mt-1">{info.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{t(info.titleKey)}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-300">{info.valueKey ? t(info.valueKey) : info.value}</p>
                    )}
                    <p className="text-slate-500 text-sm">{t(info.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('contact.connectTitle')}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-slate-100"
                  placeholder={t('contact.formNamePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-slate-100"
                  placeholder={t('contact.formEmailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t('contact.formSubject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-slate-100"
                  placeholder={t('contact.formSubjectPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-slate-100 resize-none"
                  placeholder={t('contact.formMessagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t('contact.formSubmit')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
