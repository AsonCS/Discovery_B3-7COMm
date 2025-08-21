import type {
    Meta,
    StoryObj
} from '@storybook/nextjs-vite'
import { themeDecorator } from '..'
import { Button } from './index'

import '../../global.css'

const meta = {
    title: 'Design System/Components/Button/Secondary Dark',
    component: Button,
    decorators: [themeDecorator],
    args: {
        borderRadius: 'medium',
        label: 'Button',
        size: 'medium',
        theme: 'dark'
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
        variant: 'secondary-filled'
    }
}

export const PrimaryOutlined: Story = {
    args: {
        variant: 'secondary-outlined'
    }
}

export const PrimaryText: Story = {
    args: {
        variant: 'secondary-text'
    }
}
