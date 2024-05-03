import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;
const {BRANCH} = process.env;
const {SERVER} = process.env;

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? `https://${BRANCH}.${SERVER}.amplifyapp.com/`
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '' : undefined,

	// output: 'server',

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	trailingSlash: 'always',

	server: {
		/* Dev. server only */
		port: DEV_PORT,
	},

	integrations: [
		//
		sitemap(),
		tailwind(),
	],

	vite: {
    build: {
      rollupOptions: {
				external:
					[
						"shiki/themes/hc_light.json"
					]
			}
		}
	}
});
