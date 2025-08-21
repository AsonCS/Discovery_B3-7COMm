import { ThemeProps } from '..'
import './index.css'

export interface ButtonProps extends ThemeProps {
    borderRadius?: 'small' | 'medium' | 'large'
    label?: string
    onClick?: () => void
    size?: 'small' | 'medium' | 'large'
    // theme?: 'dark' | 'light'
    variant?:
        | 'primary-filled'
        | 'primary-outlined'
        | 'primary-text'
        | 'secondary-filled'
        | 'secondary-outlined'
        | 'secondary-text'
}

export const Button = ({
    borderRadius = 'medium',
    label = 'Button',
    size = 'medium',
    variant = 'primary-filled',
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={[
                'btn',
                `btn--border-radius--${borderRadius}`,
                `btn--size--${size}`,
                `btn--variant--${variant}`
            ].join(' ')}
            {...props}
        >
            {label}
        </button>
    )
}
Button.displayName = 'Button'
