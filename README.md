# HORIZONS — Editorial Minimalist Slow Travel Template

A production-ready, editorial travel guide web application named **"HORIZONS"** crafted with an editorial minimalist luxury design philosophy (*Kinfolk*, *Cereal Magazine*, *Monocle*), complete data architecture for 6 global cultural destinations, and butter-smooth spring motion.

🔗 **Live Demo**: [https://Rahul-Gembali.github.io/travel-template/](https://Rahul-Gembali.github.io/travel-template/)

---

## Aesthetic Direction & Palette

- **Palette**: Warm monochrome paper foundation with subtle earthy accents:
  - **Background Primary**: `#F9F8F6` (Warm Alabaster)
  - **Surface Secondary**: `#F2F0EB` (Soft Stone)
  - **Card & Modal Surface**: `#FFFFFF` with 1px border `rgba(0, 0, 0, 0.06)`
  - **Text Primary**: `#18181B` (Deep Carbon)
  - **Text Secondary**: `#71717A` (Muted Slate)
  - **Earthy Accents**: 
    - Ochre Terracotta (`#C26D53`)
    - Roman Ochre / Gilded Brass (`#B5884B`)
    - Forest Sage (`#4A5849`)
    - Smoked Plum (`#5E434D`)
    - Raw Umber (`#382C26`)
    - Aegean Mist (`#3E525E`)
- **Typography**:
  - **Editorial Serif**: *Newsreader* & *Cormorant Garamond*
  - **Geometric Sans**: *Plus Jakarta Sans*
  - **Telemetry Monospace**: *JetBrains Mono*
- **Layout Architecture**:
  - Double-bezel nested container cards (outer soft-stone shell + inner crisp core)
  - Button-in-button nested interactive CTAs
  - 1:1 Aspect ratio tactile 2D/3D minimal architectural art centerpiece
  - Tactile paper grain overlay

---

## Complete Dataset (6 Global Havens)

Every destination includes an unabridged Slow Travel compendium entry:
1. **Kyoto, Japan**: Meditative Gardens & Ancient Alleys (*Heritage*)
2. **Oaxaca, Mexico**: Culinary Alchemy & Indigenous Craft (*Culinary*)
3. **Tbilisi, Georgia**: Bohemian Architecture & Natural Wine (*Heritage*)
4. **Lisbon, Portugal**: Coastal Light, Azulejos & Fado (*Coastal*)
5. **Cape Town, South Africa**: Ocean Meets Granite Monoliths (*Nature*)
6. **Bergen, Norway**: Fjord Gateways & Nordic Simplicity (*Nature*)

Each city entry features:
- 2-paragraph poetic slow-travel narrative
- 4 curated high-resolution photography plates (cover + 3-photo gallery)
- 3 boutique stays with price tiers, perks, and simulated reservation inquiries
- 3 underrated hidden gems with authentic insider field tips
- 3 humanized traveler reviews with star ratings, authentic praise, and honest caveats

---

## Interactive Features

- **Editorial Hero Section**: 1:1 minimalist art piece positioned above the fold on mobile, live telemetry counters (`06 Havens`, `18 Stays`, `18 Tours`), and region filter chips.
- **Filter & Real-Time Search**: Instant keyword search, continent tabs, and vibe filters with custom color dots.
- **City Bento Grid**: Double-bezel cards, hover zoom on photography, live weather and elevation telemetry.
- **Deep-Dive City Dossier (Adaptive Bottom Sheet / Drawer)**: Tabbed navigation (`Overview`, `Stays`, `Gems`, `Reviews`, `Gallery`), review submission form with `localStorage` persistence, and simulated boutique reservation modal.
- **Fullscreen Photo Lightbox**: Keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`) and photographer credits.
- **Trip Itinerary & Bookmark System**: Save cities, stays, or gems to `localStorage`, with an exportable Markdown itinerary summary.
- **Global Coordinates & World Map Explorer**: 2D Mercator world map plotting all 6 destinations with pulsing nodes, live timezone clocks, and weather telemetry.
- **Mobile Bottom Navigation Dock**: Thumb-friendly floating dock for instant access on smartphones.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Motion (`motion/react`)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages via GitHub Actions

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/Rahul-Gembali/travel-template.git
cd travel-template

# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

---

## License

MIT © [Rahul-Gembali](https://github.com/Rahul-Gembali)
