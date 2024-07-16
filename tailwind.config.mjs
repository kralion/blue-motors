/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				'primary': '#0543ba',
				'secondary': '#fffff',
				'border': '#b4b3af',
				'bg': '#010101',
			},
			fontFamily: {
				'sans': ['Orbitron', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
