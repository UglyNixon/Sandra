
import {classNames} from "shared/lib/classNames/classNames";

import cls from './Sidebar.module.scss'
import {useState} from "react";
interface SidebarProps {
    className?:string,
    collapsed:boolean,
}


export const Sidebar = ({className,collapsed}:SidebarProps) => {


    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
        </div>
    );
};

