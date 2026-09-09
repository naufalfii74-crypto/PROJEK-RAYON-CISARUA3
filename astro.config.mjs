import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rayon-cisarua3.netlify.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  build: {
    // Inline stylesheets smaller than this threshold (in bytes) to reduce requests
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Better chunk splitting for production
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Predictable file names for caching
          assetFileNames: '_astro/[name].[hash][extname]',
          chunkFileNames: '_astro/[name].[hash].js',
          entryFileNames: '_astro/[name].[hash].js',
        },
      },
    },
  },
});
