# Loitana Wild — Website

Luxury safari lodge website for Loitana Wild, a private 4,000-hectare conservancy in Northern Kenya. Built with Vite + React + TypeScript + Tailwind CSS v3. Publishing target: Verso.

## Stack

- **Framework:** React 19 + TypeScript via Vite
- **Styling:** Tailwind CSS v3 with custom design tokens (see `tailwind.config.js`)
- **Routing:** React Router DOM v7 (browser router, client-side)
- **Icons:** Google Material Symbols Outlined (loaded via `<link>` in `index.html`)
- **Fonts:** Newsreader (serif, headlines & body), Manrope (sans-serif, labels/UI)

## Commands

```bash
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Hero, sanctuary intro, video episodes, bento experience grid, pricing, CTA |
| `/the-residence` | `src/pages/TheResidence.tsx` | House editorial split hero, gallery bento, privacy section, included amenities |
| `/tailor-your-stay` | `src/pages/TailorYourStay.tsx` | Bespoke catalog masonry grid (expandable cards), philosophy section |
| `/inquiry` | `src/pages/Inquiry.tsx` | Testimonials slider, inquiry form, info sidebar |

## Shared Components

- `src/components/Nav.tsx` — Sticky glassmorphism nav with active route highlighting
- `src/components/Footer.tsx` — Standard footer with links

## Design System

Design language is documented in `../stitch_website_strategy_content_outline_loitana_wild (1)/stitch_website_strategy_content_outline_loitana_wild/savannah_editorial/DESIGN.md`

**Key principles:**
- Creative north star: "The Safari Curator" — high-end linen coffee-table book aesthetic
- **No 1px solid borders** for sectioning — use background color shifts only
- Depth via tonal layering (surface → surface-container-low → surface-container-lowest)
- No pure black text — use `on-surface` (#1A1C18)
- No large corner radii — `DEFAULT` is 0.25rem
- Glassmorphism nav: `backdrop-blur-xl` + `bg-background/80`
- Asymmetric editorial layouts where possible

**Color palette roles:**
- `primary` (#4A5D45) — dusty sage green, CTAs and key actions
- `on-surface` (#1A1C18) — main text (not pure black)
- `background` (#FCF9F5) — warm parchment base
- `surface-container-low` (#F7F4F0) — in-page content blocks
- `surface-container-lowest` (#FFFFFF) — interactive cards (subtle lift)
- `tertiary` (#7A5733) — clay warmth, secondary interactions

## Images

Currently using placeholder AI-generated images from Google/AIDA CDN. These will need to be replaced with real photography before launch. All image URLs are inline in each page component — search for `lh3.googleusercontent.com` to find them.

## Deployment (Verso)

Build produces a standard static site in `dist/`. Verso should be configured to:
1. Run `npm run build`
2. Serve `dist/` as static files
3. Redirect all paths to `index.html` (SPA routing)

## Editing Guidelines

- Keep the "no borders" rule — use background shifts and spacing to separate sections
- All new pages should use the same `font-headline` / `font-label` / `font-body` class names
- Interactive cards use `group` + `group-hover:` Tailwind variants for expand effects
- The `card-expand-content` utility class in `index.css` handles the hover-expand animation on catalog cards
