import { useLayoutEffect, type RefObject } from 'react'

/**
 * Measures the real on-screen delta between a source element's center and
 * a target element's center, and writes it as `--fly-dx` / `--fly-dy` (px)
 * onto `wrapRef` — so a CSS `translate()` driven by those variables lands
 * exactly on the target's actual coordinates instead of an approximate
 * percentage guess. Recomputed on resize and whenever either element's own
 * box changes size (breakpoint changes, orientation change, etc.).
 *
 * `sourceRef` must be an element that is NOT itself transformed by the
 * animation this powers — measuring a moving target would feed back into
 * itself. `targetRef` can be transformed by `scale()` from its own center,
 * since that leaves its center point (what we actually measure) unchanged.
 */
export function useFlyGeometry(
  wrapRef: RefObject<HTMLElement>,
  sourceRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>
) {
  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const source = sourceRef.current
    const target = targetRef.current
    if (!wrap || !source || !target) return

    const measure = () => {
      const sourceRect = source.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      const dx = targetRect.left + targetRect.width / 2 - (sourceRect.left + sourceRect.width / 2)
      const dy = targetRect.top + targetRect.height / 2 - (sourceRect.top + sourceRect.height / 2)
      wrap.style.setProperty('--fly-dx', `${dx.toFixed(1)}px`)
      wrap.style.setProperty('--fly-dy', `${dy.toFixed(1)}px`)
    }

    const observer = new ResizeObserver(measure)
    observer.observe(source)
    observer.observe(target)
    window.addEventListener('resize', measure)
    measure()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [wrapRef, sourceRef, targetRef])
}
