import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export const enum ThemeButton {
    CLEAR = 'clear',
    BORDER = 'border',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className = '', children, theme = '', square = false, size = ButtonSize.M, ...otherPropps } = props

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true
    }

    return (
        <button className={classNames(styles.Button, mods, [className])} {...otherPropps}>
            {children}
        </button>
    )
}
