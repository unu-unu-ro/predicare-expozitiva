# Predicare Expozitivă

Site-ul atelierelor de predicare expozitivă din România, organizate în parteneriat cu [Charles Simeon Trust](https://simeontrust.org/).

Atelierele echipează predicatori, păstori și lideri de studii biblice cu instrumente practice pentru a mânui corect Cuvântul lui Dumnezeu, folosind o metodologie sistematică în 7 pași — de la analiza structurii textuale până la formularea unei predici expozitive.

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
├── assets/           # Static images & gallery photos
│   └── gallery/      # Real workshop photos (marquee gallery on /despre)
└── lib/              # Utility functions

public/
└── data/
    ├── evenimente.json              # Global event registry & metadata
    └── events/{EVENT_ID}/           # Per-event data
        ├── participants.json
        └── orar.json
```

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero banner and overview |
| `/despre` | About the workshops — methodology, 7 steps, testimonials, photo gallery |
| `/evenimente` | List of upcoming and past events |
| `/events/{id}` | Event micro-site with schedule, participants, and small groups |
| `/ghid` | Guide for participants |
| `/fisa` | Worksheet (fișa de lucru) |
| `/resurse` | Additional resources |
| `/contact` | Contact form (Formspree) |

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

## 🖼 Gallery Photos

Workshop photos are stored in `src/assets/gallery/` and displayed as an auto-scrolling marquee on the `/despre` page. To add new photos, place them in that folder and add the corresponding import + entry in `src/pages/Despre.tsx`.

## 📬 Contact Form

The contact form uses [Formspree](https://formspree.io). Form submissions are delivered to the connected Formspree inbox. The form ID is configured directly in `src/pages/Contact.tsx`.

## 📄 License

Private — All rights reserved.
