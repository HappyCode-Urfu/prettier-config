export const createConfig = (...params) => ({
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  semi: true,
  jsxSingleQuote: true,
  useTabs: false,
  ...params,
});
