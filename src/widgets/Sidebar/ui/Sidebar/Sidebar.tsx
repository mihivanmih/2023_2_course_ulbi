import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import type { FC } from 'react'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about20x20.svg'
import MainIcon from 'shared/assets/icons/main20x20.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid={'sidebar'}
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                className={styles.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                <div >
                    <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={styles.item}>
                        <AboutIcon className={styles.icon}/>
                        <span className={styles.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>
                <div className={styles.item}>
                    <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={styles.item}>
                        <MainIcon className={styles.icon}/>
                        <span className={styles.link}>
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </div>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.lang} short={collapsed}/>
            </div>
        </div>
    )
}
