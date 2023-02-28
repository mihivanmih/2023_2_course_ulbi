import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRuter } from 'app/providers/router'
import { Navbar } from 'widgets/Navabr'
import { Sidebar } from 'widgets/Sidebar'
import type { FC } from 'react'
import { Suspense } from 'react'

const App: FC = () => {
    const { theme } = useTheme()

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
