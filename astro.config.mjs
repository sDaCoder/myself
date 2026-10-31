// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://supravadutta23.me',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Hanken Grotesk',
      cssVariable: '--font-hanken',
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'sans-serif']
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Spline Sans Mono',
      cssVariable: '--font-spline-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace']
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
