module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,html,ico,tsx,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};