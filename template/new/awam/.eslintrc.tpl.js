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
    // 'prettier/prettier': 'error',
    semi: ['error', 'never'],
    'no-extra-semi': 'error',
    quotes: ['error', 'single'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    // 控制逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],
    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],
    indent: ['error', 2, { SwitchCase: 2 }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
