module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    // sourceType: 'module'
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
}
