# Design guidelines: Suprava Dutta portfolio

Product facts, links and content rules live in `PRODUCT.md`. This file holds the visual rules every direction must follow, plus the three candidate directions built as demos in `design/demos/`.

> **Status:** **Direction C (Keynote Stage) was chosen on 2026-10-22.** The design system for it lives in `/DESIGN.md` plus `.impeccable/design.json`, which take precedence over this file. Directions A and B below are kept as history.

---

## 1. Shared foundation (binding for any direction)

### Mode
The surface is a portfolio. The work leads from the first screen, and the interface stays in the background. Within the first viewport, a recruiter must be able to see the role, the main stack and the **resume download**.

### Palette: sampled from the portrait
All colours trace back to `src/assets/suprava-portrait.png`. Don't introduce colours that aren't in the photo, apart from neutral inks and grounds.

| Token | Hex | Source in photo | Role |
|---|---|---|---|
| `saffron` | `#E46000` | T-shirt, lit side | Main brand colour, active states, the main "line" or "glow" |
| `marigold` | `#FEA800` | Sleeve highlight | Highlights on dark grounds only (too low-contrast on light) |
| `ember` | `#C54D01` | T-shirt, shadow side | Deep surfaces, covers |
| `rust` | `#9D4505` | Neckline shadow | Secondary category colour; strokes on light grounds |
| `brass` | `#DDBA78` | Watch case | **Reserved for the primary action** (resume, email). Never decorative |
| `dial` | `#E7DBC6` | Watch face | Light highlights, ghost text |
| `skin` | `#F3BC81` | Forearm | Rarely; warm light falloff |
| `graphite` | `#4A4549` / `#5E595F` | Glasses frame | Neutral category colour, hardware |
| `ink` | `#1A120C` | Strap, hair | Text on light grounds; dark grounds |

Contrast rules that the demos already ran into:
- Use **dark ink** text on `saffron` (white on saffron is only 3.5:1). White text is fine on `ember` (4.7:1), `rust` and `ink`.
- `marigold` is only for graphics or text on dark grounds. On light grounds, use `ochre #B07800` as its stand-in.
- Secondary text is tinted from the warm ink (`#5B4A3D` on light, `#CDBFAE` on dark), never neutral grey.

### Apple Liquid Glass (binding requirement)
Glass must be a **specific effect**, not a general look. Every glass surface needs a job, and each demo gives it one:
- **A:** a magnifying lens over the map.
- **B:** a laminate film over the data page.
- **C:** a dock and panes that refract the stage light.

**Material recipe** (shared by all directions):
1. A translucent fill: a top-to-bottom gradient, white at 14–60% depending on how dark the ground is.
2. `backdrop-filter: blur(14–18px) saturate(1.6–1.8)`.
3. A rim made of three inset lines: a bright 1px top highlight, a dim bottom line, and a faint hairline all round. One soft outer shadow with a real vertical offset.
4. A specular highlight that follows the pointer (a radial gradient at `--sx` / `--sy`).
5. **Refraction where supported:** in Chromium, use `backdrop-filter: url(#filter)` with an edge-displacement map (rounded-rect distance field: a flat centre and a bent rim). See `c-keynote-stage.html`. Other browsers keep steps 1–4.

**Rules:**
- Text on glass must still meet WCAG AA. Glass over bright photo areas needs a darker tint (`rgb(28 18 10 / .3–.6)`).
- `prefers-reduced-transparency: reduce` turns all glass into solid surfaces.
- Don't use it as decoration: no glass cards in a grid, no glass on every section.

### Typography
- Pick faces that fit the chosen world. **Avoid:** Inter, Geist, Space Grotesk, IBM Plex, DM Sans, Outfit, Plus Jakarta, Fraunces, Playfair.
- Tracking no tighter than −0.04em. Body text 65–75 characters per line. Leave more space above a heading than below it.
- Mono is for data only (dates, codes, stack tags, MRZ), never as a "tech" costume.
- Production fonts are **self-hosted** (Astro fonts API or `@font-face` in `public/fonts`). The demos load from Google Fonts only for convenience.

### Portrait handling
- Use the transparent cut-out as it is. Never crop it into a circle or other geometric mask.
- The cut-out has a slightly ragged edge along the right shoulder, which shows on light grounds. Put a soft warm shadow behind it, or ask for a cleaner cut-out before launch.
- Production: serve through Astro's `<Image>` as WebP or AVIF with real `width` and `height`. The demos use `design/demos/assets/portrait.webp` (900px, 78 KB).

### Content rules
- Only use content from `PRODUCT.md` / the resume. No invented metrics, clients or testimonials.
- Leave the phone number off.
- The Smart Home repo is shown as "Repository link pending" until the correct link is confirmed.
- Diagrams are labelled "Schematic · simplified".

### Icons
Lucide-style line icons with a 1.9–2 stroke, defined once as an SVG `<symbol>` sprite. No emoji or Unicode characters standing in for icons.

