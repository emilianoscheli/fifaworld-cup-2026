import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // <-- 1. Importamos el sitemap

// https://astro.build/config
export default defineConfig({
  site: 'https://fifaworld-cup-2026.org/', // <-- 2. OBLIGATORIO: Tu dominio en producción
  integrations: [sitemap()],      // <-- 3. Agregamos el sitemap a las integraciones
  vite: {
    plugins: [tailwindcss()]      // (Tailwind sigue igual, adentro de vite)
  }
});