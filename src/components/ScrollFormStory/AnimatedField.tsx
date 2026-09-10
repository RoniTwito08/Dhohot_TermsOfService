import type { CSSProperties } from 'react'
import type { TimelineKey } from './timeline'
import styles from './AnimatedField.module.css'

interface AnimatedFieldProps {
  timelineKey: TimelineKey
  label: string
  value: string
  multiline?: boolean
}

/**
 * One labeled row of the form that "types itself in" as the story scrolls.
 * All motion is pure CSS driven by `--p-field`, a local alias for this
 * field's own `--p-<timelineKey>` variable set by useScrollTimeline — no
 * per-field JS or React state involved.
 */
export default function AnimatedField({ timelineKey, label, value, multiline }: AnimatedFieldProps) {
  const style = { '--p-field': `var(--p-${timelineKey})` } as CSSProperties

  return (
    <div className={styles.row} style={style}>
      <span className={styles.label}>{label}</span>
      <div className={styles.valueWrap}>
        <span className={`${styles.value} ${multiline ? styles.multiline : ''}`}>{value}</span>
        <span className={styles.check} aria-hidden="true">✓</span>
      </div>
    </div>
  )
}
