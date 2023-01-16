import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton{
    PRIMARY='primary',
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

    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
        >
            {children}
        </button>
    );
};
