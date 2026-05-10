import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoUrl from '../../assets/Logo/Dohot_logo.png'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu} aria-label="דוחות - עמוד הבית">
          <img src={logoUrl} alt="Dohot logo" className={styles.logoImg} />
          <span className={styles.logoText}>דוחות</span>
        </Link>

        <nav
          id="main-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="ניווט ראשי"
        >
          <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`} onClick={closeMenu} end>
            בית
          </NavLink>
          <NavLink to="/privacy" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
            מדיניות פרטיות
          </NavLink>
          <NavLink to="/terms" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
            תנאי שימוש
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
            צור קשר
          </NavLink>
        </nav>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />
        )}
      </div>
    </header>
  )
}
