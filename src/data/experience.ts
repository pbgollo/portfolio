export type Experience = {
  period: string
  role: string
  company: string
  location: string
  highlights: [string, string, string]
}

export const experience = [
  {
    period: 'Jan 2026 — Atual',
    role: 'Software Developer Independente',
    company: 'Autónomo (MEI)',
    location: 'Caxias do Sul, Brasil',
    highlights: [
      'Desenvolvimento e manutenção de aplicações',
      'Concepção de novas funcionalidades',
      'Modelação e gestão de bases de dados',
    ],
  },
  {
    period: 'Nov 2024 — Fev 2026',
    role: 'Software Developer Full Stack',
    company: 'Nomad Innovation',
    location: 'Caxias do Sul, Brasil',
    highlights: [
      'Desenvolvimento web e mobile full stack',
      'Concepção e implementação de APIs REST',
      'Modelação de bases de dados',
    ],
  },
  {
    period: 'Ago 2024 — Nov 2024',
    role: 'Estagiário de Desenvolvimento de Software',
    company: 'Nomad Innovation',
    location: 'Caxias do Sul, Brasil',
    highlights: [
      'Apoio ao desenvolvimento de software',
      'Implementação e testes de funcionalidades',
      'Manutenção e melhoria de sistemas',
    ],
  },
  {
    period: 'Nov 2023 — Jul 2024',
    role: 'Estagiário de Suporte TI',
    company: 'Câmara Municipal de Caxias do Sul',
    location: 'Caxias do Sul, Brasil',
    highlights: [
      'Suporte técnico a utilizadores',
      'Manutenção e resolução de problemas',
      'Instalação e configuração de equipamentos',
    ],
  },
  {
    period: 'Mai 2023 — Nov 2023',
    role: 'Estagiário de Desenvolvimento de Software',
    company: 'MS2 Management Systems',
    location: 'Caxias do Sul, Brasil',
    highlights: [
      'Apoio ao desenvolvimento de software',
      'Implementação e testes de soluções',
      'Colaboração em projetos de equipa',
    ],
  },
  {
    period: 'Ago 2021 — Mai 2023',
    role: 'Montador de Painéis Elétricos',
    company: 'Randon Auttom',
    location: 'Caxias do Sul, Brasil',
    highlights: [
      'Montagem e cablagem de painéis elétricos',
      'Interpretação de diagramas elétricos',
      'Testes e validação de sistemas',
    ],
  },
  {
    period: 'Jul 2019 — Jul 2021',
    role: 'Aprendiz de Eletrónica',
    company: 'Randon Auttom',
    location: 'Caxias do Sul, Brasil',
    highlights: [
      'Apoio em automação industrial',
      'Montagem de sistemas eletrónicos',
      'Apoio a equipas técnicas de produção',
    ],
  },
] satisfies Experience[]
