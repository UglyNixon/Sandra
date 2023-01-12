import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?:string,
}

const MainPage = ({ className }:MainPageProps) => {
    const { t } = useTranslation('main');
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t('Главная страница')}
        </div>
    );
};
export default MainPage;
