import { BackToTop } from './components/BackToTop'
import { Header } from './components/Header'
import { ScrollIndicator } from './components/ScrollIndicator'
import { navItems } from './data/navigation'
import { useTheme } from './hooks/useTheme'
import { getSectionId, sections } from './sections'
import styles from './App.module.scss'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.app}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className={styles.main}>
        {navItems.map((item, index) => {
          const id = getSectionId(item.href)
          const { component: Section, animateFooter } = sections[id]
          const isLast = index === navItems.length - 1
          const nextSection = navItems[index + 1]

          return (
            <section key={id} id={id} className={styles.section}>
              <div className={styles.sectionContent}>
                <Section />
              </div>

              <div
                className={`${styles.sectionFooter} ${
                  animateFooter ? styles.emergeFooter : ''
                }`}
              >
                {isLast ? (
                  <BackToTop />
                ) : (
                  <ScrollIndicator href={nextSection.href} />
                )}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}

export default App
