import './Loading.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface PageLoaderProps {
    className?: string
}

export const Loading = ({ className = '' }: PageLoaderProps) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
