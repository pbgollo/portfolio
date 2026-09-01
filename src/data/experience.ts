import type { Localized } from '../i18n/locale'

export type Experience = {
  period: Localized
  role: Localized
  company: Localized
  location: Localized
  highlights: Localized<[string, string, string]>
}

export const experience: Experience[] = [
  {
    period: { pt: 'Jan 2026 — Atual', en: 'Jan 2026 — Present' },
    role: {
      pt: 'Software Developer Independente',
      en: 'Independent Software Developer',
    },
    company: { pt: 'Autónomo (MEI)', en: 'Self-employed (MEI)' },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
    highlights: {
      pt: [
        'Desenvolvimento e manutenção de aplicações',
        'Concepção de novas funcionalidades',
        'Modelação e gestão de bases de dados',
      ],
      en: [
        'Application development and maintenance',
        'Design of new features',
        'Database modelling and management',
      ],
    },
  },
  {
    period: { pt: 'Nov 2024 — Fev 2026', en: 'Nov 2024 — Feb 2026' },
    role: {
      pt: 'Software Developer Full Stack',
      en: 'Full Stack Software Developer',
    },
    company: { pt: 'Nomad Innovation', en: 'Nomad Innovation' },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
    highlights: {
      pt: [
        'Desenvolvimento web e mobile full stack',
        'Concepção e implementação de APIs REST',
        'Modelação de bases de dados',
      ],
      en: [
        'Full-stack web and mobile development',
        'Design and implementation of REST APIs',
        'Database modelling',
      ],
    },
  },
  {
    period: { pt: 'Ago 2024 — Nov 2024', en: 'Aug 2024 — Nov 2024' },
    role: {
      pt: 'Estagiário de Desenvolvimento de Software',
      en: 'Software Development Intern',
    },
    company: { pt: 'Nomad Innovation', en: 'Nomad Innovation' },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
    highlights: {
      pt: [
        'Apoio ao desenvolvimento de software',
        'Implementação e testes de funcionalidades',
        'Manutenção e melhoria de sistemas',
      ],
      en: [
        'Support for software development',
        'Feature implementation and testing',
        'System maintenance and improvement',
      ],
    },
  },
  {
    period: { pt: 'Nov 2023 — Jul 2024', en: 'Nov 2023 — Jul 2024' },
    role: {
      pt: 'Estagiário de Suporte TI',
      en: 'IT Support Intern',
    },
    company: {
      pt: 'Câmara Municipal de Caxias do Sul',
      en: 'Caxias do Sul City Hall',
    },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
    highlights: {
      pt: [
        'Suporte técnico a utilizadores',
        'Manutenção e resolução de problemas',
        'Instalação e configuração de equipamentos',
      ],
      en: [
        'Technical support for users',
        'Maintenance and troubleshooting',
        'Equipment installation and configuration',
      ],
    },
  },
  {
    period: { pt: 'Mai 2023 — Nov 2023', en: 'May 2023 — Nov 2023' },
    role: {
      pt: 'Estagiário de Desenvolvimento de Software',
      en: 'Software Development Intern',
    },
    company: { pt: 'MS2 Management Systems', en: 'MS2 Management Systems' },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
    highlights: {
      pt: [
        'Apoio ao desenvolvimento de software',
        'Implementação e testes de soluções',
        'Colaboração em projetos de equipa',
      ],
      en: [
        'Support for software development',
        'Implementation and testing of solutions',
        'Collaboration on team projects',
      ],
    },
  },
  {
    period: { pt: 'Ago 2021 — Mai 2023', en: 'Aug 2021 — May 2023' },
    role: {
      pt: 'Montador de Painéis Elétricos',
      en: 'Electrical Panel Assembler',
    },
    company: { pt: 'Randon Auttom', en: 'Randon Auttom' },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
    highlights: {
      pt: [
        'Montagem e cablagem de painéis elétricos',
        'Interpretação de diagramas elétricos',
        'Testes e validação de sistemas',
      ],
      en: [
        'Assembly and wiring of electrical panels',
        'Interpretation of electrical diagrams',
        'System testing and validation',
      ],
    },
  },
  {
    period: { pt: 'Jul 2019 — Jul 2021', en: 'Jul 2019 — Jul 2021' },
    role: {
      pt: 'Aprendiz de Eletrónica',
      en: 'Electronics Apprentice',
    },
    company: { pt: 'Randon Auttom', en: 'Randon Auttom' },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
    highlights: {
      pt: [
        'Apoio em automação industrial',
        'Montagem de sistemas eletrónicos',
        'Apoio a equipas técnicas de produção',
      ],
      en: [
        'Support in industrial automation',
        'Assembly of electronic systems',
        'Support for production technical teams',
      ],
    },
  },
]
