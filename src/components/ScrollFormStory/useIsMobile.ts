import { useEffect, useState } from 'react'

/** Tracks whether the viewport is at or below `breakpoint`, live. */
export function useIsMobile(breakpoint: number): boolean {
  const query = `(max-width: ${breakpoint}px)`
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handleChange = () => setIsMobile(mql.matches)
    handleChange()
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [breakpoint, query])

  return isMobile
}
