const core_externals = ['aws-sdk', 'aws-sdk/global', 'react-native', 'url'];

const api_externals = [
	'axios',
	'uuid',
	'zen-observable',
	'@exodus/aws-amplify_cache',
	'@exodus/aws-amplify_core',
];

const auth_externals = [
	'@exodus/aws-amplify_cache',
	'@exodus/aws-amplify_core',
	'amazon-cognito-auth-js',
	'@exodus/amazon-cognito-identity-js',
];

const cache_externals = ['@exodus/aws-amplify_core'];

const xr_externals = ['@exodus/aws-amplify_core'];

const amplify_externals = [
	'@exodus/aws-amplify_api',
	'@exodus/aws-amplify_auth',
	'@exodus/aws-amplify_cache',
	'@exodus/aws-amplify_core',
	'@aws-amplify/xr',
];

const aws_amplify_react = [
	'@exodus/aws-amplify_auth',
	'@exodus/aws-amplify_api',
	'@exodus/aws-amplify_core',
	'@aws-amplify/xr',
	'react',
	'regenerator-runtime/runtime',
	'qrcode.react',
];

const rollup_externals = {
	'@exodus/aws-amplify_api': api_externals,
	'@exodus/aws-amplify_auth': auth_externals,
	'@exodus/aws-amplify': amplify_externals,
	'aws-amplify-react': aws_amplify_react,
	'@exodus/aws-amplify_cache': cache_externals,
	'@exodus/aws-amplify_core': core_externals,
	'@aws-amplify/xr': xr_externals,
};

module.exports = rollup_externals;
