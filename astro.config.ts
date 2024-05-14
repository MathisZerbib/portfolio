import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://mathiszerbib.github.io'
    : 'http://localhost:4321',
  base: process.env.CI ? '/astro-contentful/' : '/',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
