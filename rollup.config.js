import copy from 'rollup-plugin-copy';

export default [
	{
		input: 'src/background.js',
		output: {
			file: 'build/background.js',
			format: 'iife',
		},
		plugins: [
			copy({
				targets: [{ src: 'src/manifest.json', dest: 'build' }],
			}),
		],
	},
	{
		input: 'src/marker.js',
		output: {
			file: 'build/marker.js',
			format: 'iife',
		},
		plugins: [
			copy({
				targets: [{ src: 'src/marker.css', dest: 'build' }],
			}),
		],
	},
	{
		input: 'src/settings.js',
		output: {
			file: 'build/settings.js',
			format: 'iife',
		},
		plugins: [
			copy({
				targets: [
					{ src: 'src/settings.css', dest: 'build' },
					{ src: 'src/settings.html', dest: 'build' },
					{
						src: 'node_modules/jsoneditor/dist/jsoneditor.min.css',
						dest: 'build',
					},
					{
						src: 'node_modules/jsoneditor/dist/jsoneditor.min.js',
						dest: 'build',
					},
					{
						src: 'node_modules/jsoneditor/dist/jsoneditor.min.js',
						dest: 'build',
					},
					{
						src: 'node_modules/jsoneditor/dist/img/jsoneditor-icons.svg',
						dest: 'build/img',
					},
				],
			}),
		],
	},
];
