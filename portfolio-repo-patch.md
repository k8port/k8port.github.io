# Design system updates — patch notes for k8port-portfolio

Apply these by hand (no write access to push directly). Organized by file.

## app/styles/typography/fonts.ts

Replace font imports/exports with:

```ts
export const fontJosefinSans = 'Josefin Sans', sans-serif;  // body, labels, nav — replaces Space Grotesk
export const fontZillaSlab = 'Zilla Slab', serif; // headings — replaces DM Serif Display
export const fontLobster = 'Lobster', cursive;   // decorative/wordmark only — replaces Great Vibes
```

Drop: Space Grotesk, DM Serif Display, Great Vibes, Martian Mono, Cormorant Garamond (all unused after this change).
Google Fonts `<link>`/`next/font` import:

```ts
family=Josefin+Sans:wght@400;600;700&family=Zilla+Slab:wght@400;600&family=Lobster
```

## app/styles/typography/typography.ts

- H1/H2/H3 → `fontZillaSlab`, weight 600–700
- Body / paragraph-base / paragraph-small / captions → `fontJosefinSans`
- Nav menu item → `fontJosefinSans`
- Wordmark/signature only → `fontLobster` (do not use elsewhere)

## app/styles/theme/theme_light.ts + theme_dark.ts — proficiency scale

Old (mixed hues, unordered): novice/advbegin/competent/proficient/expert scattered red→yellow→green→blue→navy.
New (single blue-green ramp, light→dark = novice→expert):

```ts
novice:     oklch(0.9 0.05 200)
advbegin:   oklch(0.76 0.08 195)
competent:  oklch(0.62 0.11 190)
proficient: oklch(0.46 0.11 200)
expert:     oklch(0.28 0.08 210)
```

Note: `novice` no longer aliases `portlandorangered` — proficiency scale is now its own token family, decoupled from Collection/Accent colors.

## New neutral token

Add `pariswhite: oklch(0.94 0.0055 200)` to neutrals (light theme) — used as a 5th "core" reference color alongside primary/accent/semantic/blackplum.

## app/ui/buttons/ButtonStyle.tsx — card "view project" button

Currently hardcoded to light-theme colors regardless of theme. Fix: read from theme context.

```ts
// light
background: tertiary /* oklch(0.96 0.065 164.14) */, border: tertiaryvar, color: blackplum
// dark
background: dkaccentgreen /* oklch(0.75 0.15387 166.913) */, border: dkaccentgreenvar, color: dkdarksecondary
```

## app/ui/header/navmenu/NavMenu.tsx — hover color

Hardcoded `alizarincrimson` on hover in both themes; low contrast against dark nav background.

```ts
hoverColor: theme === 'dark' ? dkaccentred /* oklch(0.63 0.2576 29.18) */ : alizarincrimson /* oklch(0.59 0.2198 23.84) */
```

## app/ui/projects/ProjectCard.tsx — tags + hover + compact variant

- Render tags as pill chips (border-radius 999px, small padding, label-color text) instead of a plain comma string.
- Add hover state: border-color → heading color, shadow escalates one step, `translateY(-2px)`.
- Add a compact/list row variant (no image) for resume/blog-index contexts — title + pill tags + "view →", inline.

## Alias/dedup note (docs only, no code change)

`portlandorangered` (Collection) and `accentred`/`accentredvar` (Accent) are intentionally close variants of the same hue family — document this in the palette README so it doesn't read as accidental duplication.
