// @ts-check
import { defineConfig } from 'astro/config';

import relativeLinks from 'astro-relative-links';
import tailwindcss from "@tailwindcss/vite";

import mdx from '@astrojs/mdx';
import rehypeCitations from './src/lib/citation-extractor';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeClassNames from 'rehype-class-names';

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [rehypeCitations, rehypeKatex, [rehypeClassNames, {
      h1: 'opacity-0 intersect:opacity-100 transition-opacity duration-1000',
      h2: 'opacity-0 intersect:opacity-100 transition-opacity duration-1000',
      h3: 'opacity-0 intersect:opacity-100 transition-opacity duration-1000',
    }]],
    remarkPlugins: [remarkMath],
  }
});