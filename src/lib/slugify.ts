export const slugify = (text: string) =>
	text
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-');

export const makePostSlug = (title: string, series: string | undefined) =>
	(series ? slugify(series!) + '/' : '') + slugify(title);
