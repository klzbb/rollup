const DOMGlobals = ['window', 'document'];
const NodeGlobals = ['module', 'require'];

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['alloy', 'alloy/typescript'], // https://github.com/AlloyTeam/eslint-config-alloy
  globals: {
    // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
    __HH: 'writable',
  },
  rules: {
    ' no-undef': 'off',
    'no-restricted-syntax': 'off',
    // 禁止使用 var
    'no-var': 'error',
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
};
