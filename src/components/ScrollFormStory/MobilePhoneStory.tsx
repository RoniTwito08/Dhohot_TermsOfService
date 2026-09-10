import { useLayoutEffect, useRef } from 'react'
import PhoneFrame from './PhoneFrame'
import PhoneScreen from './PhoneScreen'
import StoryCaption from './StoryCaption'
import { STORY_BLOCKS } from './timeline'
import { useIsMobile } from './useIsMobile'
import { useScrollTimeline } from './useScrollTimeline'
import styles from './MobilePhoneStory.module.css'

const MOBILE_BREAKPOINT = 860

/**
 * Mobile's version of the story: unlike the desktop sidebar (which follows
 * the whole page), this is a compact, self-contained block — a small
 * sticky phone up top with a few short captions scrolling underneath it,
 * bounded to just this block's own height rather than the whole page.
 * That's a deliberate choice, not a shrunk-down desktop layout: pinning a
 * phone across the *entire* mobile page would force every section's text
 * to pass behind it, which is exactly the "phone covers the content"
 * problem this replaces.
 *
 * Renders nothing above MOBILE_BREAKPOINT — the desktop sidebar in
 * ScrollFormStory.tsx already shows the phone there.
 */
export default function MobilePhoneStory() {
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  const rootRef = useRef<HTMLDivElement>(null)
  const phoneBandRef = useRef<HTMLDivElement>(null)
  useScrollTimeline(rootRef, { enabled: isMobile })

  // The captions reserve top space matching the phone band's real rendered
  // height (measured, not guessed) so they never start underneath it.
  useLayoutEffect(() => {
    if (!isMobile) return
    const root = rootRef.current
    const band = phoneBandRef.current
    if (!root || !band) return

    const observer = new ResizeObserver(([entry]) => {
      const height = Math.ceil(entry.contentRect.height)
      root.style.setProperty('--phone-band-reserve', `${height + 16}px`)
    })
    observer.observe(band)
    return () => observer.disconnect()
  }, [isMobile])

  if (!isMobile) return null

  return (
    <section className={styles.wrap} ref={rootRef} aria-label="הדגמה: יצירת דוח ושליחתו בוואטסאפ">
      <div className={styles.captions}>
        {STORY_BLOCKS.map((block) => (
          <StoryCaption key={block.key} block={block} />
        ))}
      </div>

      <div className={styles.phoneCol}>
        <div className={styles.phoneBand} ref={phoneBandRef}>
          <div className={styles.phoneBox}>
            <PhoneFrame>
              <PhoneScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
