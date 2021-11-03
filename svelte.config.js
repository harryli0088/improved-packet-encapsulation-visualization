import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

  adapter: static_adapter({
    // default options are shown
    pages: 'build',
    assets: 'build',
    fallback: null
  }),
	kit: {
    base: process.env.NODE_ENV==="production" ? '/improved-packet-encapsulation-visualization' : undefined,
    // hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
