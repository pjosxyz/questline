import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				tight: ['Inter Tight', 'sans-serif']
			},
			padding: {
				mob: 'var(--px-mob)'
			}
		}
	},


} as Config;
