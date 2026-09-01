import type { ComponentType } from 'react'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { EducationSection } from './EducationSection'
import { ProfessionalSection } from './ProfessionalSection'
import { ProjectsSection } from './ProjectsSection'

export type SectionConfig = {
  component: ComponentType
  animateFooter?: boolean
}

export const sections: Record<string, SectionConfig> = {
  contato: { component: ContactSection, animateFooter: true },
  'sobre-mim': { component: AboutSection },
  formacao: { component: EducationSection },
  profissional: { component: ProfessionalSection },
  projetos: { component: ProjectsSection },
}

export function getSectionId(href: string) {
  return href.replace('#', '')
}
