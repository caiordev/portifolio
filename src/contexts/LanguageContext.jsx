import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to 'pt-br'
    return localStorage.getItem('language') || 'pt-br';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt-br' ? 'en' : 'pt-br');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  'pt-br': {
    // Navbar
    'nav.about': 'Sobre',
    'nav.education': 'Educação',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',

    // Hero
    'hero.badge': 'Disponível para novos projetos',
    'hero.title1': 'Desenvolvedor',
    'hero.title2': 'Full Stack',
    'hero.subtitle': 'Transformo ideias em produtos digitais. Especializado em tecnologias modernas e arquiteturas escaláveis.',
    'hero.contact': 'Entre em Contato',
    'hero.downloadCV': 'Baixar CV',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.scrollDown': 'Role para baixo',

    // About
    'about.title': 'Sobre',
    'about.titleHighlight': 'Mim',
    'about.subtitle': 'Conheça mais sobre minha trajetória e paixão por tecnologia',

    // Experience
    'experience.title': 'Experiência',
    'experience.titleHighlight': 'Profissional',
    'experience.subtitle': 'Minha jornada profissional construindo soluções inovadoras',
    'experience.viewDetails': 'Ver detalhes completos',
    'experience.responsibilities': 'Responsabilidades',
    'experience.achievements': 'Conquistas',
    'experience.technologies': 'Tecnologias Utilizadas',
    'experience.additionalDetails': 'Detalhes Adicionais',
    'experience.close': 'Fechar',

    // Projects
    'projects.title': 'Projetos',
    'projects.titleHighlight': 'Lançados',
    'projects.subtitle': 'Soluções que transformaram ideias em realidade',
    'projects.all': 'Todos',
    'projects.fullstack': 'Full Stack',
    'projects.frontend': 'Frontend',
    'projects.mobile': 'Mobile',
    'projects.viewProject': 'Ver detalhes do projeto',
    'projects.about': 'Sobre o Projeto',
    'projects.problem': 'Problema',
    'projects.solution': 'Solução',
    'projects.features': 'Funcionalidades Principais',
    'projects.results': 'Resultados',
    'projects.viewLive': 'Ver Projeto',
    'projects.sourceCode': 'Código Fonte',
    'projects.noProjects': 'Nenhum projeto encontrado nesta categoria',

    // Skills
    'skills.title': 'Habilidades',
    'skills.titleHighlight': 'Técnicas',
    'skills.subtitle': 'Um arsenal completo de tecnologias modernas e metodologias comprovadas',
    'skills.softSkillsTitle': 'Habilidades Interpessoais',
    'skills.softSkillsSubtitle': 'Competências essenciais para trabalho em equipe e liderança',

    // Contact
    'contact.title': 'Vamos',
    'contact.titleHighlight': 'Conversar',
    'contact.subtitle': 'Tem um projeto em mente? Vamos transformar sua ideia em realidade digital',
    'contact.infoTitle': 'Informações de Contato',
    'contact.email': 'Email',
    'contact.emailDesc': 'Respondo em até 24h',
    'contact.phone': 'Telefone',
    'contact.phoneDesc': 'WhatsApp disponível',
    'contact.location': 'Localização',
    'contact.locationDesc': 'Disponível para remoto',
    'contact.availability': 'Disponibilidade',
    'contact.availabilityValue': 'Disponível',
    'contact.availabilityDesc': 'Para novos projetos',
    'contact.connectTitle': 'Conecte-se Comigo',
    'contact.formName': 'Nome',
    'contact.formNamePlaceholder': 'Seu nome',
    'contact.formEmail': 'Email',
    'contact.formEmailPlaceholder': 'seu.email@exemplo.com',
    'contact.formSubject': 'Assunto',
    'contact.formSubjectPlaceholder': 'Sobre o que você quer falar?',
    'contact.formMessage': 'Mensagem',
    'contact.formMessagePlaceholder': 'Conte-me sobre seu projeto...',
    'contact.formSubmit': 'Enviar Mensagem',

    // About
    'about.subtitle2': 'Desenvolvedor apaixonado por tecnologia e inovação',
    'about.journeyTitle': 'Minha Jornada',
    'about.journeyP1': 'Sou um desenvolvedor de software autodidata e entusiasta de tecnologia. Comecei minha jornada desenvolvendo projetos pessoais e explorando diferentes tecnologias.',
    'about.journeyP2': 'Durante minha carreira, participei de diversos projetos desafiadores que moldaram minha experiência profissional. Trabalhei com múltiplas stacks tecnológicas, desde desenvolvimento web até arquiteturas de microserviços.',
    'about.journeyP3': 'Hoje sou um desenvolvedor Full Stack capaz de trabalhar com múltiplas tecnologias, além de atuar em projetos freelance de construção de sistemas escaláveis e modernos.',
    'about.roleTitle': 'Full Stack Developer',
    'about.roleSubtitle': 'Construindo o futuro digital',
    'about.valuesTitle': 'Valores & Princípios',
    'about.value1Title': 'Código Limpo',
    'about.value1Desc': 'Fissurado por escrever código limpo, testável e bem documentado',
    'about.value2Title': 'Inovação',
    'about.value2Desc': 'Sempre em busca de novas tecnologias e soluções criativas',
    'about.value3Title': 'Foco em Resultados',
    'about.value3Desc': 'Orientado a entregar valor real e impacto positivo nos projetos',
    'about.value4Title': 'Idiomas',
    'about.value4Desc': 'Comunicação global para projetos internacionais',

    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.description': 'Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e experiências de usuário excepcionais.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.contactTitle': 'Contato',
    'footer.developedWith': 'Desenvolvido por',

    // Common
    'common.more': 'mais',
    'common.team': 'Equipe de',
    'common.soloProject': 'Projeto Solo',
    'common.inProduction': 'Em Produção',
    'common.date': 'Data',
    'common.location': 'Localização',
    'common.remote': 'Remoto',
  },
  'en': {
    // Navbar
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Available for new projects',
    'hero.title1': 'Full Stack',
    'hero.title2': 'Developer',
    'hero.subtitle': 'I transform ideas into digital products. Specialized in modern technologies and scalable architectures.',
    'hero.contact': 'Get in Touch',
    'hero.downloadCV': 'Download CV',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.scrollDown': 'Scroll down',

    // About
    'about.title': 'About',
    'about.titleHighlight': 'Me',
    'about.subtitle': 'Learn more about my journey and passion for technology',

    // Experience
    'experience.title': 'Professional',
    'experience.titleHighlight': 'Experience',
    'experience.subtitle': 'My professional journey building innovative solutions',
    'experience.viewDetails': 'View full details',
    'experience.responsibilities': 'Responsibilities',
    'experience.achievements': 'Achievements',
    'experience.technologies': 'Technologies Used',
    'experience.additionalDetails': 'Additional Details',
    'experience.close': 'Close',

    // Projects
    'projects.title': 'Launched',
    'projects.titleHighlight': 'Projects',
    'projects.subtitle': 'Solutions that transformed ideas into reality',
    'projects.all': 'All',
    'projects.fullstack': 'Full Stack',
    'projects.frontend': 'Frontend',
    'projects.mobile': 'Mobile',
    'projects.viewProject': 'View project details',
    'projects.about': 'About the Project',
    'projects.problem': 'Problem',
    'projects.solution': 'Solution',
    'projects.features': 'Key Features',
    'projects.results': 'Results',
    'projects.viewLive': 'View Project',
    'projects.sourceCode': 'Source Code',
    'projects.noProjects': 'No projects found in this category',

    // Skills
    'skills.title': 'Technical',
    'skills.titleHighlight': 'Skills',
    'skills.subtitle': 'A complete arsenal of modern technologies and proven methodologies',
    'skills.softSkillsTitle': 'Soft Skills',
    'skills.softSkillsSubtitle': 'Essential competencies for teamwork and leadership',

    // Contact
    'contact.title': "Let's",
    'contact.titleHighlight': 'Talk',
    'contact.subtitle': 'Have a project in mind? Let\'s turn your idea into digital reality',
    'contact.infoTitle': 'Contact Information',
    'contact.email': 'Email',
    'contact.emailDesc': 'Response within 24h',
    'contact.phone': 'Phone',
    'contact.phoneDesc': 'WhatsApp available',
    'contact.location': 'Location',
    'contact.locationDesc': 'Available for remote',
    'contact.availability': 'Availability',
    'contact.availabilityValue': 'Available',
    'contact.availabilityDesc': 'For new projects',
    'contact.connectTitle': 'Connect With Me',
    'contact.formName': 'Name',
    'contact.formNamePlaceholder': 'Your name',
    'contact.formEmail': 'Email',
    'contact.formEmailPlaceholder': 'your.email@example.com',
    'contact.formSubject': 'Subject',
    'contact.formSubjectPlaceholder': 'What do you want to talk about?',
    'contact.formMessage': 'Message',
    'contact.formMessagePlaceholder': 'Tell me about your project...',
    'contact.formSubmit': 'Send Message',

    // About
    'about.subtitle2': 'Developer passionate about technology and innovation',
    'about.journeyTitle': 'My Journey',
    'about.journeyP1': 'I am a self-taught software developer and technology enthusiast. I started my journey developing personal projects and exploring different technologies.',
    'about.journeyP2': 'Throughout my career, I participated in several challenging projects that shaped my professional experience. I worked with multiple technology stacks, from web development to microservices architectures.',
    'about.journeyP3': 'Today I am a Full Stack developer capable of working with multiple technologies, as well as working on freelance projects building scalable and modern systems.',
    'about.roleTitle': 'Full Stack Developer',
    'about.roleSubtitle': 'Building the digital future',
    'about.valuesTitle': 'Values & Principles',
    'about.value1Title': 'Clean Code',
    'about.value1Desc': 'Passionate about writing clean, testable and well-documented code',
    'about.value2Title': 'Innovation',
    'about.value2Desc': 'Always seeking new technologies and creative solutions',
    'about.value3Title': 'Results Focused',
    'about.value3Desc': 'Oriented to deliver real value and positive impact on projects',
    'about.value4Title': 'Languages',
    'about.value4Desc': 'Global communication for international projects',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.description': 'Full Stack Developer passionate about creating innovative digital solutions and exceptional user experiences.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactTitle': 'Contact',
    'footer.developedWith': 'Developed with',

    // Common
    'common.more': 'more',
    'common.team': 'Team of',
    'common.soloProject': 'Solo Project',
    'common.inProduction': 'In Production',
    'common.date': 'Date',
    'common.location': 'Location',
    'common.remote': 'Remote',
  },
};
