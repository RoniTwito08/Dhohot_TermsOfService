import type { ReactNode } from 'react'
import styles from './PhoneFrame.module.css'

interface PhoneFrameProps {
  children: ReactNode
}

/**
 * The device chrome: a fixed-size glass screen (clipped to its rounded
 * corners) with a Dynamic-Island-style camera cutout and a home indicator.
 * `children` renders inside the screen's safe area — see PhoneScreen for
 * what actually goes there and how it scrolls.
 */
export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className={styles.frame}>
      <span className={styles.buttonPower} aria-hidden="true" />
      <span className={styles.buttonVolUp} aria-hidden="true" />
      <span className={styles.buttonVolDown} aria-hidden="true" />

      <div className={styles.screen}>
        <span className={styles.island} aria-hidden="true">
          <span className={styles.camera} />
        </span>
        <div className={styles.safeArea}>{children}</div>
        <span className={styles.homeIndicator} aria-hidden="true" />
      </div>
    </div>
  )
}
