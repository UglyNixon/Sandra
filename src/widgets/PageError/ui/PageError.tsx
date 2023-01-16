import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import sadCat from 'shared/assets/img/sadCat.jpg';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?:string,
}
export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div
            className={classNames(cls.PageError, {}, [className])}
        >
            <img alt="sadCat" src={`${sadCat}`} className={cls.img} />
            <div className={cls.top}>
                <p className={cls.p}>{t('Ooooops')}</p>

            </div>
            <div className={cls.bottom}>
                <button
                    className={cls.button}
                    type="button"
                    onClick={reloadPage}
                >
                    {t('Обновить')}
                </button>
                <p>
                    {t('Произошла непредвиденная ошибка')}
                    {' :('}
                </p>
            </div>

        </div>
    );
};
