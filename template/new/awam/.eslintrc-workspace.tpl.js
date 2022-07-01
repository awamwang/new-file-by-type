// const DOMGlobals = ['window', 'document']
// const NodeGlobals = ['module', 'require']
// const ViteGlobals = ['defineProps']

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    // sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
  ],
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['packages/front/**/*.vue'], // Specify the extension or pattern you want to parse as JSON.
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
        './packages/front/.eslintrc-auto-import.json',
      ],
      env: {
        'vue/setup-compiler-macros': true,
      },
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      },
      globals: { RouterNext: true },
    },
  ],
}
