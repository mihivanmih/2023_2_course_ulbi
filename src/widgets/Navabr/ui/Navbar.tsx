import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import type { FC } from 'react'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }: NavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={styles.mainLink}>{t('Главная')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.RED}>{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}
