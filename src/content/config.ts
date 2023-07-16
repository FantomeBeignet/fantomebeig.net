import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		series: z.string().optional(),
		publishDate: z.date().optional()
	})
});

export const collections = {
	blog: blogCollection
};
