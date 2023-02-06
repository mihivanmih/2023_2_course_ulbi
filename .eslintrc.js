module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json']
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: [2, 4, { MemberExpression: 1 }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        "@typescript-eslint/consistent-type-assertions": "warn"
    },
    globals: {
        __IS_DEV__: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
