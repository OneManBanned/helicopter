export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', 
  testMatch: ['**/tests/**/*.test.ts'],
  setupFiles: ['jest-canvas-mock']
};
