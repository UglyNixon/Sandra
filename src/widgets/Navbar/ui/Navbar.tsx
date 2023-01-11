import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {HeaderLink} from "shared/ui/HeaderLink";
import {SwitcherTheme} from "widgets/ThemeSwticher";
import ProfileIcon from 'shared/assets/icons/profile.svg';
import MenuIcon from 'shared/assets/icons/menu.svg';
import {Sidebar} from "widgets/Sidebar";
import React, {useState} from "react";

interface NavbarProps {
    className?:string,
}


export const Navbar = ({className}:NavbarProps) => {
    const [collapsed,setCollapsed] = useState(false)
    const sidebarToggle =():void=>{
        setCollapsed(prev=>!prev)
    }
    return (
        <div className={classNames(cls.Navbar)}>
            <div
            className={classNames(cls.Header)}
            >
            <div className={classNames(cls.Name)}>Sandra Brokane</div>
                <div className={classNames(cls.left,{},['d-f','f-r'])}>
                    <HeaderLink to={'/'}>Home</HeaderLink>
                    <HeaderLink to={'/services'}>Services</HeaderLink>
                    <HeaderLink to={'about'}>About</HeaderLink>
                    <HeaderLink to={'contact'}>Contact</HeaderLink>
                </div>
                <div className={classNames(cls.right,{},['d-f','f-r','a-c'])}>
                    <SwitcherTheme/>
                    <div className={cls.icon_box}>
                        <div className={cls.icon_box_profile}><ProfileIcon/></div>
                        <div onClick={sidebarToggle} className={cls.icon_box_menu}><MenuIcon/></div>
                    </div>

                </div>

            </div>
            <Sidebar  collapsed={collapsed}/>
        </div>
    );
};

