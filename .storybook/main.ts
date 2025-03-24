import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
