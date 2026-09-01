export type Education = {
  period: string
  degree: string
  institution: string
  location: string
  note?: string
}

export const education = [
  {
    period: 'Ago 2025 — Atual',
    degree: 'Licenciatura em Engenharia de Software',
    institution: 'Universidade de Caxias do Sul',
    note: 'Mobilidade académica na Universidade de Coimbra, Portugal',
    location: 'Caxias do Sul, Brasil',
  },
  {
    period: 'Mar 2022 — Jul 2025',
    degree: 'Licenciatura em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade de Caxias do Sul',
    location: 'Caxias do Sul, Brasil',
  },
  {
    period: 'Jul 2019 — Jul 2021',
    degree: 'Certificado Profissional em Eletrónica Industrial',
    institution: 'SENAI — Serviço Nacional de Aprendizagem Industrial',
    location: 'Caxias do Sul, Brasil',
  },
  {
    period: 'Fev 2018 — Dez 2021',
    degree: 'Diploma Técnico em Fabrico Mecânico',
    institution: 'IFRS — Campus Caxias do Sul',
    location: 'Caxias do Sul, Brasil',
  },
] satisfies Education[]
