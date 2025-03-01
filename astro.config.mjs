// @ts-check
import { defineConfig } from 'astro/config';

import relativeLinks from 'astro-relative-links';

import mdx from '@astrojs/mdx';
import rehypeCitations from './src/lib/citation-extractor';

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(), mdx()],

  vite: {
    plugins: []
  },
  markdown: {
    rehypePlugins: [rehypeCitations]
  }
});