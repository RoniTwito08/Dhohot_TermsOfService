import WhatsAppIcon from '../../components/ScrollFormStory/WhatsAppIcon'
import styles from './Contact.module.css'

const WHATSAPP_PHONE = '972549879533'
const WHATSAPP_MESSAGE = 'היי רוני 👋 הגעתי דרך האתר של Dohot ואשמח לקבל פרטים נוספים.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>

        {/* ——— PAGE HEADER ——— */}
        <header className={styles.header}>
          <h1 className={styles.title}>צור קשר</h1>
          <p className={styles.sub}>
            יש לך שאלה? נתקלת בבעיה? נשמח לשמוע ממך ולעזור בהקדם האפשרי.
          </p>
        </header>

        <div className={styles.grid}>

          {/* ——— CONTACT INFO ——— */}
          <aside className={styles.info}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>פרטי התקשרות</h2>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">✉️</span>
                  <div>
                    <span className={styles.contactLabel}>דואר אלקטרוני</span>
                    <a href="mailto:dohot17@gmail.com" className={styles.contactValue}>
                      dohot17@gmail.com
                    </a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">📞</span>
                  <div>
                    <span className={styles.contactLabel}>טלפון תמיכה</span>
                    <a href="tel:+972549879533" className={styles.contactValue}>
                      054-987-9533
                    </a>
                    <a href="tel:+972526402708" className={`${styles.contactValue} ${styles.contactValueSecondary}`}>
                      052-640-2708
                    </a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">💬</span>
                  <div>
                    <span className={styles.contactLabel}>שעות מענה</span>
                    <span className={styles.contactValue}>ראשון–חמישי, 9:00–18:00</span>
                  </div>
                </li>
              </ul>

              <div className={styles.infoNote}>
                <strong>שים לב:</strong> זמן המענה הממוצע הוא עד יום עסקים אחד.
              </div>
            </div>
          </aside>

          {/* ——— WHATSAPP CTA ——— */}
          <section className={styles.whatsappSection} aria-label="יצירת קשר ב-WhatsApp">
            <div className={styles.whatsappCard}>
              <div className={styles.whatsappMain}>
                <span className={styles.whatsappBadge}>
                  <WhatsAppIcon className={styles.whatsappBadgeGlyph} />
                </span>
                <h2 className={styles.whatsappTitle}>רוצים לראות איך Dohot יכול לעבוד בשבילכם?</h2>
                <p className={styles.whatsappSub}>דברו איתנו ישירות ב-WhatsApp ונשמח לעזור.</p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappCta}
                >
                  <WhatsAppIcon className={styles.whatsappCtaGlyph} />
                  דברו איתנו ב-WhatsApp
                </a>

                <p className={styles.whatsappNote}>נענים בדרך כלל תוך כמה שעות, בימי עבודה.</p>
              </div>

              <div className={styles.whatsappPreview} aria-hidden="true">
                <div className={styles.previewBubble}>
                  <p>היי רוני 👋</p>
                  <p>הגעתי דרך האתר של Dohot ואשמח לקבל פרטים נוספים.</p>
                </div>
                <span className={styles.previewMeta}>נשלח ל-Dohot · עכשיו</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
