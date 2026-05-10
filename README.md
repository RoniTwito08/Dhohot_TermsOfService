# Dohot — Legal & Landing Website

A clean, professional landing and legal website for the **Dohot** mobile app, built for App Store / Google Play approval.

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules
- React Router v6
- Hebrew RTL layout (Heebo font)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page — hero, features, legal links |
| `/privacy` | Privacy Policy (Hebrew) |
| `/terms` | Terms of Service (Hebrew) |
| `/contact` | Contact page with UI form |

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- The `public/_redirects` file handles SPA routing automatically.

### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` handles SPA routing automatically.

## Project Structure

```
src/
├── components/
│   ├── Header/         # Sticky header with mobile menu
│   ├── Footer/         # Footer with legal links
│   ├── Layout/         # Page wrapper (Header + Footer)
│   └── LegalPage/      # Shared wrapper for legal pages
├── pages/
│   ├── Home/           # Landing page
│   ├── Privacy/        # Privacy policy
│   ├── Terms/          # Terms of service
│   └── Contact/        # Contact form
└── styles/
    └── global.css      # CSS custom properties, reset, utilities
```

## Design

- **Background:** Warm off-white `#F9F7F3`
- **Primary:** Deep green `#2A5C45`
- **Accent:** Warm orange `#E8733A`
- **Font:** Heebo (Google Fonts) — optimized for Hebrew
- RTL layout throughout

## Legal Notice

The legal texts (Privacy Policy and Terms of Service) are written in Hebrew and are provided as a starting template. **They must be reviewed by a qualified Israeli lawyer before production use.**
