import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
				serif: ['Croissant One', ...defaultTheme.fontFamily.serif]
			}
		}
	},

	plugins: []
} satisfies Config;
