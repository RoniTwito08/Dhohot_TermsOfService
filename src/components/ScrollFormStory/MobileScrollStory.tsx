import { useEffect, useRef } from 'react'
import MobileWhatsAppCollapse from './MobileWhatsAppCollapse'
import Reveal from '../Reveal/Reveal'
import { CHECKLIST, CUSTOMER, WORK } from './timeline'
import { useInView } from './useInView'
import { useIsMobile } from './useIsMobile'
import styles from './MobileScrollStory.module.css'

const MOBILE_BREAKPOINT = 860

const SIGNATURE_PATH =
  'M6 34C10 18 14 10 18 10C22 10 21 30 25 30C28 30 30 16 34 16C37 16 37 26 41 26C44 26 46 20 50 20' +
  'C53 20 54 28 58 28C61 28 63 22 67 18C70 15 73 14 76 20C78 24 80 30 84 30C88 30 90 22 94 22'

interface FieldProps {
  label: string
  value: string
  multiline?: boolean
}

function Field({ label, value, multiline }: FieldProps) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={`${styles.fieldValue} ${multiline ? styles.fieldValueMultiline : ''}`}>
        {value}
        <span className={styles.fieldCheck} aria-hidden="true">✓</span>
      </span>
    </div>
  )
}

function MobileSignature() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    path.style.setProperty('--sig-length', String(path.getTotalLength()))
  }, [])

  return (
    <div className={styles.signaturePad} ref={ref}>
      <svg className={styles.signatureSvg} viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
        <path
          ref={pathRef}
          className={`${styles.signaturePath} ${inView ? styles.signaturePathDrawn : ''}`}
          d={SIGNATURE_PATH}
        />
      </svg>
      <span className={styles.signatureBaseline} />
      <span className={`${styles.signatureConfirm} ${inView ? styles.signatureConfirmShown : ''}`} aria-hidden="true">
        ✓
      </span>
    </div>
  )
}

/**
 * Mobile's dedicated version of the scroll story — no phone mockup, no
 * bezel, no sticky pin. The report itself is the visual: a single,
 * naturally tall "living document" that reveals field by field as the
 * page scrolls past it in ordinary document flow (Reveal, one instance
 * per field/stage), connected by a running seam/rail so it reads as one
 * continuous thread rather than a stack of separate cards. Nothing here
 * is fixed or sticky, so nothing can ever sit behind text — see
 * MobileWhatsAppCollapse.tsx for the closing WhatsApp fold, which uses
 * the same "reserve real layout space, never pin" rule.
 *
 * Renders nothing above MOBILE_BREAKPOINT — desktop's sidebar phone
 * (ScrollFormStory.tsx + StoryStages.tsx) is a completely separate
 * implementation, untouched by this component.
 */
export default function MobileScrollStory() {
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  if (!isMobile) return null

  return (
    <section className={styles.wrap} aria-label="הדגמה: יצירת דוח ושליחתו בוואטסאפ">
      <div className={styles.intro}>
        <span className={styles.eyebrow}>דוחות מקצועיים תוך דקות</span>
        <h2 className={styles.headline}>
          צרו דוח עבודה
          <br />
          <span className={styles.headlineAccent}>ישירות מהטלפון.</span>
        </h2>
        <p className={styles.introBody}>גללו למטה וצפו איך הדוח נבנה, נחתם ונשלח — הכל בתוך הדף.</p>
      </div>

      <div className={styles.thread}>
        <Reveal className={styles.stage}>
          <span className={styles.dot} aria-hidden="true" />
          <div className={styles.docHeader}>
            <span className={styles.docHeaderDot} aria-hidden="true" />
            Dohot · דוח עבודה חדש
          </div>
        </Reveal>

        <Reveal className={styles.stage} delay={40}>
          <span className={styles.dot} aria-hidden="true" />
          <div className={styles.fieldGroup}>
            <Field label="שם לקוח" value={CUSTOMER.name} />
            <Field label="טלפון" value={CUSTOMER.phone} />
            <Field label="כתובת" value={CUSTOMER.address} />
          </div>
        </Reveal>

        <Reveal className={styles.note} delay={100}>
          <p>כל פרטי הלקוח נשמרים אוטומטית — מוכנים לדוח הבא.</p>
        </Reveal>

        <Reveal className={styles.stage}>
          <span className={styles.dot} aria-hidden="true" />
          <div className={styles.fieldGroup}>
            <Field label="סוג עבודה" value={WORK.type} />
            <Field label="פרטי העבודה" value={WORK.description} multiline />
          </div>
        </Reveal>

        <Reveal className={styles.note} delay={100}>
          <p>הניסוח המקצועי נשמר אחיד בכל דוח שאתם מוציאים.</p>
        </Reveal>

        <div className={styles.stage}>
          <span className={styles.dot} aria-hidden="true" />
          <div className={styles.checklist}>
            {CHECKLIST.map((item, i) => (
              <Reveal key={item.key} delay={i * 90} className={styles.checkItem}>
                <span className={styles.checkMark} aria-hidden="true">✓</span>
                {item.label}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className={styles.signatureStage}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.stageLabel}>חתימת לקוח</span>
          <MobileSignature />
        </Reveal>

        <Reveal className={styles.completeStage}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.completeTag}>PDF</span>
          <span className={styles.completeText}>הדו״ח מוכן ✓</span>
        </Reveal>
      </div>

      <MobileWhatsAppCollapse />
    </section>
  )
}
