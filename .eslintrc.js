module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'next/core-web-vitals',
    'standard',
    'plugin:@next/next/recommended'
  ],
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'multiline-ternary': 'off',
    'operator-linebreak': 'off',
    'import/no-absolute-path': [2, { esmodule: false }],
    'quote-props': 0,
    'camelcase': 'off'
  }
}
