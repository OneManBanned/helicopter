import eslintJs from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    ignores: ['node_modules/**', 'public/js/**'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  languageOptions: {
      globals: {
        HTMLCanvasElement: 'readonly',
        CanvasRenderingContext2D: 'readonly',
        requestAnimationFrame: 'readonly',
        document: 'readonly',
      },
  },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      jest: jestPlugin,
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
        'no-undef': 'off',
    },
  },
];
