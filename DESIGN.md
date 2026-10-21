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
    letterSpacing: "0.04em"
  data:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  focus: "8px"
  pane-sm: "20px"
  card: "22px"
  panel: "24px"
  pane: "26px"
  table: "28px"
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
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.stage}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.brass-lit}"
  button-glass:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  link-pill:
    backgroundColor: "rgb(255 244 230 / 0.08)"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  link-pill-hover:
    backgroundColor: "rgb(255 244 230 / 0.18)"
  stack-tag:
    backgroundColor: "rgb(255 244 230 / 0.07)"
    textColor: "{colors.ivory-muted}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    typography: "{typography.data}"
  dock:
    backgroundColor: "rgb(24 15 9 / 0.56)"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "6px"
  dock-link-active:
    backgroundColor: "rgb(255 244 230 / 0.16)"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
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
---

# Design System: Suprava Dutta — Portfolio

<!-- Source of truth: design/demos/c-keynote-stage.html (direction C, chosen 2026-10-22). Re-run `$impeccable document` once the Astro build exists to re-extract from production code. -->

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
- Brass reserved for the one action that matters: resume or email
- A fixed glass dock as the only navigation

## Colors

A warm-black stage lit by three photo-sampled oranges. Brass, taken from the wristwatch, marks the primary action.

### Primary
- **Shirt Saffron** (`saffron`): the stage light itself. It appears as radial light fields behind the portrait and in the finale, and as soft glows behind project slides. It is never a flat fill behind text.
- **Sleeve Marigold** (`marigold`): the hottest point of the light, and the accent for emphasis inside headlines (the second clause of a slide title), dates, grades and list bullets. It is used only on dark ground.

### Secondary
- **Watch-Case Brass** (`brass`, hover `brass-lit`): the primary-action colour, used on the resume button in the dock and the "Email me" button. It appears on at most two elements per viewport.

### Tertiary
- **Shadow Ember** (`ember`): the outer, deepest ring of the stage light where it falls off into black. It is used only as a gradient stop, never as a surface.

### Neutral
- **Stage Black** (`stage`): the page ground. A warm black, never pure #000.
- **Raised Stage** (`stage-raised`): solid fallback for glass when transparency is reduced.
- **Rule Brown** (`hairline`): 1px dividers between slide rows.
- **Lamp Ivory** (`ivory`): headings and body text.
- **Muted Ivory** (`ivory-muted`): secondary text, leads, stack tags (about 11:1 contrast on stage).
- **Faint Ivory** (`ivory-faint`): table headers, labels, small meta (about 6:1). Never below this.

### Named Rules
**The One Light Rule.** All colour on the page is light from a single warm source below the subject. Gradients are radial and rise from the bottom; nothing glows from the side or in a cool hue.

**The Brass Is Earned Rule.** Brass marks only the resume download and the email action. A third brass element on screen means one of them is wrong.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, sans-serif)
**Body Font:** Hanken Grotesk
**Data Font:** Spline Sans Mono (with ui-monospace)

**Character:** one confident grotesk carries everything from the 250px name down to 13px labels, so the weight and scale steps do the work. The mono appears only where the content is data.

### Hierarchy
- **Display** (800, clamp 64–250px, line-height 0.82): the name in the hero, used once. The surname is set as an outline (1.5px ivory stroke at 55%) behind the portrait.
- **Headline** (800, clamp 52–140px, 0.9): slide titles. It may carry one marigold clause ("Agents that *do the work.*").
- **Title** (800, clamp 38–72px, 0.95): project names.
- **Title-sm** (800, clamp 28–44px, 1.02): role names in Experience.
- **Lead** (400, clamp 20–26px, 1.35): one sentence under a slide title, in muted ivory, max 34ch.
- **Body** (400, 17px, 1.55): paragraphs, max 62ch, with tabular numerals.
- **Label** (600, 13px, 0.04em): pane headers, table headers, skill-group labels. Group labels are uppercase.
- **Data** (Spline Sans Mono 400, 12.5–17px): dates, grades, stack tags.

### Named Rules
**The Slide Silence Rule.** A headline gets more empty space above it than below it, and nothing competes with it in its row. One idea per slide.

**The Mono Is Data Rule.** Mono sets dates, grades and technology names, nothing else. It never sets headings or paragraphs to look "technical".

## Layout

- **Hero:** a full-viewport stage (100svh, min 640px). The giant name sits about 11% from the top. The portrait is centred and anchored to the bottom at 74% of the hero's height, overlapping the name. Two glass panes float at the sides, one on the left at 52% from the top and one on the right at 44%. A dark gradient "floor" covers the bottom 22% so the dock can sit on it.
- **Slides:** each section starts with slide spacing above it (clamp 90–180px), inside a 1200px container with 20px side gutters.
- **Projects:** two columns, 6fr story to 5fr glass spec panel, separated by 1px hairline rules.
- **Experience:** a 210px date column beside the content.
- **Skills:** three columns.
- **Responsive (below 900px):**
  - Columns collapse to one.
  - The right hero pane is hidden, and the left pane becomes a full-width strip above the dock.
  - The portrait drops to 58% of the hero's height.
  - The dock drops Education and Contact.
  - The education table scrolls sideways inside its glass, so the page itself never scrolls sideways.

## Elevation & Depth

