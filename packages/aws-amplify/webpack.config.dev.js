var config = require('./webpack.config.js');

var entry = {
	'@exodus/aws-amplify': './lib-esm/index.js',
};
module.exports = Object.assign(config, { entry, mode: 'development' });
