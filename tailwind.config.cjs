/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				blink: {
					"0%, 100%": { opacity: 0 },
					"50%": { opacity: 1 },
				},
			},
			animation: {
				blink: "blink 1.2s steps(1, start) infinite",
			},
		},
	},
	plugins: [],
}
