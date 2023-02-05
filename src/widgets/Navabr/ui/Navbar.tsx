import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={styles.mainLink}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.RED}>О сайте</AppLink>
            </div>
        </div>
    )
}