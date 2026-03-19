# Predicare Expozitivă — CST România

Site-ul oficial al atelierelor de predicare expozitivă CST România.

## 🔗 Live

- **Preview**: [lovable.app](https://id-preview--ae26f2f6-3485-4159-a4f3-fb527d5503bd.lovable.app)

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build & dev server
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — component library (Radix primitives)
- **Framer Motion** — animations
- **React Router** — client-side routing
- **Formspree** — contact form backend

## 📁 Project Structure

```
src/
├── components/       # Shared UI components (Header, Footer, Layout, HeroBanner…)
│   └── ui/           # shadcn/ui primitives
├── pages/            # Route pages (Index, Evenimente, Contact, Despre…)
│   └── events/       # Event micro-site (Hub, Orar, Participanți, Grupe)
├── hooks/            # Custom React hooks
├── assets/           # Static images
└── lib/              # Utility functions

public/
└── data/
    ├── evenimente.json              # Global event registry & metadata
    └── events/{EVENT_ID}/           # Per-event data
        ├── participants.json
        └── orar.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## ➕ Adding a New Event

1. Add an entry in `public/data/evenimente.json` with a unique `eventId`, metadata, and Tally form URLs.
2. Create a folder `public/data/events/{eventId}/` with:
   - `participants.json` — participant list
   - `orar.json` — schedule data
3. The event micro-site is automatically available at `/events/{eventId}`.

## 📬 Contact Form

The contact form uses [Formspree](https://formspree.io). Form submissions are delivered to the connected Formspree inbox. The form ID is configured directly in `src/pages/Contact.tsx`.

## 📄 License

Private — All rights reserved.
