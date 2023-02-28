import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={() => { setIsAuthModal(false) }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda distinctio dolorem modi nesciunt nihil nulla quasi ratione sint, veritatis. Deleniti, ea unde. Accusantium consequuntur cumque, minus neque quo saepe?
            </Modal>
        </div>
    )
}
