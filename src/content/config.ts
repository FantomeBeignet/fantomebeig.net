import { z, defineCollection, reference } from 'astro:content';

const seriesCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string()
	})
});

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		series: z.optional(reference('series')),
		publishDate: z.date().optional()
	})
});

export const collections = {
	series: seriesCollection,
	blog: blogCollection
};
