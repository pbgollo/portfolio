import type { Localized } from '../i18n/locale'

export type Education = {
  period: Localized
  degree: Localized
  institution: string
  location: Localized
  note?: Localized
}

export const education: Education[] = [
  {
    period: { pt: 'Ago 2025 — Atual', en: 'Aug 2025 — Present' },
    degree: {
      pt: 'Bacharelado em Engenharia de Software',
      en: "Bachelor's in Software Engineering",
    },
    institution: 'Universidade de Caxias do Sul',
    note: {
      pt: 'Mobilidade académica na Universidade de Coimbra, Portugal',
      en: 'Academic mobility at the University of Coimbra, Portugal',
    },
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
  },
  {
    period: { pt: 'Mar 2022 — Jul 2025', en: 'Mar 2022 — Jul 2025' },
    degree: {
      pt: 'Licenciatura em Análise e Desenvolvimento de Sistemas',
      en: "Graduate in Systems Analysis and Development",
    },
    institution: 'Universidade de Caxias do Sul',
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
  },
  {
    period: { pt: 'Jul 2019 — Jul 2021', en: 'Jul 2019 — Jul 2021' },
    degree: {
      pt: 'Certificado Profissional em Eletrónica Industrial',
      en: 'Professional Certificate in Industrial Electronics',
    },
    institution: 'SENAI — Serviço Nacional de Aprendizagem Industrial',
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
  },
  {
    period: { pt: 'Fev 2018 — Dez 2021', en: 'Feb 2018 — Dec 2021' },
    degree: {
      pt: 'Diploma Técnico em Fabrico Mecânico',
      en: 'Technical Diploma in Mechanical Manufacturing',
    },
    institution: 'IFRS — Campus Caxias do Sul',
    location: { pt: 'Caxias do Sul, Brasil', en: 'Caxias do Sul, Brazil' },
  },
]
