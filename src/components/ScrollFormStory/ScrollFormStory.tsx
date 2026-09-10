import { useRef, type ReactNode } from 'react'
import PhoneFrame from './PhoneFrame'
import PhoneScreen from './PhoneScreen'
import { useIsMobile } from './useIsMobile'
import { useScrollTimeline } from './useScrollTimeline'
import styles from './ScrollFormStory.module.css'

interface ScrollFormStoryProps {
  children: ReactNode
}

const MOBILE_BREAKPOINT = 860

/**
 * The reading blocks (StoryStages.tsx) occupy roughly the first ~62% of
 * this page's height — the rest is the dark/features/closing sections
 * after them. Compressing the story into that same stretch (instead of
 * spreading it across the whole page) means it finishes right as those
 * sections begin, instead of still animating next to unrelated copy. See
 * useScrollTimeline's `scale` option and timeline.ts for the full story.
 */
const STORY_SCALE = 1.6

/**
 * Desktop shell for the scroll-driven product story: a phone mockup stays
 * pinned beside the page (from just under the header to just above the
 * footer, vertically centered in the space between) while `children` — the
 * normal landing-page sections — scroll past on the other side. Only the
 * phone column is `position: sticky`; the sections column is plain
 * document flow, so the page never stops scrolling.
 *
 * Below MOBILE_BREAKPOINT this renders `children` untouched — a wide
 * sticky sidebar doesn't fit a phone-width viewport, so mobile gets its
 * own compact, non-overlapping layout instead (MobilePhoneStory.tsx),
 * placed explicitly by the page rather than wrapped around everything.
 *
 * The document inside the phone fills in as a pure function of scroll
 * position: useScrollTimeline writes `--progress` / `--p-*` CSS custom
 * properties onto the shared grid root (see useScrollTimeline.ts), and
 * every animated piece in PhoneScreen/FormPreview reads its own window off
 * those variables (see timeline.ts) — so scrolling itself never re-renders
 * React.
 */
export default function ScrollFormStory({ children }: ScrollFormStoryProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  useScrollTimeline(rootRef, { enabled: !isMobile, scale: STORY_SCALE })

  if (isMobile) {
    return <>{children}</>
  }

  return (
    <div className={styles.shell} ref={rootRef}>
      <div className={styles.sectionsCol}>{children}</div>

      <div className={styles.phoneCol}>
        <div className={styles.phoneStage}>
          <div className={styles.phoneBox}>
            <PhoneFrame>
              <PhoneScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </div>
  )
}
