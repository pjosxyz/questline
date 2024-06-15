import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				tight: ['Inter Tight', 'sans-serif']
			},
			padding: {
				mob: 'var(--px-mob)'
			}
		}
	}
};

export default config;
