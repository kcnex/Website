# KCNEX Innovations — website

The corporate site for KCNEX Innovations, the umbrella company behind
[KinSentry](https://kinsentry.com). Its job is credibility: giving users, Chrome
Web Store reviewers, and prospective partners a real company to look at.

Static [Astro](https://astro.build) site. No JavaScript ships to the browser.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built output
```

## Layout

```
src/
  data/company.ts     Company facts — single source of truth
  data/products.ts    The product roster (home grid + footer read from this)
  styles/tokens.css   Design tokens (light + dark) + primitives
  layouts/Base.astro  <head>, fonts, Organization JSON-LD, nav + footer
  components/         Logo, Nav, Footer, ProductCard
  pages/              index, about, security, contact, privacy, terms, 404
```

Design rationale, the palette with measured contrast ratios, and the reasons the
source theme was adapted rather than copied live in [BRAND.md](BRAND.md). Read it
before changing a colour.

Dark mode follows `prefers-color-scheme` — there is no toggle, because there is
no JavaScript.

## Adding a product

Append to the array in `src/data/products.ts`. The home page grid and the footer
both pick it up automatically. Ship only products that actually exist — see the
content-integrity section of BRAND.md.

## Before launch

Search the codebase for `TODO(kcnex)` — each one is a real fact that has to be
filled in or removed. The important ones:

- **`src/data/company.ts`** — legal entity, founding year, address, and real
  inboxes. The site currently references `@kcnex.com` addresses that may not
  exist yet; either create them or point them at the live `@kinsentry.com` ones.
- **`astro.config.mjs`** — the production domain, which drives canonical and
  Open Graph URLs.
- **`/privacy` and `/terms`** — plain-English scaffolds, not reviewed legal
  advice. Have a lawyer read them; governing law is deliberately left blank.

## Verified

Built and checked in-browser at 375px and 1440px, in both colour schemes:

- All 7 routes build and respond; unknown paths 404 correctly.
- No horizontal overflow; no touch target under 44px.
- Rendered text/background pairs meet WCAG AA: 19 checked in light (worst
  5.09:1), 17 in dark (worst 4.72:1). Ratios in BRAND.md.
- One `<h1>` per page, skip link, canonical, and a valid-length meta
  description on every page.
- `prefers-reduced-motion` honoured globally.
- No JavaScript ships — the only `<script>` is JSON-LD metadata.
