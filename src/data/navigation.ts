export type NavItem = {
  label: string
  href: string
}

export const navItems = [
  { label: 'Contato', href: '#contato' },
  { label: 'Sobre mim', href: '#sobre-mim' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Profissional', href: '#profissional' },
  { label: 'Projetos', href: '#projetos' },
] satisfies NavItem[]
