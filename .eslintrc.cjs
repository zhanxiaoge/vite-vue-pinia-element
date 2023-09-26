/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'semi': 'error',
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': 'error',
    'brace-style': ['error', 'stroustrup'],
  },
};
