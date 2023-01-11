
import {classNames} from "shared/lib/classNames/classNames";

import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton{
    CLEAR='clear'
}
interface ButtonProps extends ButtonHTMLAttributes<any>{
    className?:string,
    theme?:ThemeButton
}


export const Button:FC = (props:ButtonProps) => {
const {
    className,
    children,
    theme,
    ...otherProps

}=props
    return (
        <button className={classNames(cls.Button,{[cls[theme]]:true},[className])}>
            {children}
        </button>
    );
};

