/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: { lightColor: '#04DFBE', darkColor: '#2D474E' },
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('@tailwindcss/forms'),
	],
};
