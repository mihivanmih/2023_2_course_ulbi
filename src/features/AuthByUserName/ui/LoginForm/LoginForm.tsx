import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className = '' }: LoginFormProps) => {
    const { t } = useTranslation()

    const dispatch = useDispatch()
    const { username, password } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input type="text" className={styles.input} label={t('Введите логин')} autofocus onChange={onChangeUsername} value={username}/>
            <Input type="text" className={styles.input} label={t('Введите пароль')} onChange={onChangePassword} value={password}/>
            <Button className={styles.loginBtn} theme={ThemeButton.OUTLINE}>
                {t('Войти')}
            </Button>
        </div>
    )
})