### Motion
- Each page gets **one** signature motion moment, plus a small set of reveal effects.
- Use exponential ease-out (`cubic-bezier(.16,1,.3,1)`). Content stays visible by default.
- `prefers-reduced-motion` removes entrance motion and the pointer-tracked effects.

### Browser surfaces
Style selection colour, focus rings (saffron or marigold), scrollbar colours, underline offset and tabular numerals from the palette. The demos already do this.

### Tailwind v4 mapping (when building)
```css
/* src/styles/global.css */
@import "tailwindcss";
@theme {
  --color-saffron: #e46000;  --color-marigold: #fea800; --color-ember: #c54d01;
  --color-rust: #9d4505;     --color-brass: #ddba78;    --color-dial: #e7dbc6;
  --color-graphite: #4a4549; --color-ink: #1a120c;
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
}
/* the glass recipe becomes one @utility */
@utility glass { /* steps 1–4 above */ }
```

### Platform constraints
Static output for GitHub Pages: no SSR and no form backend. Contact is an `mailto:` link. Refraction is added on the client side, and the page must look complete without it.

---

## 2. The three directions

### A · Line Map (`demos/a-line-map.html`)
- **Thesis:** your work as a transit network. The lines are domains (Agents, Backend, Web, Hardware), the stations are technologies, and the interchanges are your projects and roles. This replaces the usual hero with skill chips.
- **World:** a neutral map-white ground (`#F7F6F2`) and octilinear lines in saffron, rust, ochre and graphite. Interchanges are white roundels; Overpass type for signage. You stand in front of the map like a passenger reading it.
- **Liquid Glass:** a real magnifying lens that follows the pointer over the map (keyboard focus on an interchange moves it there), plus a glass header bar.
- **Sections:**
  - Projects, each drawn as an in-carriage strip map.
  - Experience and education as vertical line diagrams; the two degrees run as parallel tracks.
  - Skills as a station index.
  - Contact as the terminus ("All lines end here").
- **Risk:** the map is dense. On phones it becomes a horizontally scrolling strip and the lens is hidden.

### B · Credential Booklet (`demos/b-credential-booklet.html`)
- **Thesis:** the portfolio as a passport that opens vertically. Your identity and history accumulate as official entries, the record recruiters already know how to read.
- **World:** security-paper pages with real guilloché geometry on a dark desk.
  - The burgundy cover is translated to **saffron and ember**, and the gold blocking to **brass**.
  - Type: Cinzel engraved capitals, Public Sans for fields, B612 Mono for the machine-readable lines.
- **Liquid Glass:** a holographic laminate over the data page. Its iridescence and highlight follow the pointer, and a ghost monogram catches the light.
- **Sections:**
  - The data page with your portrait (the hero).
  - An observations page for your summary and skills.
  - Roles as visas.
  - Projects as plates, each with a schematic.
  - Education and certifications as stamps that press in once. The certification stamps link to their verification pages.
  - The back cover for contact.
- **Risk:** the passport metaphor must stay clearly stylised. There's no nationality, no emblem, and the footer disclaims it as a real document. It is also the longest scroll of the three.

### C · Keynote Stage (`demos/c-keynote-stage.html`), the familiar choice
- **Thesis:** an Apple-style keynote. You on a dark stage, lit by your own shirt's orange; the name set huge behind you; each section a slide.
- **World:** a near-black stage with saffron and marigold stage light, Hanken Grotesk at keynote scale, and Spline Sans Mono for data.
- **Liquid Glass:** the most literal Apple take. A fixed glass dock and floating panes that **actually refract** in Chromium (displacement map) and blur elsewhere, with highlights that follow the pointer.
- **Sections:**
  - Projects as slides, each with a glass spec pane.
  - Experience as a timeline of roles.
  - Education as a glass table.
  - Skills as large typographic lists.
  - Contact as a final "Let's build something" slide.
- **Risk:** it's the most familiar of the three. Many glass portfolios land near here; what sets it apart is the photo-lit stage and the real refraction.

### Not built
- **A drum machine's 16-step row**, with your timeline as a step sequencer. Its orange, red and yellow keys match the photo. It was a close fourth and can be built if you want it.
- **Considered and dropped:** an iridescent cloud edge, a luminescent forest, a CRT arcade screen, and a Bauhaus workshop. What I kept from them:
  - Colour only along line edges and text kept plain (cloud).
  - The one brightest element reserved for focus (forest).
  - Gold strictly for the primary action (arcade).
  - Category colours rationed by role (Bauhaus).

---

## 3. Next steps
1. Pick a direction, or combine elements where they don't clash (e.g. A's lens inside B).
2. Record the direction contract in a surface brief, then build it in Astro with Tailwind (self-hosted fonts, `<Image>`, static output).
3. Finish with a review, then generate `DESIGN.md` from the built site.
