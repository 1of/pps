const path = require('path');
const glob = require('glob');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	context: path.resolve(__dirname, './'),
	entry: {
		'0_vendor': require('./package.json').bundleDependencies,
		'1_app': './entry.js',
		'2_files': toArray(glob.sync('./app/**/*.js'), 'app.module.js'),
	},
	output: {
		filename: '[name].bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, './'),
		compress: true,
		port: 7000,
		stats: 'errors-only',
		watchOptions: { aggregateTimeout: 300, poll: 1000 }
	},
	resolve: {
		alias: {
			'node_modules': path.join(__dirname, 'node_modules'),
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			chunksSortMode: function(a, b) {
				return (a.names[0] > b.names[0])? 1 : -1;
			},
			inject: 'body',
			extraFiles: {
				css: './css/style.css'
			}
		})
	],
	module: {
		rules: []
	}
};

module.exports = config;

function toObject(paths) {
	var result = {};

	paths.forEach(function(path) {
		result[path.split('/').slice(-1)[0]] = path;
	});

	return result;
}

function toArray(paths, ignorePath) {
	var result = [];

	paths.forEach(function(path) {
		if (path.indexOf(ignorePath) !== -1) return;
		result.push(path);
	});

	return result;
}