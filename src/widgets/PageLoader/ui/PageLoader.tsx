import cls from './PageLoader.module.scss';

export const PageLoader = () => (
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
