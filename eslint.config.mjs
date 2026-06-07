// eslint.config.mjs
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
	{
		ignores: [
			'build/**',
			'dist/**',
			'public/**',
			'node_modules/**',
			'src-tauri/**',
		],
	},

	js.configs.recommended,
	...tseslint.configs.recommended,

	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-console': 'warn',
			'no-debugger': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
		},
	},
]
