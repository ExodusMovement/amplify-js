module.exports = {
	entry: {
		'aws-amplify-analytics.min': './lib-esm/index.js',
	},
	externals: [
		'react-native',
		{
			'@exodus/aws-amplify_cache': 'aws_amplify_cache',
			'@exodus/aws-amplify_core': 'aws_amplify_core',
		},
		'aws-sdk/clients/pinpoint',
		'aws-sdk/clients/kinesis',
		'aws-sdk/clients/firehose',
	],
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
		library: 'aws_amplify_analytics',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: 'this',
		devtoolModuleFilenameTemplate: require('../aws-amplify/webpack-utils')
			.devtoolModuleFilenameTemplate,
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.json'],
	},
	mode: 'production',
	module: {
		rules: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			//{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
		],
	},
};
