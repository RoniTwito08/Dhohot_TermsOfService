import type { CSSProperties } from 'react'
import type { StoryBlock } from './timeline'
import styles from './StoryCaption.module.css'

interface StoryCaptionProps {
  block: StoryBlock
}

/** One short reading block for the compact mobile story — dims in/out as its window becomes active. */
export default function StoryCaption({ block }: StoryCaptionProps) {
  const style = { '--block-start': block.start, '--block-end': block.end } as CSSProperties

  return (
    <div className={styles.block} style={style}>
      <span className={styles.kicker}>{block.kicker}</span>
      <h3 className={styles.heading}>{block.heading}</h3>
      <p className={styles.body}>{block.body}</p>
    </div>
  )
}
