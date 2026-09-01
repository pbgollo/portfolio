import { useEffect, useState } from 'react'

const HEADER_HEIGHT = 64
const ACTIVATION_OFFSET = 80

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      const activationLine = HEADER_HEIGHT + ACTIVATION_OFFSET
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        if (element.getBoundingClientRect().top <= activationLine) {
          current = id
        }
      }

      setActiveId((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  return activeId
}
