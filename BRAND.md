# KCNEX Innovations — Brand & Design System

Steel blue on near-white, with a display serif for headings. The palette, radii,
and fonts come from the **KCNEX theme** (a tweakcn/shadcn-shaped token set); this
file records how that theme is applied to a marketing site and what had to be
added to make it work.

Tokens live in [`src/styles/tokens.css`](src/styles/tokens.css) — the only place
colour values are written down.

> **History:** this site originally shipped a warm paper/ember palette
> ("Ink & Ember") chosen to keep KCNEX visually independent from KinSentry. That
> constraint was dropped deliberately. KCNEX now sits in the same blue family as
> KinSentry, as the parent brand.

## Adapting an app theme to a marketing site

The source theme is app-shaped: it carries `--sidebar-*`, `--chart-*`,
`--popover-*`, `--input`, and `--destructive`. A seven-page brochure has no
sidebar, charts, popovers, or forms, so most of those have no consumer here.
Only the tokens actually used are carried into `tokens.css`; the rest were left
out rather than kept as dead weight.

Two further deviations, both deliberate:

- **No Tailwind.** The theme's `@theme inline` block only aliases these values
  for Tailwind utilities. This site is vanilla CSS, so that block is omitted.
  The custom properties themselves are the whole contract.
- **No `.dark` class.** The theme switches on `.dark`, which assumes a JS theme
  toggle. This site ships zero JS, so dark mode follows `prefers-color-scheme`.
  Adding a toggle later means reintroducing `.dark`/`.light` with the same
  values as the media query.

## Palette

Measured, not estimated. Every pair below is the rendered result.

| Token               | Light     | Dark      | Role                          |
| ------------------- | --------- | --------- | ----------------------------- |
| `--background`      | `#f7f7f8` | `#0f1419` | Page                          |
| `--foreground`      | `#1a2530` | `#e5e9ee` | Body text (14.5:1 / 15.2:1)   |
| `--muted-foreground`| `#5a6573` | `#8590a0` | Prose (5.5:1 / 5.7:1)         |
| `--card`            | `#ffffff` | `#161c24` | Cards                         |
| `--primary`         | `#1a6289` | `#7ab0d0` | Links, primary button         |
| `--primary-hover`   | `#144a67` | `#a8cfe3` | Hover (= `--chart-3`/`-2`)    |
| `--success`         | `#2f7a5c` | `#56ad84` | "Live" status only (`chart-4`)|
| `--border`          | `#dbe0e6` | `#28313d` | Decorative hairlines only     |
| `--border-strong`   | `#7d8a99` | `#647285` | Interactive boundaries        |

### Tokens the theme didn't provide

The theme has no concept of a full-bleed emphasis band, a visible control
border, or hover states. These were derived from its own colours:

- **`--band`** — the dark section (principles, footer). It *inverts* in light
  mode (`#1a2530`) but *lifts* in dark mode (`#161c24` = `--card`); a light band
  in dark mode would glare. Text is 14.5:1 / 14.1:1.
- **`--border-strong`** — `--border` is only **1.24:1** on `--background`
  (1.41:1 dark). That is fine for a decorative hairline but **fails WCAG 1.4.11
  (3:1)** for anything conveying a control's boundary. Outline buttons use
  `--border-strong` (3.29:1 / 3.78:1) instead. This is the one genuine
  accessibility gap in the source theme — do not "simplify" it back.
- **`--logo-block` / `--logo-mark`** — see below.

### Rules

- Blue is the only chromatic brand colour. `--success` means "live" and nothing
  else; it never decorates.
- Status is never colour-only — the text label always carries the meaning.
- `--shadow` / `--shadow-lg` are composed from the theme's shadow *ingredients*
  (`--shadow-offset-*`, `--shadow-blur`, `--shadow-color`, `--shadow-opacity`)
  via `color-mix()`. Change the ingredients, not the composites.

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

A keystone block with a stroked **K**. The block is `--foreground`, so it flips
between modes — dark block on light, light block on dark. The mark must flip with
it:

- Light mode: mark is `--chart-2` `#83c4e7` (8.15:1 on the block). **`--primary`
  cannot be used here — it is only 2.33:1 on the dark block and the K vanishes.**
- Dark mode: block is light, so the mark is `#1a6289` (5.46:1).
- On the band (footer), the block is light in *both* modes, so the mark stays
  `--logo-mark-on-light`.

`public/favicon.svg` is a standalone file and cannot read these tokens — it
inlines the same values and flips them with its own internal
`prefers-color-scheme` query. **Keep it in sync with `Logo.astro`.**

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

Measured in-browser at 375px and 1440px, in both colour schemes:

- Light: 19 text/background pairs checked, 0 failures (worst 5.09:1).
- Dark: 17 pairs checked, 0 failures (worst 4.72:1).
- No horizontal overflow; no touch target under 44px.
- One `<h1>` per page, skip link, canonical, valid-length meta description.

## Still to do

- [ ] Fill every `TODO(kcnex)` in `src/data/company.ts`.
- [ ] Legal review of `/privacy` and `/terms`; set governing law.
- [ ] Set the real domain in `astro.config.mjs`.
- [ ] Self-host the three fonts — removes the Google Fonts IP disclosure in
      `/privacy` and is faster.
- [ ] Add an OG share image (`/og.png`, 1200×630).
