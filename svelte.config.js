import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		// add custom alias here
		alias: {
			'$root': './',
			'$routes': './src/routes',
			'$materi': './src/routes/materi'
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
