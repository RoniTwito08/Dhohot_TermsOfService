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

/*
 * These windows are fractions of a 0 → 1 story timeline. What that 0 → 1
 * actually maps to differs per instance: MobilePhoneStory's phone is
 * bounded to its own short section, so its raw scroll progress already
 * lands neatly on 0 → 1. The desktop sidebar's phone instead shares one
 * `--progress` with the *entire* page (see ScrollFormStory.tsx) — since
 * the reading blocks (StoryStages.tsx) only occupy part of that page,
 * useScrollTimeline's `scale` option compresses this same canonical 0 → 1
 * timeline into the first stretch of the page for that instance, so the
 * report finishes and the WhatsApp send completes before the
 * dark/features/closing sections begin, and the phone then just sits in
 * its finished "sent" state as a quiet companion for the rest of the page.
 */
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
  kpi: string
  body: string
}

/**
 * The editorial narrative running beside (desktop, StoryStages.tsx) or
 * below (mobile, MobilePhoneStory.tsx) the phone — each block paired with
 * the matching stretch of the timeline above so the copy always matches
 * what the phone is doing at that moment.
 */
export const STORY_BLOCKS: readonly StoryBlock[] = [
  {
    key: 'customer',
    start: 0,
    end: 0.3,
    kicker: 'דוחות מקצועיים תוך דקות',
    heading: 'כל פרטי הלקוח במקום אחד',
    kpi: 'פחות אדמיניסטרציה. יותר עבודה.',
    body: 'מלאו שם, טלפון וכתובת ישירות מהטלפון — Dohot שומרת הכל בפורמט אחיד לפעם הבאה.',
  },
  {
    key: 'work',
    start: 0.28,
    end: 0.54,
    kicker: 'תיעוד עבודה',
    heading: 'פרטי העבודה בשפה ברורה',
    kpi: 'ניסוח אחיד. בכל דוח.',
    body: 'בחרו סוג עבודה והוסיפו תיאור — הפורמט המקצועי נשמר קבוע בכל דוח שיוצא.',
  },
  {
    key: 'checklist',
    start: 0.5,
    end: 0.73,
    kicker: 'בקרת איכות',
    heading: 'רשימת בדיקה מובנית',
    kpi: 'אפס דוחות חסרים.',
    body: 'תיוג, תמונות ואישורים — כל דוח יוצא באותה רמת מקצועיות, בכל פעם מחדש.',
  },
  {
    key: 'signature',
    start: 0.7,
    end: 0.87,
    kicker: 'אישור לקוח',
    heading: 'חתימה דיגיטלית במקום',
    kpi: 'אישור מיידי, בלי נייר.',
    body: 'הלקוח חותם ישירות על המסך — החתימה נשמרת בתוך הדוח כאישור רשמי לעבודה.',
  },
  {
    key: 'send',
    start: 0.85,
    end: 1,
    kicker: 'PDF מוכן אוטומטית',
    heading: 'שליחה מיידית ל-WhatsApp',
    kpi: 'מדוח לשיחה עם הלקוח — תוך שניות.',
    body: 'ברגע שהדוח מוכן, שולחים אותו ללקוח תוך שניות — בלי הדפסה ובלי סריקה.',
  },
] as const
