import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './LangSwitcher.module.scss'
import type { FC } from 'react'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '', short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(() => {})
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={toggle}
        >
            {t(short ? 'ru' : 'Русский')}
        </Button>
    )
}
