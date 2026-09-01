import type { Localized } from '../i18n/locale'

export type Project = {
  title: string
  description: Localized
  image?: string
  year: string
  stacks: string[]
  url?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Infinity',
    description: {
      pt: 'Aplicação mobile em React Native desenvolvida na Nomad Innovation, com mapas, notificações e integração em tempo real.',
      en: 'React Native mobile app built at Nomad Innovation, with maps, notifications, and real-time integration.',
    },
    image: '/projects/infinity.png',
    year: '2026',
    stacks: ['React Native', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Agora Sou Mãe',
    description: {
      pt: 'E-commerce de moda materna desenvolvido na Nomad Innovation. Loja e painel admin em Angular, API em C# .NET com PostgreSQL.',
      en: 'Maternity fashion e-commerce built at Nomad Innovation. Store and admin panel in Angular, C# .NET API with PostgreSQL.',
    },
    image: '/projects/agora-sou-mae.png',
    year: '2026',
    stacks: ['Angular', 'C#', '.NET', 'PostgreSQL'],
    url: 'https://www.agorasoumae.com.br/',
  },
  {
    title: 'Avaliação',
    description: {
      pt: 'Aplicação Flutter de avaliações internas e CMS em Laravel para gestão de conteúdo, com API e autenticação.',
      en: 'Flutter app for internal assessments and a Laravel CMS for content management, with API and authentication.',
    },
    image: '/projects/avaliacao-app.png',
    year: '2025',
    stacks: ['Flutter', 'Laravel', 'MySQL'],
  },
  {
    title: 'ToDo App',
    description: {
      pt: 'Lista de tarefas em Flutter com várias listas personalizadas para organizar o dia a dia.',
      en: 'Flutter to-do app with multiple custom lists for organising daily tasks.',
    },
    image: '/projects/flutter-todo.png',
    year: '2024',
    stacks: ['Flutter', 'Firebase'],
    repo: 'https://github.com/pbgollo/flutter-todo-app',
  },
  {
    title: 'Comandos CMD',
    description: {
      pt: 'Programa em C com interface de linha de comandos para tarefas de sistema, compatível com Windows e Linux.',
      en: 'C program with a command-line interface for system tasks, compatible with Windows and Linux.',
    },
    image: '/projects/comandos-cmd.png',
    year: '2024',
    stacks: ['C'],
    repo: 'https://github.com/pbgollo/comandos-cmd',
  },
  {
    title: 'Pulse',
    description: {
      pt: 'Reprodutor musical em Java e Swing, com playlists e base de dados MySQL. Projeto académico na UCS.',
      en: 'Music player in Java and Swing, with playlists and a MySQL database. Academic project at UCS.',
    },
    image: '/projects/pulse.png',
    year: '2023',
    stacks: ['Java', 'MySQL'],
    repo: 'https://github.com/pbgollo/pulse',
  },
]
