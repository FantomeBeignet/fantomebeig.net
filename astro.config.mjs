import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import AutoImport from 'astro-auto-import';
import MDXCodeBlocks, { mdxCodeBlockAutoImport } from 'astro-mdx-code-blocks';

import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			wrap: true
		},
		remarkPlugins: [remarkReadingTime]
	},
	integrations: [
		AutoImport({
			imports: [mdxCodeBlockAutoImport('src/components/CodeBlock.astro')]
		}),
		MDXCodeBlocks(),
		svelte(),
		tailwind(),
		mdx()
	]
});
