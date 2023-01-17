import { classNames } from 'shared/lib/classNames/classNames';

import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { themeMods } from 'shared/lib/themeMods/ThemeMods';
import cls from './HeaderLink.module.scss';

export enum HeaderLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary'
}
interface HeaderLinkProps extends LinkProps{
    className?:string,
    theme:HeaderLinkTheme[]
}

export const HeaderLink:FC<HeaderLinkProps> = (props) => {
    const {
        children,
        className,
        to,
        theme,
        ...otherProps

    } = props;
    const mods = themeMods(cls, theme);

    return (
        <Link to={to} className={classNames(cls.HeaderLink, mods, [className])}>
            {children}
        </Link>
    );
};
