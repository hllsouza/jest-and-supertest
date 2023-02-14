/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/e2e/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  // increased timeout due to slow environment
  testTimeout: 15000,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './.reports',
        filename: 'e2e-report.html',
        pageTitle: 'POC SuperTest and Jest - Testes e2e',
      },
    ],
  ],
}