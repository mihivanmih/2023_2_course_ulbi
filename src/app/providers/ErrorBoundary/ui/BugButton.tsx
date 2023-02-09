import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface BugButtonProps {
    className?: string
}

// компонент для тестирования ErrorBoundary
export const BugButton = ({ className = '' }: BugButtonProps) => {
    const [error, setError] = useState(false)

    const { t } = useTranslation()

    const throwEror = () => { setError(true) }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button className={classNames('', {}, [className])}
            onClick={throwEror}
            theme={ThemeButton.BORDER}
        >
            {t('throw error')}
        </Button>
    )
}
