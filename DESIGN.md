---
name: Suprava Dutta — Portfolio
description: A dark keynote stage lit only by the subject's own saffron, with tactile Liquid Glass as the interface.
colors:
  stage: "#0b0806"
  stage-raised: "#15100c"
  hairline: "#2c2119"
  ivory: "#f6efe6"
  ivory-muted: "#cdbfae"
  ivory-faint: "#9d8e7d"
  saffron: "#e46000"
  marigold: "#fea800"
  ember: "#c54d01"
  brass: "#ddba78"
  brass-lit: "#e9cc93"
  glass-fill: "rgb(255 244 230 / 0.14)"
  glass-fill-low: "rgb(255 244 230 / 0.05)"
  glass-tint-dark: "rgb(28 18 10 / 0.42)"
  dock-tint: "rgb(24 15 9 / 0.62)"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(64px, 15.5vw, 250px)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(52px, 9vw, 140px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(38px, 5vw, 72px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title-sm:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 44px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(20px, 2vw, 26px)"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"tnum\" 1"
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.02em"
  group-label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.06em"
  skill-list:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 30px)"
    fontWeight: 600
    lineHeight: 1.34
    letterSpacing: "-0.02em"
  dock-label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
    lineHeight: 1.25
  data:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  focus: "8px"
  tile-sm: "14px"
  tile: "18px"
  dock-sm: "20px"
  pane-sm: "20px"
  card: "22px"
  panel: "24px"
  pane: "26px"
  table: "28px"
  social-row: "36px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "18px"
  lg: "28px"
  xl: "44px"
  gutter: "20px"
  container: "1200px"
  slide: "clamp(90px, 14vw, 180px)"
components:
  button-email:
    backgroundColor: "{colors.dock-tint}"
    textColor: "{colors.ivory}"
    rounded: "34px"
    padding: "8px 36px 8px 8px"
  link-pill:
    backgroundColor: "rgb(255 244 230 / 0.08)"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  link-pill-hover:
    backgroundColor: "rgb(255 244 230 / 0.18)"
  link-pill-pending:
    backgroundColor: "transparent"
    textColor: "{colors.ivory-faint}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  stack-tag:
    backgroundColor: "rgb(255 244 230 / 0.07)"
    textColor: "{colors.ivory-muted}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    typography: "{typography.data}"
  dock:
    backgroundColor: "{colors.dock-tint}"
    textColor: "{colors.ivory-muted}"
    rounded: "{rounded.panel}"
    padding: "6px"
  dock-tile:
    textColor: "{colors.ivory-muted}"
    rounded: "{rounded.tile}"
    padding: "8px 8px 4px"
    typography: "{typography.dock-label}"
  dock-tile-hover:
    backgroundColor: "rgb(255 244 230 / 0.08)"
    textColor: "{colors.ivory}"
  dock-tile-active:
    textColor: "{colors.ivory}"
  pane:
    backgroundColor: "{colors.glass-tint-dark}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pane}"
    padding: "20px 22px"
  spec-panel:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.panel}"
    padding: "22px 24px"
  cert-card:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.card}"
    padding: "20px 22px 20px 16px"
  social-row:
    backgroundColor: "{colors.dock-tint}"
    textColor: "{colors.ivory-muted}"
    rounded: "{rounded.social-row}"
    padding: "20px"
---

# Design System: Suprava Dutta — Portfolio

