import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?:string,
}

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={cls.PageLoader}>
        <div className={cls.loader}>
            <div className={cls.face}>
                <div className={cls.circle} />
            </div>
            <div className={cls.face}>
                <div className={cls.circle} />
            </div>
        </div>
    </div>

);
