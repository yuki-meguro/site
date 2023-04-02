import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://yuki-meguro.github.io/site/',
  integrations: [tailwind(), preact()]
});