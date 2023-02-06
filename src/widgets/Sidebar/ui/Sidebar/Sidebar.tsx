import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <button onClick={onToggle}>toogle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}
