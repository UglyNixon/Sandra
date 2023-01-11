
import {classNames} from "shared/lib/classNames/classNames";

import cls from './Sidebar.module.scss'
import {useState} from "react";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";
interface SidebarProps {
    className?:string,
    collapsed:boolean,
}


export const Sidebar = ({className,collapsed}:SidebarProps) => {


    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
            {!collapsed&&
                <div className={cls.content}>
                    <LangSwitcher/>
                </div>
            }

        </div>
    );
};

