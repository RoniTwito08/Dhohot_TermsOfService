import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

type FormState = 'idle' | 'submitted'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormState('submitted')
  }

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

          {/* ——— FORM ——— */}
          <section className={styles.formSection} aria-label="טופס יצירת קשר">
            {formState === 'submitted' ? (
              <div className={styles.success} role="status">
                <span className={styles.successIcon} aria-hidden="true">✅</span>
                <h2>הודעתך נשלחה בהצלחה!</h2>
                <p>נחזור אליך בהקדם האפשרי. תודה על פנייתך.</p>
                <button
                  className={styles.resetBtn}
                  onClick={() => { setFormState('idle'); setValues({ name: '', email: '', phone: '', message: '' }) }}
                >
                  שלח פנייה נוספת
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>שם מלא <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="ישראל ישראלי"
                      value={values.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>טלפון</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="050-000-0000"
                      value={values.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>דואר אלקטרוני <span aria-hidden="true">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="your@email.com"
                    value={values.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    dir="ltr"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>נושא הפנייה</label>
                  <select id="subject" name="subject" className={styles.input} defaultValue="">
                    <option value="" disabled>בחר נושא...</option>
                    <option>בעיה טכנית</option>
                    <option>שאלה על תכונה</option>
                    <option>ביטול / שינוי מינוי</option>
                    <option>שאלה על פרטיות</option>
                    <option>אחר</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>הודעה <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="ספר לנו כיצד נוכל לעזור..."
                    value={values.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  שלח הודעה
                </button>

                <p className={styles.formNote}>
                  * שדות חובה. מידע שתמסור ישמש לצורך מענה לפנייתך בלבד.
                </p>
              </form>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
