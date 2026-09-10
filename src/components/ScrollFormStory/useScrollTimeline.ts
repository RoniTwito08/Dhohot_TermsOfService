import { useEffect, type RefObject } from 'react'
import { TIMELINE } from './timeline'
import { useReducedMotion } from './useReducedMotion'

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

/**
 * Drives the whole scroll story off a single scroll listener.
 *
 * Progress is written straight onto the DOM as CSS custom properties
 * (`--progress` plus one `--p-<key>` per timeline window) instead of React
 * state, so scrolling never triggers a re-render — every visual beat is a
 * pure CSS function of these variables. The listener is rAF-throttled so at
 * most one recompute happens per frame.
 */
interface UseScrollTimelineOptions {
  /** Set false when this instance's root isn't rendered/relevant right now (e.g. the desktop story on a mobile viewport) — skips attaching listeners. */
  enabled?: boolean
  /**
   * Compresses the canonical 0 → 1 story timeline into the first
   * `1 / scale` of this root's raw scroll progress — e.g. 1.6 finishes the
   * whole story by 62% of the way through. Use this when the root spans
   * more than just the story itself (the desktop sidebar's root is the
   * whole page — see ScrollFormStory.tsx); leave at 1 when the root *is*
   * the story's own bounded height (MobilePhoneStory.tsx).
   */
  scale?: number
}

export function useScrollTimeline(
  sectionRef: RefObject<HTMLElement>,
  { enabled = true, scale = 1 }: UseScrollTimelineOptions = {}
) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = sectionRef.current
    if (!el || !enabled) return

    if (reducedMotion) {
      el.style.setProperty('--progress', '1')
      for (const { key } of TIMELINE) el.style.setProperty(`--p-${key}`, '1')
      return
    }

    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const scrollableDistance = el.offsetHeight - window.innerHeight
      const rawProgress =
        scrollableDistance > 0 ? clamp(-rect.top / scrollableDistance, 0, 1) : 0
      const progress = clamp(rawProgress * scale, 0, 1)

      el.style.setProperty('--progress', progress.toFixed(4))
      for (const { key, start, end } of TIMELINE) {
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
  }, [reducedMotion, sectionRef, enabled, scale])

  return { reducedMotion }
}
