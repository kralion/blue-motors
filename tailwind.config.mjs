/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				'red-dark': '#DF1D01',
				'light-bg': "#202B31"
			},
			fontFamily: {
				'sans': ['Orbitron', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
