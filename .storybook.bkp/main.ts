import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
    stories: [
        '../**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../**/*.story.@(js|jsx|mjs|ts|tsx)'
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-onboarding',
        '@storybook/addon-docs'
    ],

    framework: {
        name: '@storybook/nextjs-vite',
        options: {}
    },

    staticDirs: ['../public'],

    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum:
                true,
            propFilter: (prop) =>
                prop.parent
                    ? !/node_modules/.test(
                          prop.parent.fileName
                      )
                    : true
        }
    }
}

export default config
