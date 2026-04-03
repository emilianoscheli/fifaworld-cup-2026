import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://fifaworld-cup-2026.org/',

  // <-- Agregado para forzar la barra final
  trailingSlash: 'always',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]      
  },

  adapter: cloudflare()
});