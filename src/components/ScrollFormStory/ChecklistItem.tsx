import type { CSSProperties } from 'react'
import type { TimelineKey } from './timeline'
import styles from './ChecklistItem.module.css'

interface ChecklistItemProps {
  timelineKey: TimelineKey
  label: string
}

export default function ChecklistItem({ timelineKey, label }: ChecklistItemProps) {
  const style = { '--p-field': `var(--p-${timelineKey})` } as CSSProperties

  return (
    <div className={styles.item} style={style}>
      <span className={styles.box} aria-hidden="true">
        <span className={styles.fill} />
        <svg className={styles.tick} viewBox="0 0 16 16" fill="none">
          <path d="M3.5 8.5l3 3 6-7" />
        </svg>
      </span>
      <span className={styles.text}>{label}</span>
    </div>
  )
}
