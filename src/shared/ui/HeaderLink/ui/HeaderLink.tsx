
import {classNames} from "shared/lib/classNames/classNames";

import cls from './HeaderLink.module.scss'
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum HeaderLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary'
}
interface HeaderLinkProps extends LinkProps{
    className?:string,
    theme?:HeaderLinkTheme
}


export const HeaderLink:FC<HeaderLinkProps> = (props) => {
const {
    children,
    className,
    to,
    theme=HeaderLinkTheme.PRIMARY,
    ...otherProps

}=props
    const mods:Record<string, boolean> = {
        [cls[theme]]: true,
    };
    return (
        <Link to={to} className={classNames(cls.HeaderLink,mods,[className])}>
            {children}
        </Link>
    );
};

