import type { ReactNode } from 'react'
import styles from './LegalPage.module.css'

interface LegalPageProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <article className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.meta}>עודכן לאחרונה: {lastUpdated}</p>
          <div className={styles.disclaimer} role="note">
            <strong>הערה חשובה:</strong> מסמך זה אינו ייעוץ משפטי. מומלץ לבדוק ולאשר את תוכנו עם עורך דין מוסמך לפני השימוש בו בפועל.
          </div>
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </article>
  )
}
