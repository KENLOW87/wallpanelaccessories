<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Workflow rules (both machines)

1. **Always work in `C:\code\wallpanelaccessories`** on either machine — laptop and desktop. Don't edit a copy elsewhere.
2. **Pull before you start, push when you finish.** Run `git pull` at the start of a session and `git push` after committing — that's what keeps the two machines matched.

# Project context

This is the durable, machine-independent record of what this project is and where it stands. It lives here (not in Claude's per-machine memory) so it travels with the code and reads the same on laptop and desktop. Keep it short; update it when direction shifts.

## What it is
Marketing site for **Wall Panel Accessories Malaysia** — Ken's one-stop online supplier of accessories that complete a wall panel install: aluminum profiles, end caps, panel adhesives, mounting hardware, LED strips, cleaning supplies, cutting tools, decorative accents.

Sister to Ken's 7 newpages.com.my regional wall-panel sites (geometra.com.my, wallpaneljohor, wallpanelpenang, wallguru.my, wallpanelkuantan, wallpanelselangor, wallpanelkedah) but unlike those, this site is **custom-coded on Next.js**, not on the newpages CMS. Brand chosen as the descriptive site name itself (no Nova Arte / WallGuru parent branding shown) for category-leader SEO.

## Stack
- Next 16.2.7 (App Router, Turbopack), React 19.2.4, TypeScript 5
- Tailwind 4 (CSS-based theme config in `app/globals.css` via `@theme inline`)
- Fonts: Geist (body) + Playfair Display (display headings)
- No database, no auth, no Supabase — pure marketing site
- Hosting: Vercel Pro (`kenlow-87-s-projects/wallpanelaccessories`, auto-deploy on push to GitHub master)

## Brand and design
- Palette: cream `#faf8f4` background, brown `#6b4226` primary, amber `#d97706` accent, dark `#1a1410` for hero/footer/stats
- Typography: Playfair Display for hero/section headings, Geist Sans for body
- Floating WhatsApp button on every page (currently `+60 16-225 8458`, Ken's shared sales line)
- Mobile-first; hamburger nav under md breakpoint

## File layout
- `app/page.tsx` — homepage (hero, value props, 8-category grid, stats, contact CTA)
- `app/about/`, `app/products/`, `app/gallery/`, `app/contact/` — inner pages
- `app/components/` — Nav, Footer, WhatsAppButton, CategoryCard, icons
- `app/data/categories.tsx` — single source of truth for the 8 product categories (used by both homepage grid and `/products`)

## Domains
- Production (working now): https://wallpanelaccessories.vercel.app
- Custom (pending DNS): https://wallpanelaccessories.com — domain at Namecheap, registered 2026-02-06 for 3 years, registrant Nova Arte Sdn Bhd. Vercel-side configured; needs A record `@ → 76.76.21.21` + CNAME `www → cname.vercel-dns.com` at Namecheap to go live.

## Where we left off (update this as work progresses)
- DONE: Site scaffolded, 5 pages built, deployed to Vercel, GitHub auto-deploy wired.
- OPEN: Replace placeholder content — real product photos (`public/products/`), gallery photos (`public/gallery/`), real stat numbers (currently 8+/5000+/500+/100+ are made up), correct WhatsApp number, bilingual EN/中文 copy if matching the regional sites.
- OPEN: User to add Namecheap DNS records to activate `wallpanelaccessories.com`.
- OPEN / candidate next: add `/news` page if Ken wants to publish posts; add small admin/CMS later if content updates get frequent (Supabase or a headless CMS).
