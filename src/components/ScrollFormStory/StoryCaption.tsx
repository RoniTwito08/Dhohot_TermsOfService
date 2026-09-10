import type { CSSProperties } from 'react'
import type { StoryBlock } from './timeline'
import styles from './StoryCaption.module.css'

interface StoryCaptionProps {
  block: StoryBlock
  /** 'compact' for the mobile bounded story, 'roomy' for the desktop sidebar narrative (bigger type, KPI line, progress dot+rail). */
  size?: 'compact' | 'roomy'
}

/** One stage of the story: kicker, headline, KPI statement and supporting copy — dims in/out as its scroll window becomes active. */
export default function StoryCaption({ block, size = 'compact' }: StoryCaptionProps) {
  const style = { '--block-start': block.start, '--block-end': block.end } as CSSProperties

  return (
    <div className={`${styles.block} ${size === 'roomy' ? styles.roomy : ''}`} style={style}>
      <span className={styles.kicker}>{block.kicker}</span>
      <h3 className={styles.heading}>{block.heading}</h3>
      {size === 'roomy' && <p className={styles.kpi}>{block.kpi}</p>}
      <p className={styles.body}>{block.body}</p>
    </div>
  )
}
