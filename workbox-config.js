module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ts,html,scss,ico}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};