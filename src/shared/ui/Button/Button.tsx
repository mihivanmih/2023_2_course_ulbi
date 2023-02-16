import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export const enum ThemeButton {
    CLEAR = 'clear',
    BORDER = 'border',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className = '', children, theme = '', ...otherPropps } = props

    return (
        <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherPropps}>
            {children}
        </button>
    )
}
