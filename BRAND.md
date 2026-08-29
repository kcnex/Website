# KCNEX Innovations — Brand & Design System

Brand black and orange on warm near-white, with a display serif for headings.
The palette comes from the **KCNEX logo redesign (Aug 2026)** — see
`Desktop/KCNEX/Logo Variations/` for the master assets. This file records how
that brand is applied to a marketing site.

Tokens live in [`src/styles/tokens.css`](src/styles/tokens.css) — the only place
colour values are written down.

> **History:** this site originally shipped a warm paper/ember palette
> ("Ink & Ember"), then moved to the KinSentry steel-blue family as the parent
> brand. In Aug 2026 the KCNEX logo was redesigned (black chevrons + orange
> accent, "DEVELOP | DEPLOY | GROW"), and the site now carries that identity:
> black/orange is the brand, blue is gone.

## Adapting an app theme to a marketing site

The token set is app-shaped (shadcn-style names). A seven-page brochure has no
sidebar, charts, popovers, or forms, so only the tokens actually used are
carried into `tokens.css`; the rest were left out rather than kept as dead
weight.

Two further deviations, both deliberate:

- **No Tailwind.** This site is vanilla CSS. The custom properties themselves
  are the whole contract.
- **No `.dark` class.** This site ships zero JS, so dark mode follows
  `prefers-color-scheme`. Adding a toggle later means reintroducing
  `.dark`/`.light` with the same values as the media query.

## Palette

Computed against WCAG 2.1 (relative-luminance formula); re-verify in-browser
before launch. Every pair below is the rendered result.

| Token                | Light     | Dark      | Role                          |
| -------------------- | --------- | --------- | ----------------------------- |
| `--background`       | `#f8f7f5` | `#101114` | Page                          |
| `--foreground`       | `#1a1d22` | `#e9e9ea` | Body text (15.8:1 / 15.6:1)   |
| `--muted-foreground` | `#5d6067` | `#9b9ca3` | Prose (5.9:1 / 6.9:1)         |
| `--card`             | `#ffffff` | `#17181c` | Cards                         |
| `--primary`          | `#c2410c` | `#ff8a50` | Links, primary button (4.8:1 / 8.1:1) |
| `--primary-hover`    | `#9a3412` | `#ffa578` | Hover (6.8:1 / 9.8:1)         |
| `--success`          | `#2f7a5c` | `#56ad84` | "Live" status only            |
| `--border`           | `#e4e1dd` | `#2a2b30` | Decorative hairlines only     |
| `--border-strong`    | `#8b8781` | `#6e7077` | Interactive boundaries (3.3:1 / 3.8:1) |
| `--logo-ink`         | `#0b0b0e` | `#e9e9ea` | Logo chevrons                 |
| `--logo-accent`      | `#fa5d13` | `#fa5d13` | Logo orange (brand constant)  |

### The orange has two cuts — this is load-bearing

Brand orange `#fa5d13` is only **2.95:1** on the light page. That is fine for
the logo (WCAG 1.4.3 exempts logotypes) but a failure for anything read or
clicked. So:

- **`--logo-accent`** carries the true brand hue and is used ONLY by the mark.
- **`--primary`** is the text-safe cut: `#c2410c` in light (4.84:1),
  `#ff8a50` in dark (8.09:1). Links, buttons, eyebrows use this.

Do not "fix" a link to be the brighter brand orange in light mode — it fails.

### Tokens the theme didn't provide

- **`--band`** — the dark section (principles, footer). It *inverts* in light
  mode (`#171a1f`) but *lifts* in dark mode (`#17181c` = `--card`); a light
  band in dark mode would glare. Text is 16.3:1 / 14.6:1; band links use
  `--band-accent` (`#ff8a4d` / `#ff9a66`, 7.5:1 / 8.5:1).
- **`--border-strong`** — `--border` is decorative only and **fails WCAG
  1.4.11 (3:1)** for control boundaries. Outline buttons use `--border-strong`
  (3.34:1 / 3.82:1). Do not "simplify" this back.

### Rules

- Orange is the only chromatic brand colour. `--success` means "live" and
  nothing else; it never decorates.
- Status is never colour-only — the text label always carries the meaning.
- `--shadow` / `--shadow-lg` are composed from shadow *ingredients* via
  `color-mix()`. Change the ingredients, not the composites.

## Typography

| Role     | Font             | Notes                                          |
| -------- | ---------------- | ---------------------------------------------- |
| Headings | Instrument Serif | **Weight 400 only.** Never ask for bolder.     |
| Body/UI  | Geist            | 17px base, above the 16px mobile minimum.      |
| Labels   | JetBrains Mono   | Eyebrows and status chips.                     |

All three load from Google Fonts in `Base.astro`.

## Shape & motion

- `--radius` `0.625rem` (10px), with `--radius-sm` 6px and `--radius-lg` 14px
  derived from it.
- Hover changes colour, border, and shadow — **never** transform/scale, which
  shifts layout.
- 200ms transitions. `prefers-reduced-motion` is honoured globally.

## The logo

Two ink chevrons and one orange chevron, pointing forward — the exact vectors
from the brand asset set (`Logo Variations/SVG/`). In `Logo.astro`:

- The **ink** flips with the mode: brand black `#0b0b0e` on light, `#e9e9ea`
  on dark.
- The **accent** is brand orange `#fa5d13` in both modes.
- On the band (footer), the band is dark in *both* modes, so the ink pins to
  `--band-foreground` instead of flipping (`onBand` prop).
- `size` is the rendered **height**; width follows the mark's 1.487 aspect.

`public/favicon.svg` is a standalone file and cannot read these tokens — it
inlines the same values and flips them with its own internal
`prefers-color-scheme` query. **Keep it in sync with `Logo.astro`.**
`favicon.ico` and `apple-touch-icon.png` are exported from the same master
assets in `Desktop/KCNEX/Logo Variations/Favicons/`.

## Content integrity

This is a **credibility** site. Its whole job is being believed, which makes a
false claim far more expensive here than a missing one.

- Never invent user counts, awards, certifications, partner logos, or team bios.
- `src/data/company.ts` holds the company facts. Fields marked `TODO(kcnex)` are
  load-bearing — fill them with real values, or leave them out.
- `src/data/products.ts` lists only products that exist. One real product plus an
  honest "more in development" tile beats a padded grid.
- Facts currently on the site are carried over from the live KinSentry site
  (built in India; serves US/UK/Canada; small team; the founder's story).

## Verified

The blue-era palette was measured in-browser (0 failures at 375px/1440px, both
schemes). The orange retheme's ratios above are **computed** — re-run the
in-browser sweep at 375px and 1440px in both colour schemes before launch.

- No horizontal overflow; no touch target under 44px.
- One `<h1>` per page, skip link, canonical, valid-length meta description.

## Still to do

- [ ] In-browser contrast sweep of the orange palette (see "Verified").
- [ ] Fill every `TODO(kcnex)` in `src/data/company.ts`.
- [ ] Legal review of `/privacy` and `/terms`; set governing law.
- [ ] Set the real domain in `astro.config.mjs`.
- [ ] Self-host the three fonts — removes the Google Fonts IP disclosure in
      `/privacy` and is faster.
- [ ] Add an OG share image (`/og.png`, 1200×630) using the new lockup.
