import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import type { FC } from 'react'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                /
            </div>
        </div>
    )
}
