export type Project = {
  title: string
  description: string
  image?: string
  year: string
  stacks: string[]
  url?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Infinity',
    description:
      'Aplicação mobile em React Native desenvolvida na Nomad Innovation, com mapas, notificações e integração em tempo real.',
    image: '/projects/infinity.png',
    year: '2026',
    stacks: ['React Native', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Agora Sou Mãe',
    description:
      'E-commerce de moda materna desenvolvido na Nomad Innovation. Loja e painel admin em Angular, API em C# .NET com PostgreSQL.',
    image: '/projects/agora-sou-mae.png',
    year: '2026',
    stacks: ['Angular', 'C#', '.NET', 'PostgreSQL'],
    url: 'https://www.agorasoumae.com.br/',
  },
  {
    title: 'Avaliação',
    description:
      'Aplicação Flutter de avaliações internas e CMS em Laravel para gestão de conteúdo, com API e autenticação.',
    image: '/projects/avaliacao-app.png',
    year: '2025',
    stacks: ['Flutter', 'Laravel', 'MySQL'],
  },

  {
    title: 'ToDo App',
    description:
      'Lista de tarefas em Flutter com várias listas personalizadas para organizar o dia a dia.',
    image: '/projects/flutter-todo.png',
    year: '2024',
    stacks: ['Flutter', 'Firebase'],
    repo: 'https://github.com/pbgollo/flutter-todo-app',
  },
  {
    title: 'Comandos CMD',
    description:
      'Programa em C com interface de linha de comandos para tarefas de sistema, compatível com Windows e Linux.',
    image: '/projects/comandos-cmd.png',
    year: '2024',
    stacks: ['C'],
    repo: 'https://github.com/pbgollo/comandos-cmd',
  },
  {
    title: 'Pulse',
    description:
      'Reprodutor musical em Java e Swing, com playlists e base de dados MySQL. Projeto académico na UCS.',
    image: '/projects/pulse.png',
    year: '2023',
    stacks: ['Java', 'MySQL'],
    repo: 'https://github.com/pbgollo/pulse',
  },
]
