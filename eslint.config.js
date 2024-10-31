const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const imports = require('eslint-plugin-import');
const prettier = require('eslint-plugin-prettier');

module.exports = [
    {
        files: ['**/*.{ts,tsx}'],
        ignores: ['node_modules/**', 'build/**'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
            'react': react,
            'react-hooks': reactHooks,
            'import': imports,
            'prettier': prettier,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/display-name': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/no-explicit-any': 'error',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: {},
            },
        },
    },
];
