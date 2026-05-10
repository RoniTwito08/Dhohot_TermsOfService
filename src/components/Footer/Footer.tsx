import { Link } from 'react-router-dom'
import logoUrl from '../../assets/Logo/Dohot_logo.png'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="דוחות - עמוד הבית">
            <img src={logoUrl} alt="Dohot logo" className={styles.logoImg} />
            <span className={styles.logoText}>דוחות</span>
          </Link>
          <p className={styles.tagline}>
            אפליקציה לניהול דוחות מקצועיים לבעלי מקצוע בישראל
          </p>
        </div>

        <nav className={styles.links} aria-label="קישורים משפטיים">
          <Link to="/privacy" className={styles.link}>מדיניות פרטיות</Link>
          <span className={styles.dot} aria-hidden="true">·</span>
          <Link to="/terms" className={styles.link}>תנאי שימוש</Link>
          <span className={styles.dot} aria-hidden="true">·</span>
          <Link to="/contact" className={styles.link}>צור קשר</Link>
        </nav>

        <p className={styles.copy}>
          © {year} Dohot. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
