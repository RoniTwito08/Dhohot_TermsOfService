import { Link } from 'react-router-dom'
import logoUrl from '../../assets/Logo/Dohot_logo.png'
import Reveal from '../../components/Reveal/Reveal'
import MobilePhoneStory from '../../components/ScrollFormStory/MobilePhoneStory'
import ScrollFormStory from '../../components/ScrollFormStory/ScrollFormStory'
import StoryStages from '../../components/ScrollFormStory/StoryStages'
import WhatsAppIcon from '../../components/ScrollFormStory/WhatsAppIcon'
import styles from './Home.module.css'

const professions = [
  { icon: '🔧', label: 'אינסטלטורים' },
  { icon: '🔌', label: 'חשמלאים' },
  { icon: '❄️', label: 'מזגנאים' },
  { icon: '🛠️', label: 'טכנאים' },
  { icon: '🚪', label: 'מנעולנים' },
  { icon: '🎨', label: 'שיפוצניקים' },
]

const supportingFeatures = [
  {
    icon: '💰',
    title: 'הצעות מחיר',
    desc: 'הצעות מחיר מעוצבות שנשלחות ללקוח תוך דקות.',
  },
  {
    icon: '🛡️',
    title: 'תעודות אחריות',
    desc: 'הפקה בלחיצת כפתור, עם פרטי העבודה והציוד.',
  },
  {
    icon: '📸',
    title: 'תיעוד עבודה',
    desc: 'תמונות מסודרות בתוך הדוח, הכל במקום אחד.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <ScrollFormStory>
        {/* =================== HERO =================== */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.bgShapeGreen} />
            <div className={styles.bgShapeOrange} />
          </div>

          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              לבעלי מקצוע בישראל
            </div>

            <h1 className={styles.heroTitle}>
              פחות ניירת.
              <br />
              <span className={styles.heroAccent}>יותר עבודה.</span>
            </h1>

            <p className={styles.heroSub}>
              דוחות, הצעות מחיר ותיעוד עבודה — ישירות מהטלפון, תוך דקות.
              כל המסמכים שלך במקום אחד, מוכנים לשיתוף ב-WhatsApp.
            </p>

            <div className={styles.heroCta}>
              <a href="#features" className={styles.ctaPrimary}>
                גלה עוד
              </a>
              <Link to="/contact" className={styles.ctaSecondary}>
                צור קשר
              </Link>
            </div>

            <div className={styles.heroProof}>
              <span className={styles.heroProofItem}>
                <span className={styles.heroProofIcon}>✓</span>
                בלי כרטיס אשראי
              </span>
              <span className={styles.heroProofItem}>
                <span className={styles.heroProofIcon}>✓</span>
                מוכן לשימוש תוך דקות
              </span>
              <span className={styles.heroProofItem}>
                <span className={styles.heroProofIcon}>✓</span>
                בעברית, לעסק הישראלי
              </span>
            </div>

            <div className={styles.trustRow}>
              <span className={styles.trustLabel}>בשימוש יומיומי אצל</span>
              {professions.map((p) => (
                <span key={p.label} className={styles.trustChip}>
                  <span aria-hidden="true">{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =================== SCROLL STORY NARRATIVE (desktop) / COMPACT STORY (mobile) =================== */}
        <div className="container">
          <StoryStages />
        </div>
        <MobilePhoneStory />

        {/* =================== DARK PREMIUM BAND =================== */}
        <section className={styles.dark}>
          <div className={styles.darkGlow} aria-hidden="true" />
          <div className={`container ${styles.darkGrid}`}>
            <Reveal className={styles.darkInner}>
              <span className={styles.darkEyebrow}>הכל במקום אחד</span>
              <h2 className={styles.darkTitle}>
                מהעבודה בשטח לתיק הלקוח —
                <br />
                בלי לצאת מהאפליקציה.
              </h2>

              <div className={styles.darkCapabilities}>
                <div className={styles.darkCapability}>
                  <span className={styles.darkCapabilityIcon} aria-hidden="true">📁</span>
                  <div>
                    <strong>ניהול לקוחות</strong>
                    <span>היסטוריית עבודות לפי לקוח</span>
                  </div>
                </div>
                <div className={styles.darkCapability}>
                  <span className={styles.darkCapabilityIcon} aria-hidden="true">📄</span>
                  <div>
                    <strong>ייצוא PDF</strong>
                    <span>מסמך עם לוגו העסק שלך</span>
                  </div>
                </div>
                <div className={styles.darkCapability}>
                  <span className={`${styles.darkCapabilityIcon} ${styles.darkCapabilityWhatsapp}`} aria-hidden="true">
                    <WhatsAppIcon className={styles.darkWhatsappGlyph} />
                  </span>
                  <div>
                    <strong>שיתוף ב-WhatsApp</strong>
                    <span>מהדוח ישר לשיחה עם הלקוח</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className={styles.darkVisual}>
              <div className={styles.darkVisualCardBack} aria-hidden="true">
                <span className={styles.darkVisualTag}>PDF</span>
                <span className={styles.darkVisualLine} />
                <span className={styles.darkVisualLine} />
                <span className={styles.darkVisualLineShort} />
              </div>
              <div className={styles.darkVisualChat} aria-hidden="true">
                <span className={styles.darkVisualChatIcon}>
                  <WhatsAppIcon className={styles.darkVisualChatGlyph} />
                </span>
                <span className={styles.darkVisualChatText}>הדו״ח נשלח ✓</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================== SUPPORTING FEATURES =================== */}
        <section id="features" className={styles.features}>
          <div className="container">
            <div className={styles.featureLayout}>
              <Reveal className={styles.featureLead}>
                <span className={styles.featureLeadEyebrow}>וזה רק ההתחלה</span>
                <span className={styles.featureLeadIcon} aria-hidden="true">📋</span>
                <h3 className={styles.featureLeadTitle}>דוחות מקצועיים</h3>
                <p className={styles.featureLeadDesc}>
                  צרו דוח מפורט ומקצועי בכמה שניות — ממולא, מעוצב ומוכן לשליחה,
                  ישירות מהטלפון בשטח.
                </p>
                <span className={styles.featureLeadKpi}>מהמשימה למסמך, תוך דקות.</span>
              </Reveal>

              <div className={styles.featureMiniGrid}>
                {supportingFeatures.map((f, i) => (
                  <Reveal key={f.title} delay={80 + i * 70}>
                    <article className={styles.featureMiniCard}>
                      <span className={styles.featureMiniIcon} aria-hidden="true">{f.icon}</span>
                      <h4 className={styles.featureMiniTitle}>{f.title}</h4>
                      <p className={styles.featureMiniDesc}>{f.desc}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================== CLOSING CTA + LEGAL =================== */}
        <section className={styles.closing}>
          <div className="container">
            <Reveal>
              <div className={styles.closingCard}>
                <div className={styles.closingMain}>
                  <h2 className={styles.closingTitle}>
                    העסק שלך יכול לעבוד
                    <br />
                    הרבה יותר פשוט.
                  </h2>
                  <p className={styles.closingSub}>
                    פחות ניירת. פחות התעסקות. יותר זמן לעבודה עצמה.
                  </p>
                  <div className={styles.closingCta}>
                    <Link to="/contact" className={styles.closingPrimary}>
                      התחל עכשיו
                    </Link>
                    <a href="#features" className={styles.closingSecondary}>
                      ראה איך זה עובד
                    </a>
                  </div>
                </div>

                <div className={styles.closingLinks}>
                  <img src={logoUrl} alt="" aria-hidden="true" className={styles.closingLogo} />
                  <Link to="/privacy" className={styles.closingLink}>מדיניות פרטיות</Link>
                  <Link to="/terms" className={styles.closingLink}>תנאי שימוש</Link>
                  <Link to="/contact" className={styles.closingLink}>צור קשר</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </ScrollFormStory>
    </div>
  )
}
