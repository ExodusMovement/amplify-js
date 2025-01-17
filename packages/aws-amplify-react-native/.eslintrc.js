module.exports = {
	env: {
		node: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'plugin:jest/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['src/*.ts', 'src/*.tsx', 'src/API', 'src/Auth', 'src/icons', 'src/Storage'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'jest', 'prettier'],
	rules: {
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
		'@typescript-eslint/no-floating-promises': ['off'],
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_', varsIgnorePattern: '_' }],
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/restrict-template-expressions': ['off'],
		'comma-dangle': ['error', 'only-multiline'],
		'function-paren-newline': 'off',
		'generator-star-spacing': 'off',
		'global-require': 'off',
		'implicit-arrow-linebreak': 'off',
		'import/no-cycle': 'off',
		'import/no-extraneous-dependencies': ['off'],
		'import/prefer-default-export': 'off',
		'jest/expect-expect': ['error', { assertFunctionNames: ['expect*'] }],
		'jest/no-mocks-import': 'off',
		'max-len': [
			'error',
			{
				code: 120,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		'no-alert': 'error',
		'no-console': 'error',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'prefer-destructuring': [
			'error',
			{
				array: false,
				object: true,
			},
		],
		'prettier/prettier': ['error', {'endOfLine': 'auto'}],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-wrap-multilines': ['error', { declaration: 'ignore' }],
		'react/no-array-index-key': 'off',
		'react/prop-types': 'off',
		'react/require-default-props': [2, { ignoreFunctionalComponents: true }],
		'react/static-property-placement': ['error', 'static public field'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
	},
};
