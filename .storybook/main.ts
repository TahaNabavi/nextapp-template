import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: '../next.config.ts',
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    const rules = config.module?.rules || [];

    rules.forEach((rule) => {
      if (rule && typeof rule === 'object' && 'use' in rule && Array.isArray(rule.use)) {
        rule.use.forEach((use) => {
          if (use && typeof use === 'object' && 'loader' in use && typeof use.loader === 'string') {
            if (use.loader.includes('css-loader')) {
              if ('options' in use && use.options && typeof use.options === 'object') {
                const options = use.options as any;
                if ('url' in options) {
                  options.url = Boolean(options.url);
                }
                if ('import' in options) {
                  options.import = Boolean(options.import);
                }
              }
            }
          }
        });
      }
    });

    return config;
  },
};
export default config;
