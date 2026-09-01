import type { Locale } from './locale'

type NavId = 'contato' | 'sobre-mim' | 'formacao' | 'profissional' | 'projetos'

type Dictionary = {
  nav: Record<NavId, string>
  navAria: string
  themeToLight: string
  themeToDark: string
  languageAria: string
  backToTop: string
  scrollDown: string
  aboutTitle: string
  aboutText: string
  skills: string
  skillsAria: string
  educationTitle: string
  professionalTitle: string
  projectsTitle: string
  personalAria: string
  socialAria: string
}

export const translations: Record<Locale, Dictionary> = {
  pt: {
    nav: {
      contato: 'Contato',
      'sobre-mim': 'Sobre mim',
      formacao: 'Formação',
      profissional: 'Profissional',
      projetos: 'Projetos',
    },
    navAria: 'Navegação principal',
    themeToLight: 'Ativar tema claro',
    themeToDark: 'Ativar tema escuro',
    languageAria: 'Selecionar idioma',
    backToTop: 'Voltar ao início',
    scrollDown: 'Rolar para baixo',
    aboutTitle: 'Sobre mim',
    aboutText:
      'Software developer com experiência profissional em engenharia de software e no desenvolvimento de aplicações full stack. Sou licenciado em Análise e Desenvolvimento de Sistemas e encontro-me a frequentar uma segunda licenciatura em Engenharia de Software, incluindo um período de mobilidade académica na Universidade de Coimbra, Portugal. Tenho particular interesse em engenharia de software, arquitetura de software e no desenvolvimento de sistemas de elevada qualidade.',
    skills: 'Skills',
    skillsAria: 'Principais stacks',
    educationTitle: 'Formação',
    professionalTitle: 'Profissional',
    projectsTitle: 'Projetos',
    personalAria: 'Informações pessoais',
    socialAria: 'Redes sociais',
  },
  en: {
    nav: {
      contato: 'Contact',
      'sobre-mim': 'About',
      formacao: 'Education',
      profissional: 'Experience',
      projetos: 'Projects',
    },
    navAria: 'Main navigation',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    languageAria: 'Select language',
    backToTop: 'Back to top',
    scrollDown: 'Scroll down',
    aboutTitle: 'About me',
    aboutText:
      'Software developer with professional experience in software engineering and full-stack application development. I hold a degree in Systems Analysis and Development and am currently pursuing a second degree in Software Engineering, including an academic mobility period at the University of Coimbra, Portugal. I am particularly interested in software engineering, software architecture, and the development of high-quality software systems.',
    skills: 'Skills',
    skillsAria: 'Main stacks',
    educationTitle: 'Education',
    professionalTitle: 'Experience',
    projectsTitle: 'Projects',
    personalAria: 'Personal information',
    socialAria: 'Social links',
  },
}
