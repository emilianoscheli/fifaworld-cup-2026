import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // <-- 1. Importamos el sitemap

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // <-- 2. OBLIGATORIO: Tu dominio en producción
  site: 'https://fifaworld-cup-2026.org/',

  // <-- 3. Agregamos el sitemap a las integraciones
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]      // (Tailwind sigue igual, adentro de vite)
  },

  adapter: cloudflare()
});