import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
import svg from '@poppanator/sveltekit-svg'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			},
			plugins: [svg()],
			server: {
				fs: {
					// allow access to import file from root directory
					// allow: ['.']
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true,

			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},

			preserve: ['ld+json']
		})
	]
}

export default config
