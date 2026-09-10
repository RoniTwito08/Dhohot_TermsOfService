import { useEffect, type RefObject } from 'react'
import { useReducedMotion } from './useReducedMotion'

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

interface Window {
  key: string
  start: number
  end: number
}

/**
 * Mobile's own, much smaller cousin of useScrollTimeline: instead of a
 * dedicated tall spacer (which would mean a big empty scroll gap), this
 * tracks `el`'s own natural transit through the viewport — 0 as it enters
 * from the bottom, 1 as it fully exits the top — so the collapse plays out
 * purely from the element's ordinary scroll position. No pinning, no
 * reserved dead space: the page keeps moving the whole time.
 */
const WINDOWS: readonly Window[] = [
  { key: 'fly', start: 0.35, end: 0.75 },
  { key: 'compress', start: 0.65, end: 0.9 },
  { key: 'bubble', start: 0.85, end: 1 },
]

export function useCollapseProgress(wrapRef: RefObject<HTMLElement>) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    if (reducedMotion) {
      el.style.setProperty('--progress', '1')
      for (const { key } of WINDOWS) el.style.setProperty(`--p-${key}`, '1')
      return
    }

    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = vh + rect.height
      const progress = total > 0 ? clamp((vh - rect.top) / total, 0, 1) : 0

      el.style.setProperty('--progress', progress.toFixed(4))
      for (const { key, start, end } of WINDOWS) {
        const local = clamp((progress - start) / (end - start), 0, 1)
        el.style.setProperty(`--p-${key}`, local.toFixed(4))
      }
    }

    const onScrollOrResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [wrapRef, reducedMotion])
}
