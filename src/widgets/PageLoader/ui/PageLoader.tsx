import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Loading } from 'shared/ui/Loading/Loading'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className = '' }: PageLoaderProps) => {
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loading />
        </div>
    )
}