Depth comes from **light and lenses, not stacked cards**. The stage is a single plane. Glass is the only raised material, and it is lit, not shadowed. Each glass surface carries three things:
- a rim of three inset lines (a bright top edge, a dim bottom edge, a faint hairline all round);
- one soft drop shadow with a real downward offset (`0 20px 40px -20px`), so it floats above the light pool;
- a pointer-tracked specular highlight.

Glow fields (saffron or marigold circles blurred 80px at 32% opacity) sit behind content to give depth.

### Shadow Vocabulary
- **Glass rim** (`inset 0 1px 0.5px rgb(255 255 255 / .55), inset 0 -1px 1px rgb(255 255 255 / .12), inset 0 0 0 1px rgb(255 240 225 / .12)`): every glass surface.
- **Glass float** (`0 20px 40px -20px rgb(0 0 0 / .7)`): every glass surface, together with the rim.
- **Portrait halo** (`drop-shadow(0 -10px 60px rgb(254 168 0 / .25))`): the hero portrait only. It is light spilling around the figure.

### Named Rules
**The Lens Rule.** Every glass surface must sit over something worth seeing (stage light, the portrait, type). Glass over a flat black area is decoration, and isn't allowed.

**The Refraction Is a Bonus Rule.** Edge refraction (an SVG displacement map through `backdrop-filter: url()`) only runs in Chromium. Every glass surface must look finished with blur, saturation and rim alone.

## Shapes

Soft, continuous rounding that reads like moulded glass:
- Panes and panels: 20–28px.
- Every control (buttons, dock, links, tags): fully round pills.
- Focus rings: 8px.

There are no sharp corners on interactive or glass elements, and no borders as decoration. Hairline rules (1px) appear only as dividers between slide rows and table rows.

## Components

### Buttons
Tactile pills that sit in the light.
- **Shape:** full pill (999px).
- **Primary (brass):** brass fill with stage-black text, 700 weight, 13px × 22px padding. Hover lifts it 1px and lightens it to brass-lit, with an expo ease-out over 300ms.
- **Glass:** the same pill in the liquid-glass material with ivory text. Hover brightens the fill to 18%.
- **Focus:** 2px marigold outline, 3px offset.

### Link pills and stack tags
- **Link pill:** a translucent ivory fill (8%) with an 18px line icon. Used for Repository, Live site and certificate links. A pending link shows as an outline-only pill in faint ivory and isn't clickable.
- **Stack tag:** a mono label on a 7% ivory pill in muted ivory. Read-only, never interactive.

### Hero panes
Floating glass placards beside the portrait, 26px radius, 20px × 22px padding, with a dark tint (`glass-tint-dark`) so text stays at AA over the bright shirt. Each has a label line in muted ivory and one statement of at most 30 words. There are never more than two, and they're never interactive except for inline links.

### Spec panel
A glass panel (24px radius) to the right of each project. It holds a short bulleted list with marigold dots, then a hairline, then the stack tags.

### Education table
A single glass panel (28px radius) containing a real `<table>`: faint-ivory headers, ivory programme names, and grades in marigold mono.

### Navigation: the Dock
The site's signature component. A fixed Liquid Glass pill 18px from the bottom of the viewport, with a dark tint (`rgb(24 15 9 / .56)`) so its labels stay readable over white headlines.
- Its links are 14.5px/600 ivory pills. The current section gets a 16% ivory fill, tracked as you scroll.
- The brass resume pill always sits last.
- In Chromium it refracts whatever scrolls under it.

### Motion
Every motion uses the exponential ease-out (`cubic-bezier(.16,1,.3,1)`).
- **Arrival, once per load:** the stage light rises (2.2s), the name settles out of an 18px blur, the portrait rises 30px, and then the panes settle in.
- **Scroll reveals:** blocks come into focus once, from a 12px blur and an 18px offset.
- **Reduced motion:** with `prefers-reduced-motion`, there's no arrival motion, no reveals and no pointer-tracked highlights. The `prefers-reduced-transparency` setting turns all glass solid (`stage-raised`).

## Do's and Don'ts

### Do:
- **Do** keep all light warm and rising from below: radial saffron, marigold and ember on stage black.
- **Do** give every glass surface the full recipe: translucent fill, blur 14px with saturation 1.8, the rim stack, the float shadow and the pointer highlight. Add the dark tint wherever it sits over the bright portrait or white type.
- **Do** keep brass for the resume and email actions only.
- **Do** set slide titles at 800 weight with −0.04em tracking, and allow at most one marigold clause in them.
- **Do** keep text on glass at WCAG AA (4.5:1 body, 3:1 large), and use the solid `stage-raised` fallback when transparency is reduced.
- **Do** self-host Hanken Grotesk and Spline Sans Mono in production.

### Don't:
- **Don't** go neon cyberpunk: no cyan, violet or electric-blue glows, no glowing edges on black, no scanlines or grid floors.
- **Don't** put glass over empty black or use it as a card grid; glass is a lens, so it needs something behind it.
- **Don't** add a third brass element, or use brass for decoration.
- **Don't** use mono for headings, paragraphs or a "hacker" feel; it's for data only.
- **Don't** crop the portrait into a circle or other geometric mask. It stays a transparent cut-out standing on the stage.
- **Don't** use pure black (#000) or neutral greys. Every neutral is warm-tinted.
- **Don't** track type tighter than −0.04em.
