import copy from 'rollup-plugin-copy';
import glob from 'fast-glob';

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
			{
				name: 'watch-src',
				async buildStart() {
					const files = await glob('src/**/*.{css,html,json}');
					files.forEach((file) => this.addWatchFile(file));
				},
			},
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
