import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRuter } from 'app/providers/router'
import { Navbar } from 'widgets/Navabr'
import { Sidebar } from 'widgets/Sidebar'
import type { FC } from 'react'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRuter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
