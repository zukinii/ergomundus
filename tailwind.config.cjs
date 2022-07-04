const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#F5FC00'
			},
			fontFamily: {
				copy: ['"Helvetica Condensed"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
				heading: [
					'"Neue Helvetica Compressed"',
					'"Helvetica Neue"',
					'Helvetica',
					'Arial',
					'sans-serif'
				]
			},
			animation: {
				sparkle: 'sparkle 1s linear infinite',
				rotate: 'rotate 2s linear infinite'
			},
			keyframes: {
				sparkle: {
					'0%, 100%': { transform: 'scale(0.1)', opacity: '0.1' },
					'50%': { transform: 'scale(1)', opacity: '1' }
				},
				rotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '2.75rem'
				}
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme, addUtilities }) {
			matchUtilities(
				{
					mi: (value) => ({
						'margin-inline': value
					}),
					mis: (value) => ({
						'margin-inline-start': value
					}),
					mie: (value) => ({
						'margin-inline-end': value
					}),
					mbl: (value) => ({
						'margin-block': value
					}),
					mbs: (value) => ({
						'margin-block-start': value
					}),
					mbe: (value) => ({
						'margin-block-end': value
					}),
					pi: (value) => ({
						'padding-inline': value
					}),
					pis: (value) => ({
						'padding-inline-start': value
					}),
					pie: (value) => ({
						'padding-inline-end': value
					}),
					pbl: (value) => ({
						'padding-block': value
					}),
					pbs: (value) => ({
						'padding-block-start': value
					}),
					pbe: (value) => ({
						'padding-block-end': value
					})
				},
				{ values: { ...theme('spacing'), auto: 'auto' } }
			),
				matchUtilities(
					{
						'scrollbar-color-thumb': (value) => ({
							'--tw-scrollbar-color-thumb': value
						}),
						'scrollbar-color-track': (value) => ({
							'--tw-scrollbar-color-track': value
						})
					},
					{ values: { ...theme('colors') } }
				),
				addUtilities({
					'.horizontal-tb': {
						writingMode: 'horizontal-tb'
					},
					'.vertical-rl': {
						writingMode: 'vertical-rl'
					},
					'.vertical-lr': {
						writingMode: 'vertical-lr'
					},
					'.sideways-rl': {
						writingMode: 'sideways-rl'
					},
					'.sideways-lr': {
						writingMode: 'sideways-lr'
					},
					'.scrollbar-color': {
						scrollbarColor: 'var(--tw-scrollbar-color-thumb) var(--tw-scrollbar-color-track)'
					}
				})
		})
	]
}

module.exports = config
