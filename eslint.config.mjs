import { nextJsConfig } from './eslint/next.lint.mjs';
import storybook from 'eslint-plugin-storybook';
import mantine from 'eslint-config-mantine';

/** @type {import("eslint").Linter.Config} */
export default [
  ...mantine,
  ...nextJsConfig,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    },
  },
];
