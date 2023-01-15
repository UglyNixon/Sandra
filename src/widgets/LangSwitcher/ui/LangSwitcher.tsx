import { useTranslation } from 'react-i18next';
import React, { FC, useEffect, useState } from 'react';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?:string,
}

export const LangSwitcher:FC<LangSwitcherProps> = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    const toggle = (e:React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
        setLang(e.target.value);
    };
    return (
        <select
            className={cls.LangSwitcher}
            defaultValue={lang}
            onChange={(e) => toggle(e)}
        >
            <option selected={lang === 'RU'}>RU</option>
            <option selected={lang === 'LV'}>LV</option>
            <option selected={lang === 'EN'}>EN</option>
        </select>
    );
};
