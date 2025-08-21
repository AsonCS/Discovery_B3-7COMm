import { ReactRenderer } from '@storybook/nextjs-vite'
import { useEffect } from 'react'
import {
    PartialStoryFn,
    StoryContext
} from 'storybook/internal/types'

export type ThemeProps = {
    theme?: 'dark' | 'light'
}

export function themeDecorator(
    Story: PartialStoryFn<ReactRenderer, any>,
    params: StoryContext<ReactRenderer, any>
) {
    useEffect(() => {
        const body =
            document.getElementsByTagName(
                'body'
            )[0]
        if (
            !body.classList.contains('app-theme')
        ) {
            body.classList.add('app-theme')
        }
        if (params.args.theme === 'dark') {
            body.classList.add('app-theme--dark')
        } else {
            body.classList.remove(
                `app-theme--dark`
            )
        }
    })
    return <Story />
}