<!-- Source of truth: the production Astro build (src/styles/global.css, src/components/*). Re-extracted 2026-11-17; direction C (design/demos/c-keynote-stage.html, chosen 2026-10-22) is now history. -->

## Overview

**Creative North Star: "The Lit Stage"**

The site is a dark keynote stage where the only light source is the subject. The saffron of Suprava's shirt spills outward into a warm pool. Everything else sits in shadow: the type, the panels, the navigation. Each section is a slide that holds one idea at keynote scale. Huge, tightly set grotesk headlines sit in silence, with generous dark space above them.

The interface is **tactile, liquid glass**. Panes, the dock and spec panels behave like thick, physical lenses. They have a bright rim, a light that follows the pointer across their surface, and, in Chromium, real refraction that bends the stage light behind them. The glass has a job: it holds content in front of the light without hiding it. It never decorates an empty area.

The light is warm and comes from the photo, never from a neon source. **This is not neon cyberpunk**: no cyan, violet or electric-blue glow, no glowing edges on black, no scanlines.

**Key Characteristics:**
- A near-black warm stage, with saffron and marigold light rising from below the portrait
- The portrait as the hero object, standing in front of a giant name set behind it
- Keynote-scale grotesk type (800 weight, −0.04em tracking), one idea per slide
- Tactile Liquid Glass: rim highlights, pointer-tracked light, edge refraction
- Glossy app icons carry the actions: dock sections, resume, email, socials and links
- A fixed, macOS-style glass dock as the only navigation, arriving once the hero is done

## Colors

A warm-black stage lit by three photo-sampled oranges. Colour in the interface itself comes from the app icons; the chrome stays ivory on dark glass.

### Primary
- **Shirt Saffron** (`saffron`): the stage light itself. It appears as radial light fields behind the portrait and in the finale, and as soft glows behind project slides. It is never a flat fill behind text.
- **Sleeve Marigold** (`marigold`): the hottest point of the light, and the accent for emphasis inside headlines (the second clause of a slide title), dates, grades and list bullets. It is used only on dark ground.

### Secondary
- **Watch-Case Brass** (`brass`, hover `brass-lit`): sampled from the wristwatch and still defined in `global.css`, but no element uses it today. The resume and email actions moved to app icons in dock glass. Keep it in reserve for a single primary action; never use it as decoration.

### Tertiary
- **Shadow Ember** (`ember`): the outer, deepest ring of the stage light where it falls off into black. It is used only as a gradient stop, never as a surface.

### Neutral
- **Stage Black** (`stage`): the page ground. A warm black, never pure #000.
- **Dock Tint** (`dock-tint`, a 62% → 50% vertical gradient of `rgb(24 15 9)`): the smoked glass of the dock, the "Email me" button and the social row, dark enough for ivory labels over white headlines.
- **Raised Stage** (`stage-raised`): solid fallback for glass when transparency is reduced.
- **Rule Brown** (`hairline`): 1px dividers between slide rows.
- **Lamp Ivory** (`ivory`): headings and body text.
- **Muted Ivory** (`ivory-muted`): secondary text, leads, stack tags (about 11:1 contrast on stage).
- **Faint Ivory** (`ivory-faint`): table headers, labels, small meta (about 6:1). Never below this.

### Named Rules
**The One Light Rule.** All colour on the page is light from a single warm source below the subject. Gradients are radial and rise from the bottom; nothing glows from the side or in a cool hue.

**The Icons Carry the Colour Rule.** Outside the stage light, the only saturated colour in the interface is inside the app icons. Chrome around them (glass, labels, pills) stays ivory on dark, so the icons read as the things to press.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, sans-serif)
**Body Font:** Hanken Grotesk
**Data Font:** Spline Sans Mono (with ui-monospace)

**Character:** one confident grotesk carries everything from the 250px name down to 13px labels, so the weight and scale steps do the work. The mono appears only where the content is data.

### Hierarchy
- **Display** (800, clamp 64–250px on the stage, 60–150px on phones, line-height 0.82): the name in the hero, used once. The surname is set as an outline (1.5px ivory stroke at 55%) behind the portrait.
- **Headline** (800, clamp 52–140px, 0.9): slide titles. It may carry one marigold clause ("Agents that *do the work.*").
- **Title** (800, clamp 38–72px, 0.95): project names.
- **Title-sm** (800, clamp 28–44px, 1.02): role names in Experience.
- **Lead** (400, clamp 20–26px, 1.35): one sentence under a slide title, in muted ivory, max 34ch.
- **Body** (400, 17px, 1.55): paragraphs, max 62ch, with tabular numerals.
- **Label** (600, 13px, 0.02em): hero pane headers, cert issuers; table headers at 12.5px, 0.04em.
- **Group label** (600, 13px, 0.06em, uppercase, faint ivory): skill-group names.
- **Skill list** (600, clamp 22–30px, 1.34, −0.02em): each skill group as one sentence, with the last item joined by a regular-weight faint "and".
- **Dock label** (600, 10px on phones, 11.5px on the stage): the name under each dock icon, muted ivory, ivory when hovered or current.
- **Data** (Spline Sans Mono 400, 12.5–17px): dates, grades, stack tags, the email address and social handles.

### Named Rules
**The Slide Silence Rule.** A headline gets more empty space above it than below it, and nothing competes with it in its row. One idea per slide.

**The Mono Is Data Rule.** Mono sets dates, grades, technology names and handles, nothing else. It never sets headings or paragraphs to look "technical".

## Layout

- **Breakpoints:** `stage` at 901px is the only width breakpoint. A `short` variant (landscape, max-height 500px) handles phones on their side.
- **Hero:** a sticky full-viewport stage (100svh, min 640px on the stage, 520px on phones) inside a track that adds 120svh of scroll, so the hero holds while the first scrolls light the portrait. The giant name sits 11% from the top (13% on phones). On the stage the portrait hangs from the name so the head overlaps the lower part of "Dutta", at 64% of the hero's height. Two glass panes float at the sides, left at 52% from the top and right at 44%. A dark gradient floor covers the bottom 22%.
- **Slides:** each section starts with slide spacing above it (clamp 90–180px), inside a 1200px container with 20px side gutters. The headline has clamp 36–64px below it.
- **Projects:** two columns, 6fr story to 5fr glass spec panel, separated by 1px hairline rules.
- **Experience:** a 210px mono date column beside the content.
- **Skills:** three columns of group sentences, then a three-column grid of certificate cards.
- **Contact:** a centred finale with its own stage light, the "Email me" button, the address in mono, and a single row of social icons in dock glass.
- **Below 901px:**
  - Columns collapse to one.
  - The right hero pane is hidden, and the left pane becomes a full-width strip above the dock.
  - The portrait drops to 58% of the hero's height.
  - The dock icons shrink to clamp 40–56px; under 380px the dock drops Education and Contact.
  - The education table scrolls sideways inside its glass, so the page itself never scrolls sideways.

## Elevation & Depth

Depth comes from **light and lenses, not stacked cards**. The stage is a single plane. Glass is the only raised material, and it is lit, not shadowed. Each glass surface carries three things:
- a rim of three inset lines (a bright top edge, a dim bottom edge, a faint hairline all round);
- one soft drop shadow with a real downward offset (`0 20px 40px -20px`), so it floats above the light pool;
- a pointer-tracked specular highlight.

Glow fields (520px saffron or marigold circles blurred 80px at 32% opacity) sit behind the Projects slide to give depth. Social icons cast a soft saffron drop shadow (`0 10px 18px rgb(228 96 0 / .35)`) on hover.

### Shadow Vocabulary
- **Glass rim** (`inset 0 1px 0.5px rgb(255 255 255 / .55), inset 0 -1px 1px rgb(255 255 255 / .12), inset 0 0 0 1px rgb(255 240 225 / .12)`): every glass surface.
- **Glass float** (`0 20px 40px -20px rgb(0 0 0 / .7)`): every glass surface, together with the rim.
- **Portrait halo** (`drop-shadow(0 -10px 60px rgb(254 168 0 / .25))`): the hero portrait only. It is light spilling around the figure, and it comes up with the portrait's light as you scroll.

### Named Rules
**The Lens Rule.** Every glass surface must sit over something worth seeing (stage light, the portrait, type). Glass over a flat black area is decoration, and isn't allowed.

**The Refraction Is a Bonus Rule.** Edge refraction (an SVG displacement map through `backdrop-filter: url()`, edge up to 28px, scale −min(70, h × 0.9), built per element in `src/scripts/stage.ts`) only runs in Chromium. Every glass surface must look finished with blur, saturation and rim alone.

## Shapes

Soft, continuous rounding that reads like moulded glass:
- Panes, panels and cards: 20–28px.
- The dock and the social row: 20–36px, concentric with the icon tiles inside them (tile radius plus padding).
- Dock and social tiles: 14px on phones, 18px on the stage.
- Link pills and stack tags: fully round pills.
- Focus rings: 8px.

There are no sharp corners on interactive or glass elements, and no borders as decoration. Hairline rules (1px) appear only as dividers between slide rows and table rows.

## Components

### App icons
The interface's signature. Glossy, square app-style icons (1024px PNGs with their own rounded tile and a small art margin) stand in for buttons: the dock sections and resume, the "Email me" mail icon, the five socials, and the Safari / PDF / Pages / YouTube / GitHub marks inside link pills. They lift 2px on hover with an expo ease-out. An icon is always paired with a visible text label.

### "Email me" button
The contact action. A dark dock-glass capsule holding the mail app icon (56px on phones, 92px on the stage) and "Email me" in 17–20px/700 ivory. Hover deepens the tint to `rgb(40 26 16 / .66 → .54)`; the icon lifts.

### Link pills and stack tags
- **Link pill:** a translucent ivory fill (8%, 18% on hover), 14.5px/600, at least 40px tall, with a 22px app icon or an 18px line icon. Used for Repository, Live website, Project report, Project demo and certificate links. A pending link is an outline-only pill in faint ivory and can't be clicked.
- **Stack tag:** a mono label on a 7% ivory pill in muted ivory. Read-only, never interactive. Inside a spec panel the tags sit under a 10% ivory hairline.

### Hero panes
Floating glass placards beside the portrait, 26px radius on the stage (20px on phones), 20px × 22px padding, with a dark tint (`glass-tint-dark`) so text stays at AA over the bright shirt. Each has a label line in muted ivory and one statement of at most 30 words. The left pane names the role ("Software engineer"); the right one shows the latest role with its dates in mono. There are never more than two, and they're never interactive except for inline links.

### Spec panel
A glass panel (24px radius) to the right of each project. It holds a short bulleted list with marigold dots, then a hairline, then the stack tags.

### Experience row
A 210px mono marigold date column, then the role in title-sm, the organisation in muted ivory (linked when it has a site), a summary at max 62ch, stack tags and link pills. Rows are divided by hairlines.

### Education table
A single glass panel (28px radius) containing a real `<table>`: faint-ivory headers, bold ivory programme names, muted institutions and years, and grades in marigold mono.

### Certificate card
A glass card (22px radius) with a 48px issuer icon, the issuer in 13px faint ivory and the certificate name in 19px bold with a trailing arrow. Hover lifts it 2px.

### Navigation: the Dock
A fixed, macOS-style Liquid Glass dock 18px from the bottom of the viewport (12px on phones), in `dock-tint` so its labels stay readable over white headlines. Radius 24px on the stage, 20px on phones.
- Each section is an app-icon tile: the icon (clamp 48–92px on the stage, scaled to the window height so at least 70% of the portrait stays visible; 40–56px on phones) with its name below. Hover fills the tile at 8% ivory and lifts the icon.
- The current section, tracked as you scroll, grows its icon to 1.15× and turns its label ivory.
- A 1px divider separates the sections from the resume tile, which always sits last and opens the PDF in a new tab.
- On the hero the dock waits below the screen edge, hidden from keyboard and pointer. It rises in as Projects comes up, then stays.
- In Chromium it refracts whatever scrolls under it.

### Social row
The five socials in one row of dock glass (36px radius on the stage): each is an app icon over its handle in mono. Discord has no profile URL, so its tile is a button that copies the username and briefly reads "Copied".

### Motion
Every motion uses the exponential ease-out (`cubic-bezier(.16,1,.3,1)`), with motion's `scroll()` for scroll-linked entrances.
- **Arrival, once per load:** the stage light rises (2.2s, from 0.9 scale), the name settles out of an 18px blur (1.6s), then the panes settle in (1.2s, 0.9s delay).
- **Portrait reveal:** the figure stands in shadow at 15% brightness and 24px low; the first scrolls bring it up into full light, with its halo, and it stays lit.
- **Slide titles:** come into focus once, from a 12px blur and an 18px offset (1s).
- **Scroll-linked entrances:** "slide" parts ease in from 48px left out of a 10px blur; "rise" parts lift 72px and grow from 0.94 a beat later. Both rewind when you scroll back up.
- **Reduced motion:** with `prefers-reduced-motion`, there's no arrival motion, no reveals, no scroll-linked entrances and no pointer-tracked highlights; the dock fades instead of sliding. The `prefers-reduced-transparency` setting turns all glass solid (`stage-raised`).

## Do's and Don'ts

### Do:
- **Do** keep all light warm and rising from below: radial saffron, marigold and ember on stage black.
- **Do** give every glass surface the full recipe: translucent fill, blur 14px with saturation 1.8, the rim stack, the float shadow and the pointer highlight. Add the dark tint wherever it sits over the bright portrait or white type.
- **Do** pair every app icon with a visible label, and keep the chrome around icons ivory on dark glass.
- **Do** set slide titles at 800 weight with −0.04em tracking, and allow at most one marigold clause in them.
- **Do** keep text on glass at WCAG AA (4.5:1 body, 3:1 large), and use the solid `stage-raised` fallback when transparency is reduced.
- **Do** self-host Hanken Grotesk and Spline Sans Mono in production.

### Don't:
- **Don't** go neon cyberpunk: no cyan, violet or electric-blue glows, no glowing edges on black, no scanlines or grid floors.
- **Don't** put glass over empty black or use it as a card grid; glass is a lens, so it needs something behind it.
- **Don't** use brass for decoration; it's held in reserve for a single primary action.
- **Don't** use mono for headings, paragraphs or a "hacker" feel; it's for data only.
- **Don't** crop the portrait into a circle or other geometric mask. It stays a transparent cut-out standing on the stage.
- **Don't** use pure black (#000) or neutral greys. Every neutral is warm-tinted.
- **Don't** track type tighter than −0.04em.
