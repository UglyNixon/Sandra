
import {classNames} from "shared/lib/classNames/classNames";
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss'
import React from "react";
interface LangSwitcherProps {
    className?:string,
}


export const LangSwitcher = ({className}:LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle =(e:React.ChangeEvent<HTMLSelectElement>) =>{
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    return (
        <select className={cls.LangSwitcher} onChange={(e)=>toggle(e)}>
            <option>RU</option>
            <option>LV</option>
            <option>EN</option>
        </select>
    );
}



