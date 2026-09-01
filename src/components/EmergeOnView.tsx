import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './EmergeOnView.module.scss'

type EmergeOnViewProps = {
  children: ReactNode
  className?: string
}

export function EmergeOnView({ children, className }: EmergeOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -5% 0px',
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.emerge} ${visible ? styles.visible : ''} ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
