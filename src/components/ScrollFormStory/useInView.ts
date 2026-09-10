import { useEffect, useRef, useState } from 'react'

/**
 * One-shot "has this scrolled into view" flag — for mobile moments that
 * need a real boolean (not just an opacity/transform) to drive a child
 * animation, e.g. an SVG stroke draw. Fully visible immediately under
 * prefers-reduced-motion.
 */
export function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
