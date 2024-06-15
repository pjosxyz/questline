import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			tight: ['Inter Tight', 'sans-serif']
		}
	},

	plugins: [daisyui]
} as Config;
