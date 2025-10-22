# StayNomadic — Marketing Site Context

You are an expert full-stack developer. Build a production-ready, minimal, sleek landing site for “StayNomadic” (a concierge for busy digital nomads). Use Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Lucide icons. Target deployment on Vercel.

## Goals
- Single marketing site with a clean hero and clear CTA.
- Brand: neutral tones + a pop of teal/green; modern sans-serif; subtle map/compass iconography.
- Fast, accessible, responsive, and easy to extend.

## Tech & Setup
- Create a fresh Next.js app (App Router, TS).
- Add Tailwind CSS and configure with the brand palette.
- Add shadcn/ui for a few primitives (Button, Card, Input).
- Add Lucide-react for icons.
- Optional (nice-to-have): framer-motion for tasteful fade/slide animations.
- No server DB—email capture can be a simple client action (for now, just console.log and UI success state).

## Brand System
- Fonts: Inter (fallback system sans).
- Colors:
  - --background: #0F1115 (near-black for dark sections), #FFFFFF for light.
  - --foreground: #0B1B24 (for light mode text) OR #E6F2F0 (for dark overlay text).
  - Primary teal gradient: from #00C6A7 to #009F9D.
  - Neutrals: slate/stone grays from Tailwind; use subtle contrast.
- Radius: rounded-2xl on cards/buttons.
- Shadows: soft, subtle (no harsh drop shadows).
- Motif: thin line/divider with small compass/pin accent.

## Pages
- `/` (home) only, with clean sections:
  1) Navbar: Logo left, nav links (“How it works”, “Why us”, “Cities”, “FAQ”), CTA right (“Start Planning”).
  2) Hero: Full-bleed image with light gradient overlay; headline “Plan Less. Live More.” subtext “Your personalized nomad stay planner.” Primary CTA “Start Planning”, Secondary “See How It Works”.
  3) Value Props (3–4 cards): e.g., Housing, Coworking, Activities, Community. Each with Lucide icon + 1–2 lines.
  4) How It Works (3 steps): Plan → Match → Enjoy. Horizontal on desktop, stacked on mobile.
  5) Featured Cities (grid): 6 city cards with image, short blurb, “Explore city” link (placeholder).
  6) Testimonials (slider or simple cards): 2–3 short quotes.
  7) CTA Band: gradient border or subtle glassmorphism; email input + button.
  8) FAQ: 6 items (accordion).
  9) Footer: Logo, small nav, social icons (placeholders).

## Components (under `components/`)
- `Logo.tsx`: Minimal text logo + tiny compass-pin SVG.
- `Navbar.tsx`: sticky top, semi-transparent blur on scroll.
- `Container.tsx`: max-w wrapper.
- `Hero.tsx`: background image via CSS with overlay; buttons from shadcn/ui.
- `ValueCards.tsx`: shadcn `Card` grid with Lucide icons (Briefcase, MapPin, Laptop, Users).
- `HowItWorks.tsx`: step items with small numbered badges.
- `CityGrid.tsx`: simple card grid; images from `public/cities/*`.
- `Testimonials.tsx`: simple cards; (optional) auto-fade with framer-motion.
- `CtaBand.tsx`: email capture input + button (client-side only, show success state).
- `Faq.tsx`: shadcn accordion.
- `Footer.tsx`.

## Content (copy)
- Hero H1: “Plan Less. Live More.”
- Hero sub: “StayNomadic is your personal concierge for 30–90 day stays—housing, coworking, and experiences tailored to your vibe.”
- Value props:
  - “Curated Housing” – “Quiet, walkable, dog-friendly, remote-work ready.”
  - “Work-Ready Flow” – “Coworking and wifi you can rely on.”
  - “Local Experiences” – “Hikes, dance nights, and weekend escapes.”
  - “Trusted Partners” – “We vet options so you don’t have to.”
- Steps:
  - “Tell us your vibe” → “Answer a quick intake.”
  - “We curate options” → “Aligned to goals, budget, and pets.”
  - “Arrive and enjoy” → “Your welcome kit is ready.”
- Testimonials (sample):
  - “The simplest month I’ve ever planned as a nomad.” — Jamie R.
  - “Housing + coworking + hikes in one plan. Perfect.” — Priya S.
- FAQ (sample):
  - “Do you handle visas/insurance?” → “We provide guidance and vetted resources.”
  - “Can you plan for pets?” → “Yes—dog parks, pet-friendly rentals, sitters.”
  - “What cities do you cover?” → “We rotate a curated list monthly.”
  - “What’s the pricing?” → “Simple concierge fee per stay; custom quotes for teams.”

## File Structure (expected)
- `app/`
  - `layout.tsx` (global font, metadata, theme classes)
  - `globals.css` (Tailwind base + custom utilities)
  - `page.tsx` (home composition)
- `components/` (as listed)
- `lib/` (helpers if needed)
- `public/`
  - `hero.jpg` (placeholder), `cities/{vancouver.jpg, lisbon.jpg, mexico-city.jpg, bali.jpg, chiang-mai.jpg, barcelona.jpg}`
- `styles/` (optional tokens)
- Tailwind + shadcn config files

## Behavior & UX
- Smooth section scroll for navbar links.
- Hover states: slight lift + shadow on cards; subtle scale on primary CTA.
- Motion: fade-up on section enter (framer-motion); keep it subtle and performant.
- Light/dark balance: hero can be light; a dark CTA band is okay if contrast is excellent.
- Accessibility: semantic HTML, alt text on images, focus states, sufficient contrast.

## SEO & Meta
- `app/layout.tsx` with `metadata` (title, description, open graph image).
- Add `robots.txt` and `sitemap.xml` (static).
- Social OG image placeholder in `/public/og.png`.

## Commands Cline should run
1) Init project:
   - `npx create-next-app@latest staynomadic --ts --app --eslint --src-dir=false --tailwind --no-experimental-app --import-alias "'*"`' (see below for file content)`
   - `cd staynomadic`
2) Install deps:
   - `pnpm add lucide-react framer-motion class-variance-authority tailwind-merge`
   - `pnpm add -D @types/node @types/react`
3) Set up shadcn/ui:
   - `pnpm dlx shadcn-ui@latest init -y`
   - Add `button`, `card`, `input`, `accordion` components.
4) Implement files & components per spec above, including Tailwind config with brand colors and rounded-2xl tokens.
5) Add images: create simple placeholders in `/public` (solid gradients with text if stock images unavailable).
6) Verify:
   - `pnpm dev` (no type errors, compiles)
   - Lighthouse pass: Performance ≥ 90, Accessibility ≥ 95.
   - Keyboard nav works; images have alt; meta tags present.
7) Prepare deploy:
   - Add `vercel.json` (optional; edge runtime not required).
   - Ensure `pnpm build` succeeds.
   - Include README with run/deploy instructions.

## Acceptance Criteria (must pass)
- ✅ Home loads with sections: Navbar, Hero, Value props, How It Works, Cities, Testimonials, CTA, FAQ, Footer.
- ✅ Tailwind brand palette (teal gradient #00C6A7 → #009F9D) and rounded-2xl cards/buttons.
- ✅ Responsive: looks great on mobile (≤375px), tablet, desktop.
- ✅ Buttons/links have focus states; color contrast AA+.
- ✅ No console errors; build passes `pnpm build`.
- ✅ Basic SEO metadata + `sitemap.xml` + `robots.txt`.
- ✅ “Start Planning” CTA scrolls to CTA band; email submit triggers a success state.
