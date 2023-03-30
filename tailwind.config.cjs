const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {},
		fontFamily: {
			// custom font family here
			// 'sans': ['arial', 'sans-serif'],
			// 'heading': ['lato', 'sans-serif']
		},
		colors: {
			// custom color here
			bsigreen: 'rgba(0,163,157)',
			bsilgreen: 'hsl(177, 100%, 35%)',
			bsiyellow: 'rgba(248,173,60)',
			bsiwhite: 'rgba(255,255,255)',
			bsigrey: 'rgba(136,139,141)'
		}
	},

	// flowbite stuff
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
