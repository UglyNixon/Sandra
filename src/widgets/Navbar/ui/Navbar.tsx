import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderLink } from 'shared/ui/HeaderLink';
import { SwitcherTheme } from 'widgets/ThemeSwticher';
import ProfileIcon from 'shared/assets/img/profile.svg';
import MenuIcon from 'shared/assets/img/menu.svg';
import { Sidebar } from 'widgets/Sidebar';
import React, { FC, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
}

export const Navbar:FC<NavbarProps> = () => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarToggle = ():void => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Navbar)}>
            <div
                className={classNames(cls.Header)}
            >
                <div className={classNames(cls.Name)}>Sandra Brokane</div>
                <div className={classNames(cls.left, {}, ['d-f', 'f-r'])}>
                    <HeaderLink to="/">Главная</HeaderLink>
                    <HeaderLink to="/services">Services</HeaderLink>
                    <HeaderLink to="about">About</HeaderLink>
                    <HeaderLink to="contact">Contact</HeaderLink>
                </div>
                <div className={classNames(cls.right, {}, ['d-f', 'f-r', 'a-c'])}>
                    <SwitcherTheme />
                    <div className={cls.icon_box}>
                        <div className={cls.icon_box_profile}><ProfileIcon /></div>
                        <button
                            type="button"
                            onClick={sidebarToggle}
                            className={cls.icon_box_menu}
                        >
                            <MenuIcon />
                        </button>
                    </div>

                </div>

            </div>
            <Sidebar collapsed={collapsed} />
        </div>
    );
};
