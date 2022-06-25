module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
    // sourceType: 'module'
  },
  plugins: ['prettier', 'node'],
  extends: ['eslint:recommended'],
  env: {
    node: true
  },
  overrides: [
    {
      files: ['packages/**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json']
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:eslint-comments/recommended'
        // 'plugin:node/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        // "@typescript-eslint/unbound-method": [
        //   // 'warn',
        //   0,
        //   {
        //     ignoreStatic: true,
        //   },
        // ],
      }
    }
  ]
}
