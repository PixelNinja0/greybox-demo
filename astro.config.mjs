import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/greybox-demo',

  vite: {
    plugins: [tailwindcss()],
  },
});