import { useRef } from 'react'
import { DOC_NAME, WHATSAPP_MESSAGE } from './timeline'
import { useCollapseProgress } from './useCollapseProgress'
import { useFlyGeometry } from './useFlyGeometry'
import WhatsAppIcon from './WhatsAppIcon'
import styles from './MobileWhatsAppCollapse.module.css'

/**
 * The mobile climax: no phone, no sticky pin — the finished document card
 * simply lives in the page like everything else, and collapses into the
 * real WhatsApp icon as it scrolls past (useCollapseProgress tracks its
 * own transit through the viewport; useFlyGeometry measures the icon's
 * actual on-screen position so the fold lands exactly on it, the same
 * mechanism the desktop version uses). The page never stops moving.
 */
export default function MobileWhatsAppCollapse() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const slotRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useCollapseProgress(wrapRef)
  useFlyGeometry(wrapRef, slotRef, targetRef)

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={styles.slot} ref={slotRef}>
        <div className={styles.doc}>
          <span className={styles.docTag}>PDF</span>
          <span className={styles.docTitle}>הדו״ח מוכן</span>
          <span className={styles.docLine} />
          <span className={styles.docLine} />
          <span className={styles.docLineShort} />
        </div>
      </div>

      <div className={styles.targetRow}>
        <div className={styles.target} ref={targetRef}>
          <span className={styles.targetRippleGate} aria-hidden="true">
            <span className={styles.targetRipple} />
          </span>
          <span className={styles.targetIcon}>
            <WhatsAppIcon className={styles.targetGlyph} />
          </span>
        </div>
        <span className={styles.targetLabel}>WhatsApp</span>
      </div>

      <div className={styles.bubble}>
        <p className={styles.bubbleText}>{WHATSAPP_MESSAGE}</p>
        <div className={styles.bubbleDoc}>
          <span aria-hidden="true">📄</span>
          <span className={styles.bubbleDocName}>{DOC_NAME}</span>
          <span className={styles.bubbleDocTag}>PDF</span>
        </div>
      </div>
    </div>
  )
}
