/**
 * Single source of truth for the scroll-driven form story.
 * Every animated piece reads its own [start, end] window on the same
 * 0 → 1 scroll timeline, so re-ordering or re-timing a beat only means
 * editing the numbers here — no component logic changes.
 */

export interface TimelineWindow {
  key: string
  start: number
  end: number
}

export const TIMELINE: readonly TimelineWindow[] = [
  // Drives the phone's internal scroll (see PhoneScreen.tsx): the report
  // is full height and scrolls up inside the fixed screen viewport like a
  // real app, reaching the bottom (the completion banner) right as this
  // window ends, just before the WhatsApp collapse begins.
  { key: 'reveal', start: 0.02, end: 0.88 },

  // Stage 2 — customer details
  { key: 'name', start: 0.06, end: 0.16 },
  { key: 'phone', start: 0.13, end: 0.23 },
  { key: 'address', start: 0.2, end: 0.3 },

  // Stage 3 — work details
  { key: 'workType', start: 0.3, end: 0.4 },
  { key: 'workDesc', start: 0.37, end: 0.54 },

  // Stage 4 — checklist + photo
  { key: 'check1', start: 0.54, end: 0.61 },
  { key: 'check2', start: 0.6, end: 0.67 },
  { key: 'check3', start: 0.66, end: 0.73 },
  { key: 'photo', start: 0.63, end: 0.73 },

  // Stage 5 — signature
  { key: 'signature', start: 0.72, end: 0.85 },

  // Stage 6 — completion banner ("הדו״ח מוכן ✓")
  { key: 'complete', start: 0.85, end: 0.89 },

  // Stage 7 — collapse into WhatsApp: the document detaches, shrinks with a
  // little perspective tilt and flies toward the WhatsApp badge (`fly`),
  // then compresses into it right at the end while the badge pulses
  // (`compress`), and finally the chat bubble + doc card resolve (`bubble`).
  { key: 'fly', start: 0.89, end: 0.97 },
  { key: 'compress', start: 0.94, end: 1 },
  { key: 'bubble', start: 0.96, end: 1 },
] as const

export type TimelineKey = (typeof TIMELINE)[number]['key']

export const CUSTOMER = {
  name: 'יוסי כהן',
  phone: '050-1234567',
  address: 'תל אביב',
}

export const WORK = {
  type: 'התקנת מזגן',
  description: 'התקנת מזגן 2.5 כ״ס כולל צנרת וחיבור לחשמל',
}

export const CHECKLIST = [
  { key: 'check1', label: 'העבודה בוצעה' },
  { key: 'check2', label: 'הציוד נבדק' },
  { key: 'check3', label: 'הלקוח אישר את העבודה' },
] as const

export const DOC_NAME = `דוח עבודה - ${CUSTOMER.name}.pdf`
export const WHATSAPP_MESSAGE = 'הדו״ח נשלח ללקוח ✓'

export interface StoryBlock {
  key: string
  start: number
  end: number
  kicker: string
  heading: string
  body: string
}

/**
 * Short reading captions for the compact mobile story (see
 * MobilePhoneStory.tsx) — each paired with the matching stretch of the
 * timeline above so the caption below the phone always matches what it's
 * doing.
 */
export const STORY_BLOCKS: readonly StoryBlock[] = [
  {
    key: 'customer',
    start: 0,
    end: 0.3,
    kicker: 'דוחות מקצועיים',
    heading: 'כל פרטי הלקוח במקום אחד',
    body: 'מלאו שם, טלפון וכתובת — Dohot מסדרת הכל בפורמט אחיד ומקצועי, מוכן לשליחה.',
  },
  {
    key: 'work',
    start: 0.28,
    end: 0.54,
    kicker: 'תיעוד עבודה',
    heading: 'פרטי העבודה בשפה ברורה',
    body: 'בחרו סוג עבודה והוסיפו תיאור — הניסוח נשמר אחיד בכל דוח שאתם מוציאים.',
  },
  {
    key: 'checklist',
    start: 0.5,
    end: 0.73,
    kicker: 'בקרת איכות',
    heading: 'רשימת בדיקה מובנית',
    body: 'תיוג, תמונות ואישורים — כל דוח יוצא באותה רמת מקצועיות, בכל פעם מחדש.',
  },
  {
    key: 'signature',
    start: 0.7,
    end: 0.87,
    kicker: 'אישור לקוח',
    heading: 'חתימה דיגיטלית במקום',
    body: 'הלקוח חותם ישירות על המסך — החתימה נשמרת בתוך הדוח כאישור רשמי.',
  },
  {
    key: 'send',
    start: 0.85,
    end: 1,
    kicker: 'PDF מוכן אוטומטית',
    heading: 'שליחה מיידית ל-WhatsApp',
    body: 'ברגע שהדוח מוכן, שולחים אותו ללקוח תוך שניות — בלי הדפסה ובלי סריקה.',
  },
] as const
