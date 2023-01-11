
import {classNames} from "shared/lib/classNames/classNames";

import cls from './MainPage.module.scss'
import {useTranslation} from "react-i18next";
interface MainPageProps {
    className?:string,
}


 const MainPage = ({className}:MainPageProps) => {
     const {t,i18n}=useTranslation('main')
    return (
        <div className={classNames(cls.MainPage,{},[className])}>
            {t('Главная страница')}
        </div>
    );
};
export default MainPage

