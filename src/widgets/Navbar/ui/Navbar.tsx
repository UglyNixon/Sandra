import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderLink } from 'shared/ui/HeaderLink';
import { SwitcherTheme } from 'widgets/ThemeSwticher';
import ProfileIcon from 'shared/assets/img/profile.svg';
import MenuIcon from 'shared/assets/img/menu.svg';
import { Sidebar } from 'widgets/Sidebar';
import React, { FC, useState } from 'react';
import { IconButton, IconButtonSize } from 'shared/ui/IconButton';
import { useTranslation } from 'react-i18next';
import { HeaderLinkTheme } from 'shared/ui/HeaderLink/ui/HeaderLink';
import { UserMenu } from 'features/UserMenu/ui/UserMenu';
import cls from './Navbar.module.scss';

interface NavbarProps {
}

export const Navbar:FC<NavbarProps> = () => {
    // delete this
    const auth = !true;
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
    const [userCollapsed, setUserCollapsed] = useState(true);
    const sidebarToggle = ():void => {
        if (!userCollapsed) { setUserCollapsed(true); }
        setSidebarCollapsed((prev) => !prev);
    };
    const userToggle = ():void => {
        if (!sidebarCollapsed) { setSidebarCollapsed(true); }
        setUserCollapsed((prev) => !prev);
    };
    const { t } = useTranslation('navbar');
    return (
        <div
            data-testid="navbar"
            className={classNames(cls.Navbar)}
        >
            <Sidebar collapsed={sidebarCollapsed} />
            <UserMenu collapsed={userCollapsed} auth={auth} />
            <div
                className={classNames(cls.Header)}
            >
                <div className={classNames(cls.Name)}>{t('Sandra Brokane')}</div>
                <div className={classNames(cls.left, {}, ['d-f', 'f-r'])}>
                    <HeaderLink theme={[HeaderLinkTheme.PRIMARY]} to="/">{t('Главная')}</HeaderLink>
                    <HeaderLink theme={[HeaderLinkTheme.PRIMARY]} to="/services">{t('Услуги')}</HeaderLink>
                    <HeaderLink theme={[HeaderLinkTheme.PRIMARY]} to="about">{t('О нас')}</HeaderLink>
                    <HeaderLink theme={[HeaderLinkTheme.PRIMARY]} to="contact">{t('Контакты')}</HeaderLink>
                </div>
                <div className={classNames(cls.right, {}, ['d-f', 'f-r', 'a-c'])}>
                    <SwitcherTheme />
                    <div className={cls.icon_box}>
                        <IconButton
                            size={IconButtonSize.M}
                            onClick={userToggle}
                            styleAttr="ml-1"
                        >
                            <ProfileIcon />
                        </IconButton>
                        <IconButton
                            onClick={sidebarToggle}
                            size={IconButtonSize.M}
                            styleAttr="ml-3"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>

                </div>

            </div>

        </div>
    );
};
