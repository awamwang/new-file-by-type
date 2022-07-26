// const DOMGlobals = ['window', 'document']
// const NodeGlobals = ['module', 'require']
// const ViteGlobals = ['defineProps']

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js', 'node_modules/', 'dist/'],
  parserOptions: {
    ecmaVersion: 2020,
    // sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/**/tsconfig.json']
  },
  plugins: ['@typescript-eslint', 'prettier', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended'
  ],
  env: {
    node: true
  },
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['packages/front/**/*.vue'], // Specify the extension or pattern you want to parse as JSON.
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./packages/front/tsconfig.json']
      },
      extends: ['plugin:vue/vue3-essential', '@vue/typescript/recommended'],
      env: {
        'vue/setup-compiler-macros': true
      },
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
      },
      globals: { RouterNext: true }
    }
  ]
}
