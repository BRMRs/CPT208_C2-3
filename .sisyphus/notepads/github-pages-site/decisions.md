# Decisions — github-pages-site

## [2026-03-16] Architecture Decisions
- Tech stack: Plain HTML + CSS only. Zero JavaScript, zero frameworks, zero build tools.
- Single page (index.html) with semantic <section> elements + anchor nav
- Site must be extensible for future weeks (Week 4-10 portfolio sections)
- Persona images: text-only with emoji/icon placeholders (no AI image generation)
- Deploy from root / (not /docs) — simpler, photos already at root
- Character encoding: UTF-8 required for emoji support (⚖️, 🦁 in member intros)
