import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; 

// https://astro.build/config
export default defineConfig({
  site: 'https://fifaworld-cup-2026.org/', 
  trailingSlash: 'always', // <-- Agregado para forzar la barra final
  integrations: [sitemap()],      
  vite: {
    plugins: [tailwindcss()]      
  }
});