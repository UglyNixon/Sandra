import { useTranslation } from 'react-i18next';
import React, { FC } from 'react';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?:string,
}

export const LangSwitcher:FC<LangSwitcherProps> = () => {
    const { i18n } = useTranslation();
    const toggle = (e:React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };
    return (
        <select className={cls.LangSwitcher} onChange={(e) => toggle(e)}>
            <option>RU</option>
            <option>LV</option>
            <option>EN</option>
        </select>
    );
};
