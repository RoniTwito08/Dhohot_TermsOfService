import AnimatedField from './AnimatedField'
import ChecklistItem from './ChecklistItem'
import SignatureAnimation from './SignatureAnimation'
import { CHECKLIST, CUSTOMER, WORK } from './timeline'
import styles from './FormPreview.module.css'

export default function FormPreview() {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandDot} aria-hidden="true" />
          <span className={styles.brandName}>Dohot</span>
        </div>
        <div className={styles.statusChip}>
          <span className={styles.statusDraft}>טיוטה</span>
          <span className={styles.statusEditing}>בעריכה…</span>
          <span className={styles.statusSent}>נשלח ✓</span>
        </div>
      </header>

      <h3 className={styles.title}>דוח עבודה חדש</h3>

      <div className={styles.section}>
        <AnimatedField timelineKey="name" label="שם לקוח" value={CUSTOMER.name} />
        <AnimatedField timelineKey="phone" label="טלפון" value={CUSTOMER.phone} />
        <AnimatedField timelineKey="address" label="כתובת" value={CUSTOMER.address} />
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <AnimatedField timelineKey="workType" label="סוג עבודה" value={WORK.type} />
        <AnimatedField timelineKey="workDesc" label="פרטי העבודה" value={WORK.description} multiline />
      </div>

      <div className={styles.divider} />

      <div className={styles.checklist}>
        {CHECKLIST.map((item) => (
          <ChecklistItem key={item.key} timelineKey={item.key} label={item.label} />
        ))}
        <div className={styles.photo} aria-hidden="true">
          <span className={styles.photoIcon}>📷</span>
          <span className={styles.photoCheck}>✓</span>
        </div>
      </div>

      <SignatureAnimation />

      <div className={styles.completeBanner}>
        <span className={styles.completeIcon} aria-hidden="true">✓</span>
        הדו״ח מוכן
      </div>
    </div>
  )
}
