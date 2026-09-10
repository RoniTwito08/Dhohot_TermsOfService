import StoryCaption from './StoryCaption'
import { STORY_BLOCKS } from './timeline'
import { useIsMobile } from './useIsMobile'
import styles from './StoryStages.module.css'

const MOBILE_BREAKPOINT = 860

/**
 * The desktop narrative that runs beside the sticky phone (see
 * ScrollFormStory.tsx, which supplies `--progress` on an ancestor of
 * wherever this is placed in the page). Renders nothing on mobile — that
 * viewport gets its own compact, bounded pairing in MobilePhoneStory.tsx
 * instead, so the two never duplicate each other.
 */
export default function StoryStages() {
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  if (isMobile) return null

  return (
    <div className={styles.stages}>
      {STORY_BLOCKS.map((block) => (
        <StoryCaption key={block.key} block={block} size="roomy" />
      ))}
    </div>
  )
}
