import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
// Note: You don't need to import eslint-plugin-prettier if you are
// only using the "prettier" config in `compat.extends`.
// If you were using custom Prettier rules, you'd keep this.

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            '.vscode/**',
            // ... (rest of ignores)
        ],
    },
    // ✅ 1. Keep 'prettier' LAST in extends to ensure it disables all formatting rules.
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'plugin:react/recommended',
        'prettier' // <--- IMPORTANT: This must be last
    ),
    {
        // ❌ Remove 'plugins' and 'prettier/prettier' if it's already in 'extends'
        // If you keep the 'prettier' rule, it can conflict with Prettier itself.
        rules: {
            // ❌ DELETE all indentation and basic formatting rules:
            // 'indent': ['error', 4],
            // 'linebreak-style': ['error', 'unix'],
            // 'quotes': ['error', 'single', { avoidEscape: true }],
            // 'semi': ['error', 'always'],
            // 'react/jsx-indent': ['error', 4],
            // 'react/jsx-indent-props': ['error', 4],

            // ✅ Keep necessary overrides and code quality rules:
            '@next/next/no-img-element': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            'react/react-in-jsx-scope': 'off',
            'no-console': ['error', { allow: ['warn', 'error'] }],
        },
    },
];

export default eslintConfig;
