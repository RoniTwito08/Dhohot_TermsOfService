import { useLayoutEffect, useRef } from 'react'
import FormPreview from './FormPreview'
import { useFlyGeometry } from './useFlyGeometry'
import WhatsAppChat from './WhatsAppChat'
import WhatsAppIcon from './WhatsAppIcon'
import styles from './PhoneScreen.module.css'

/**
 * What lives inside the phone's screen for the whole story — a real
 * viewport onto the (much taller than the screen) report, not a shrunk
 * screenshot of it.
 *
 * `.viewport` is the fixed, clipped window (like a phone's screen);
 * `.track` holds the full-height, full-size FormPreview and is translated
 * upward as the page scrolls (`--p-reveal`, driven by useScrollTimeline —
 * see timeline.ts), the same way scrolling a real app does. Once the
 * report has fully scrolled into view, `.viewport` itself (now showing the
 * finished report) detaches and collapses toward the WhatsApp badge — a
 * "genie" effect (see .viewport in PhoneScreen.module.css): it shrinks and
 * warps into a narrowing funnel while translating, converging exactly on
 * the badge's real on-screen position (useFlyGeometry measures both boxes'
 * actual `getBoundingClientRect()`, not a guessed percentage). Right as it
 * lands, the badge pulses (`--p-compress`) and the screen resolves to the
 * WhatsApp chat view (`--p-bubble`). The physical phone frame itself never
 * moves or resizes through any of this.
 */
export default function PhoneScreen() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!wrap || !viewport || !track) return

    const measure = () => {
      const distance = Math.max(0, track.scrollHeight - viewport.clientHeight)
      wrap.style.setProperty('--scroll-distance', `${distance}px`)
    }

    const observer = new ResizeObserver(measure)
    observer.observe(track)
    observer.observe(viewport)
    measure()
    return () => observer.disconnect()
  }, [])

  // Source = wrapRef, not viewportRef: the viewport is what this same
  // animation transforms, so measuring it would feed back into itself.
  // wrapRef never moves and exactly matches the viewport's own box at
  // rest (both fill the phone's safe area), so it's a stable stand-in.
  useFlyGeometry(wrapRef, wrapRef, targetRef)

  return (
    <div className={styles.stack} ref={wrapRef}>
      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.track} ref={trackRef}>
          <FormPreview />
        </div>
        <span className={styles.pdfBadge} aria-hidden="true">PDF</span>
      </div>

      <div className={styles.whatsappLayer}>
        <WhatsAppChat />
      </div>

      <div className={styles.targetWrap} ref={targetRef} aria-hidden="true">
        <span className={styles.targetRippleGate}>
          <span className={styles.targetRipple} />
        </span>
        <span className={styles.targetIcon}>
          <WhatsAppIcon className={styles.targetGlyph} />
        </span>
      </div>
    </div>
  )
}
