import { Link } from 'react-router-dom'
import logoUrl from '../../assets/Logo/Dohot_logo.png'
import styles from './Home.module.css'

const features = [
  {
    icon: '📋',
    title: 'דוחות מקצועיים',
    desc: 'צור דוחות מפורטים ומקצועיים בכמה שניות — ממולאים, מעוצבים ומוכנים לשליחה.',
  },
  {
    icon: '💰',
    title: 'הצעות מחיר',
    desc: 'שלח הצעות מחיר מעוצבות ומרשימות ללקוחות בקלות ובמהירות.',
  },
  {
    icon: '🛡️',
    title: 'תעודות אחריות',
    desc: 'הפק תעודות אחריות ללקוחות בלחיצת כפתור, עם פרטי העבודה והציוד.',
  },
  {
    icon: '📸',
    title: 'תיעוד עבודה',
    desc: 'צלם, תעד וסדר תמונות ישירות בתוך הדוח — הכל במקום אחד.',
  },
  {
    icon: '📄',
    title: 'ייצוא PDF',
    desc: 'ייצא כל מסמך ל-PDF מוכן להדפסה ושיתוף, עם לוגו העסק שלך.',
  },
  {
    icon: '💬',
    title: 'שיתוף מהיר',
    desc: 'שתף דוחות והצעות מחיר ישירות ל-WhatsApp או אימייל תוך שניות.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>

      {/* =================== HERO =================== */}
      <section className={styles.hero}>
        {/* Decorative background shapes echoing the logo */}
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.bgShapeGreen} />
          <div className={styles.bgShapeOrange} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          {/* Text column */}
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              לבעלי מקצוע בישראל
            </div>

            <h1 className={styles.heroTitle}>
              דוחות, הצעות מחיר
              <br />
              <span className={styles.heroAccent}>ותיעוד עבודה</span>
              <br />
              בכמה שניות
            </h1>

            <p className={styles.heroSub}>
              אפליקציה לניהול דוחות והצעות מחיר לבעלי מקצוע — אינסטלטורים, חשמלאים,
              מזגנאים, טכנאים ועוד. כל המסמכים שלך במקום אחד, מוכנים לשיתוף ב-WhatsApp.
            </p>

            <div className={styles.heroCta}>
              <a href="#features" className={styles.ctaPrimary}>
                גלה עוד
              </a>
              <Link to="/contact" className={styles.ctaSecondary}>
                צור קשר
              </Link>
            </div>
          </div>

          {/* Logo / app icon display column */}
          <div className={styles.heroVisual}>
            <div className={styles.appIconWrap}>
              <img
                src={logoUrl}
                alt="Dohot אפליקציה"
                className={styles.appIcon}
              />
              {/* Floating accent chips echoing the logo's orange check */}
              <div className={`${styles.floatChip} ${styles.chipTop}`}>
                <span>✓</span> דוח הושלם
              </div>
              <div className={`${styles.floatChip} ${styles.chipBottom}`}>
                <span>📤</span> נשלח ב-WhatsApp
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FEATURES =================== */}
      <section id="features" className={styles.features}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>הכל במקום אחד</h2>
            <p className={styles.sectionSub}>
              כל הכלים שבעל מקצוע צריך כדי לנהל את התיעוד שלו — פשוט, מהיר ומקצועי.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <article key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================== HOW IT WORKS =================== */}
      <section className={styles.how}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>איך זה עובד?</h2>
            <p className={styles.sectionSub}>שלושה צעדים פשוטים מהמשימה ועד המסמך הסופי</p>
          </div>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepContent}>
                <h3>מלא את פרטי העבודה</h3>
                <p>הוסף תיאור, פרטי לקוח, תמונות, חלקים שהוחלפו ועלויות — בצורה נוחה ומהירה.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepContent}>
                <h3>ערוך ושפר בעזרת AI</h3>
                <p>המערכת מציעה ניסוח מקצועי לתיאורים שלך — אתה תמיד בשליטה על התוכן הסופי.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepContent}>
                <h3>שתף בלחיצת כפתור</h3>
                <p>ייצא ל-PDF ושתף ישירות ב-WhatsApp, אימייל, או כל דרך אחרת שנוחה לך.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* =================== LEGAL LINKS =================== */}
      <section className={styles.legal}>
        <div className="container">
          <div className={styles.legalCard}>
            <div className={styles.legalBrand}>
              <img src={logoUrl} alt="" aria-hidden="true" className={styles.legalLogo} />
              <div className={styles.legalText}>
                <h2>מידע משפטי ופרטיות</h2>
                <p>
                  אנו מחויבים לשקיפות ולהגנה על פרטיות המשתמשים שלנו.
                  קרא את המסמכים המשפטיים שלנו לפני השימוש באפליקציה.
                </p>
              </div>
            </div>
            <div className={styles.legalLinks}>
              <Link to="/privacy" className={styles.legalLink}>
                <span className={styles.legalLinkIcon}>🔒</span>
                <div>
                  <strong>מדיניות פרטיות</strong>
                  <span>כיצד אנו מטפלים במידע שלך</span>
                </div>
              </Link>
              <Link to="/terms" className={styles.legalLink}>
                <span className={styles.legalLinkIcon}>📜</span>
                <div>
                  <strong>תנאי שימוש</strong>
                  <span>כללים ואחריות השימוש באפליקציה</span>
                </div>
              </Link>
              <Link to="/contact" className={styles.legalLink}>
                <span className={styles.legalLinkIcon}>✉️</span>
                <div>
                  <strong>צור קשר</strong>
                  <span>שאלות? אנחנו כאן לעזור</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
