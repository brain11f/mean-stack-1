'use strict';
var webpack = require('webpack'),
		path = require('path');

// PATHS
var PATHS = {
	app: __dirname + '/app',
	bower: __dirname + '/app/bower_components'
};

var bourbon = require('node-bourbon').includePaths;

module.exports = {
	context: PATHS.app,
	entry: {
		app: ['webpack/hot/dev-server', './core/bootstrap.js']
	},
	output: {
		path: PATHS.app,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.css$/,
				loader: "css-loader!autoprefixer-loader"
			},
			{
				test: /\.scss$/,
				loader: "css-loader!sass-loader"
			},
			{ 
				test: /\.scss$/, 
				loader: "style!css!sass?includePaths[]=" + JSON.stringify(bourbon)
			}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};