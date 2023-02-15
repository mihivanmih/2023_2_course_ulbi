import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const { className = '', children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
