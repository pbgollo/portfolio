import { useEffect, useRef, useState, type AnimationEvent, type ReactNode } from 'react'
import styles from './EmergeOnView.module.scss'

type EmergeOnViewProps = {
  children: ReactNode
  className?: string
}

export function EmergeOnView({ children, className }: EmergeOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      setSettled(true)
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

  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target !== ref.current || event.animationName !== 'emerge') return
    setSettled(true)
  }

  return (
    <div
      ref={ref}
      className={`${styles.emerge} ${visible ? styles.visible : ''} ${settled ? styles.settled : ''} ${className ?? ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  )
}
