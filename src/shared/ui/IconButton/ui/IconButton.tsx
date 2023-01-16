import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import cls from './IconButton.module.scss';

export enum IconButtonSize {
    L='size_l',
    M='size_m',
}
interface IconButtonProps {
    className?:string,
    size:IconButtonSize,
    text?:string,
    onClick?:()=>void,
    styleAttr?:string
}

export const IconButton:FC<IconButtonProps> = (props) => {
    const {
        className,
        children,
        size,
        text,
        styleAttr,
        onClick,
        ...otherProps
    } = props;
    const mods:Record<string, boolean> = {
        [cls[size]]: true,
    };
    return (
        <div
            data-testid="iconButton"
            className={classNames(cls.IconButton, mods, [styleAttr])}
        >
            <button
                type="button"
                onClick={onClick}
                className={classNames(cls.button, mods, [])}
            >
                {children}
            </button>
            <div>{text}</div>
        </div>

    );
};
