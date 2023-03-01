import { useTranslation } from 'react-i18next'
import type { FC } from 'react'
import { Counter } from 'entities/Counter'

const AboutPage: FC = () => {
    const { t } = useTranslation('about')

    return (
        <div>
            {t('О сайте')}
            <Counter />
        </div>
    )
}

export default AboutPage
