import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import { themeMods } from 'shared/lib/themeMods/ThemeMods';
import cls from './Button.module.scss';

export enum ThemeButton{
    PRIMARY='primary',
    CLEAR='clear',
    ELLIPSE='ellipse',
    BACKGROUND='background',
    INV_BACKGROUND='inverted_background',

}
interface ButtonProps extends ButtonHTMLAttributes<any>{
    className?:string,
    theme?:ThemeButton[],
    shadow?:boolean,
    lined?:boolean,
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        shadow,
        lined,
        ...otherProps

    } = props;
    const additional = [className]
        .push(shadow ? 'shadow' : '');

    const mods:Record<string, string|boolean> = {
        ...themeMods(cls, theme),
        [cls.shadow]: shadow,
        [cls.lined]: lined,
    };
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            id={otherProps.id}
            {...otherProps}
        >
            {children}
        </button>
    );
};
