/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: {
				50: '#f7effc',
				100: '#f4e9fb',
				200: '#f1e4fa',
				300: '#e9d3f7',
				400: '#d8b3f0',
				DEFAULT: '#C792EA',
				600: '#b383d3',
				700: '#956eb0',
				800: '#77588c',
				900: '#624873'
			},
			secondary: {
				50: '#f5f2f1',
				100: '#f2edec',
				200: '#efe9e7',
				300: '#e5dbd9',
				400: '#d1c1bc',
				DEFAULT: '#BDA69F',
				600: '#aa958f',
				700: '#8e7d77',
				800: '#71645f',
				900: '#5d514e'
			},
			tertiary: {
				50: '#fdeee8',
				100: '#fde8e1',
				200: '#fce2d9',
				300: '#fbd1c3',
				400: '#f7ae95',
				DEFAULT: '#F48B68',
				600: '#dc7d5e',
				700: '#b7684e',
				800: '#92533e',
				900: '#784433'
			},
			success: {
				50: '#d9f6f3',
				100: '#ccf3ef',
				200: '#bff0eb',
				300: '#99e7df',
				400: '#4dd4c7',
				DEFAULT: '#00c2af',
				600: '#00af9e',
				700: '#009283',
				800: '#007469',
				900: '#005f56'
			},
			warning: {
				50: '#fff9e9',
				100: '#fff6e2',
				200: '#fff4da',
				300: '#ffeec4',
				400: '#ffe198',
				DEFAULT: '#ffd46c',
				600: '#e6bf61',
				700: '#bf9f51',
				800: '#997f41',
				900: '#7d6835'
			},
			error: {
				50: '#f9ddea',
				100: '#f6d1e4',
				200: '#f4c6dd',
				300: '#eea3c8',
				400: '#e15e9f',
				DEFAULT: '#d41976',
				600: '#bf176a',
				700: '#9f1359',
				800: '#7f0f47',
				900: '#680c3a'
			},
			surface: {
				50: '#e4e3e5',
				100: '#dbd9dc',
				200: '#d3d0d4',
				300: '#b8b4ba',
				400: '#827b86',
				DEFAULT: '#4D4352',
				600: '#453c4a',
				700: '#3a323e',
				800: '#2e2831',
				900: '#262128'
			},
			transparent: 'transparent'
		}
	},
	plugins: []
};
