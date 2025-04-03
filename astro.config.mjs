// @ts-check
import { defineConfig } from 'astro/config';

import relativeLinks from 'astro-relative-links';
import tailwindcss from "@tailwindcss/vite";

import mdx from '@astrojs/mdx';
import rehypeCitations from './src/lib/citation-extractor';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [rehypeCitations, rehypeKatex],
    remarkPlugins: [remarkMath],
  }
});