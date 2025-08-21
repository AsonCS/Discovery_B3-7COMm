import type {
    Meta,
    StoryObj
} from '@storybook/nextjs-vite'
import { themeDecorator } from '..'
import { Button } from './index'

import '../../global.css'

const meta = {
    title: 'Design System/Components/Button/Primary',
    component: Button,
    decorators: [themeDecorator],
    args: {
        borderRadius: 'medium',
        label: 'Button',
        size: 'medium',
        theme: 'light'
    },
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryFilled: Story = {
    args: {
        variant: 'primary-filled'
    }
}

export const PrimaryOutlined: Story = {
    args: {
        variant: 'primary-outlined'
    }
}

export const PrimaryText: Story = {
    args: {
        variant: 'primary-text'
    }
}
