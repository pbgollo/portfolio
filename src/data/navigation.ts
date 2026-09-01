export type NavItem = {
  id: 'contato' | 'sobre-mim' | 'formacao' | 'profissional' | 'projetos'
  href: string
}

export const navItems = [
  { id: 'contato', href: '#contato' },
  { id: 'sobre-mim', href: '#sobre-mim' },
  { id: 'formacao', href: '#formacao' },
  { id: 'profissional', href: '#profissional' },
  { id: 'projetos', href: '#projetos' },
] satisfies NavItem[]
