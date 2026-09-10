import { useEffect, useRef } from 'react'
import styles from './SignatureAnimation.module.css'

const SIGNATURE_PATH =
  'M6 34C10 18 14 10 18 10C22 10 21 30 25 30C28 30 30 16 34 16C37 16 37 26 41 26C44 26 46 20 50 20' +
  'C53 20 54 28 58 28C61 28 63 22 67 18C70 15 73 14 76 20C78 24 80 30 84 30C88 30 90 22 94 22'

export default function SignatureAnimation() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const length = path.getTotalLength()
    path.style.setProperty('--sig-length', String(length))
  }, [])

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>חתימת לקוח</span>
      <div className={styles.pad}>
        <svg className={styles.svg} viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
          <path ref={pathRef} className={styles.path} d={SIGNATURE_PATH} />
        </svg>
        <span className={styles.baseline} />
        <span className={styles.confirm} aria-hidden="true">✓</span>
      </div>
    </div>
  )
}
