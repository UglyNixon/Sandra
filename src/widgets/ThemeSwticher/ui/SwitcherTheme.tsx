
import {classNames} from "shared/lib/classNames/classNames";

import cls from './SwitcherTheme.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
interface SwitcherThemeProps {
    className?:string,
}


export const SwitcherTheme = ({className}:SwitcherThemeProps) => {
    const{toggleTheme} =useTheme()
    return (
    <label className={classNames(cls.SwitcherTheme,{},[className])}>
        <input className={classNames(cls.input)} type="checkbox" onChange={toggleTheme}/>
        <span className={classNames(cls.slider,{},[])}></span>
    </label>
    );
};

