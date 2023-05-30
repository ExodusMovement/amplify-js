const core_externals = ['aws-sdk', 'aws-sdk/global', 'react-native', 'url'];

const api_externals = [
	'axios',
	'uuid',
	'zen-observable',
	'@aws-amplify/cache',
	'@aws-amplify/core',
];

const auth_externals = [
	'@aws-amplify/cache',
	'@aws-amplify/core',
	'amazon-cognito-auth-js',
	'amazon-cognito-identity-js',
];

const cache_externals = ['@aws-amplify/core'];

const xr_externals = ['@aws-amplify/core'];

const amplify_externals = [
	'@aws-amplify/api',
	'@aws-amplify/auth',
	'@aws-amplify/cache',
	'@aws-amplify/core',
	'@aws-amplify/xr',
];

const aws_amplify_react = [
	'@aws-amplify/auth',
	'@aws-amplify/api',
	'@aws-amplify/core',
	'@aws-amplify/xr',
	'react',
	'regenerator-runtime/runtime',
	'qrcode.react',
];

const rollup_externals = {
	'@aws-amplify/api': api_externals,
	'@aws-amplify/auth': auth_externals,
	'aws-amplify': amplify_externals,
	'aws-amplify-react': aws_amplify_react,
	'@aws-amplify/cache': cache_externals,
	'@aws-amplify/core': core_externals,
	'@aws-amplify/xr': xr_externals,
};

module.exports = rollup_externals;
