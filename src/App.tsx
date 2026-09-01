import { BackToTop } from './components/BackToTop'
import { EmergeOnView } from './components/EmergeOnView'
import { Header } from './components/Header'
import { ScrollIndicator } from './components/ScrollIndicator'
import { navItems } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'
import { getSectionId, sections } from './sections'
import styles from './App.module.scss'

const sectionIds = navItems.map((item) => getSectionId(item.href))

function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className={styles.app}>
      <Header
        theme={theme}
        activeSection={activeSection}
        onToggleTheme={toggleTheme}
      />

      <main className={styles.main}>
        {navItems.map((item, index) => {
          const id = getSectionId(item.href)
          const { component: Section } = sections[id]
          const isLast = index === navItems.length - 1
          const nextSection = navItems[index + 1]

          return (
            <section key={id} id={id} className={styles.section}>
              <EmergeOnView className={styles.sectionInner}>
                <div className={styles.sectionContent}>
                  <Section />
                </div>

                <div className={styles.sectionFooter}>
                  {isLast ? (
                    <BackToTop />
                  ) : (
                    <ScrollIndicator href={nextSection.href} />
                  )}
                </div>
              </EmergeOnView>
            </section>
          )
        })}
      </main>
    </div>
  )
}

export default App
