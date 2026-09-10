import { DOC_NAME, WHATSAPP_MESSAGE } from './timeline'
import styles from './WhatsAppChat.module.css'

/** The chat view the phone's screen resolves to once the document is sent. */
export default function WhatsAppChat() {
  return (
    <div className={styles.bubble}>
      <p className={styles.bubbleText}>{WHATSAPP_MESSAGE}</p>
      <div className={styles.docCard}>
        <span className={styles.docIcon} aria-hidden="true">📄</span>
        <span className={styles.docName}>{DOC_NAME}</span>
        <span className={styles.docTag}>PDF</span>
      </div>
    </div>
  )
}
