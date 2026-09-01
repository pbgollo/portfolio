import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import { ProfileHeader } from './components/ProfileHeader'
import { ScrollIndicator } from './components/ScrollIndicator'
import { SocialLinks } from './components/SocialLinks'
import { profile } from './data/profile'
import { useTheme } from './hooks/useTheme'
import styles from './App.module.scss'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.app}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className={styles.main}>
        <section id="contato" className={styles.section}>
          <div className={styles.sectionContent}>
            <Avatar src={profile.avatar} alt={profile.name} />
            <ProfileHeader name={profile.name} title={profile.title} />
            <SocialLinks links={profile.social} />
          </div>

          <ScrollIndicator href="#formacao" />
        </section>
      </main>
    </div>
  )
}

export default App
