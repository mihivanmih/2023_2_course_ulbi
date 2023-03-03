import { useTranslation } from 'react-i18next'
import type { FC } from 'react'
// import { Counter } from 'entities/Counter'
// import { Input } from 'shared/ui/Input/Input'
// import { useState } from 'react'

const AboutPage: FC = () => {
    const { t } = useTranslation('about')

    // const [value, setValue] = useState('')
    //
    // const onChange = (val: string) => {
    //     setValue(val)
    // }

    return (
        <div>
            {t('О сайте')}
            {/* <Counter /> */}
            {/* <Input */}
            {/*    label={'введите пароль'} */}
            {/*    value={value} */}
            {/*    onChange={onChange} */}
            {/* /> */}
        </div>
    )
}

export default AboutPage
