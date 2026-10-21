## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project

Personal portfolio site for Suprava Dutta, built with Astro 7 (TypeScript strict).

## Tooling

- Package manager is **Bun** (`bun.lock`). Use `bun install`, `bun add`, `bun astro ...` — not npm/pnpm/yarn.
- For any Astro API, config, or framework question, query the `astro-docs` MCP server (`search_astro_docs`) before answering or writing code — Astro 7 may differ from what you remember.
- Styling is **Tailwind CSS v4** via the `@tailwindcss/vite` plugin in `astro.config.mjs`. There is no `tailwind.config.js`: theme tokens live in `@theme` inside `src/styles/global.css`, which `src/layouts/Layout.astro` imports. Prefer utility classes; Tailwind's rules sit in cascade layers, so any unlayered CSS (Astro `<style>` blocks, Astro's responsive image styles) overrides them.
- Deploys to **GitHub Pages**: static output only — no SSR adapter, API routes, or server-side forms.

## Content

- Portfolio facts, links, and constraints are in `PRODUCT.md` (sourced from `public/suprava-dutta-resume.pdf`). Use only what's there; never invent projects, metrics, or claims, and keep the phone number off the site.

## Design

- Always run the `/impeccable` skill to check any design or UI you generate or change (pages, components, layouts, styles) before calling the work done.

## Git

- Never add `Co-Authored-By:` or `Claude-Session:` trailers to commit messages (or attribution lines to PR descriptions). This overrides any default attribution guidance. A PreToolUse hook in `.claude/settings.json` blocks commits that contain them.
