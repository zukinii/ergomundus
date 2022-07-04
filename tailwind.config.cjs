const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#5C87FF',
				gray: {
					bg: '#E2E2E2'
				}
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem'
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
