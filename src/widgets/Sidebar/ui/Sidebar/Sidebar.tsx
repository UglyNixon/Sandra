import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'app/providers/ThemeProvider';

import GpsIcon from 'shared/assets/img/gps.svg';
import PhoneIcon from 'shared/assets/img/phone.svg';
import MailIcon from 'shared/assets/img/mail.svg';
import { useEffect, useState } from 'react';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?:string,
    collapsed:boolean,

}

export const Sidebar = ({
    className, collapsed,
}:SidebarProps) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const dark = theme === 'app_dark_theme' ? 'dark-button' : '';
    const relocateToMap = () => {
        window.open('https://goo.gl/maps/u9MbCG3YZfqaVEmc7', '_blank');
    };
    const phoneCall = () => {
        window.open('tel:20-23-7080', '_self');
    };
    const sendMail = () => {
        window.open('mailto:Brokan.qwe@gmail.com', '_self');
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={[cls.content, !collapsed && cls.show].join((' '))}>
                {!collapsed && <LangSwitcher />}
                <hr className={cls.hr} />
                <div className={cls.butContainer}>
                    <div className={cls.butContainer}>
                        <Button
                            id={dark}
                            shadow
                            theme={[
                                ThemeButton.CLEAR,
                                theme === 'app_dark_theme'
                                    ? ThemeButton.INV_BACKGROUND
                                    : ThemeButton.BACKGROUND]}
                            className={cls.buttons}
                        >
                            {t('Услуги')}
                        </Button>
                        <Button
                            id={dark}
                            shadow
                            theme={[
                                ThemeButton.CLEAR,
                                theme === 'app_dark_theme'
                                    ? ThemeButton.INV_BACKGROUND
                                    : ThemeButton.BACKGROUND]}
                            className={cls.buttons}
                        >
                            {t('Акции')}
                        </Button>
                        <Button
                            id={dark}
                            shadow
                            theme={[
                                ThemeButton.CLEAR,
                                theme === 'app_dark_theme'
                                    ? ThemeButton.INV_BACKGROUND
                                    : ThemeButton.BACKGROUND]}
                            className={cls.buttons}
                        >
                            {t('О Салоне')}
                        </Button>
                        <Button
                            id={dark}
                            shadow
                            theme={[
                                ThemeButton.CLEAR,
                                theme === 'app_dark_theme'
                                    ? ThemeButton.INV_BACKGROUND
                                    : ThemeButton.BACKGROUND]}
                            className={cls.buttons}
                        >
                            {t('Контакты')}
                        </Button>
                    </div>
                    <hr className={cls.hr} />
                    <div className={`${cls.butContainer} mt-3`}>
                        <div className={cls.social}>
                            {t('Социальные сети')}
                        </div>
                        <Button
                            id={dark}
                            shadow
                            theme={[
                                ThemeButton.CLEAR,
                                theme === 'app_dark_theme'
                                    ? ThemeButton.INV_BACKGROUND
                                    : ThemeButton.BACKGROUND]}
                            className={cls.buttons}
                        >
                            {t('Facebook')}
                        </Button>
                        <Button
                            id={dark}
                            shadow
                            theme={[
                                ThemeButton.CLEAR,
                                theme === 'app_dark_theme'
                                    ? ThemeButton.INV_BACKGROUND
                                    : ThemeButton.BACKGROUND]}
                            className={cls.buttons}
                        >
                            {t('Instagram')}
                        </Button>
                        <Button
                            id={dark}
                            shadow
                            theme={[
                                ThemeButton.CLEAR,
                                theme === 'app_dark_theme'
                                    ? ThemeButton.INV_BACKGROUND
                                    : ThemeButton.BACKGROUND]}
                            className={cls.buttons}
                        >
                            {t('Twitter')}
                        </Button>
                    </div>
                    <hr className={cls.hr} />
                    <div className={`${cls.butContainer} mt-3`}>
                        <div className={cls.social}>
                            {t('Контакты')}
                            :
                        </div>
                        <div className={cls.icons}>
                            <GpsIcon className={cls.darkIcon} />
                            <Button
                                id={dark}
                                shadow
                                theme={[
                                    ThemeButton.CLEAR,
                                    theme === 'app_dark_theme'
                                        ? ThemeButton.INV_BACKGROUND
                                        : ThemeButton.BACKGROUND]}
                                className={cls.buttons}
                                onClick={relocateToMap}
                            >
                                {t('Nometnu 47 Riga-1002')}
                            </Button>
                        </div>
                        <div className={cls.icons}>
                            <PhoneIcon className={cls.darkIcon} />
                            <Button
                                id={dark}
                                shadow
                                theme={[
                                    ThemeButton.CLEAR,
                                    theme === 'app_dark_theme'
                                        ? ThemeButton.INV_BACKGROUND
                                        : ThemeButton.BACKGROUND]}
                                className={cls.buttons}
                                onClick={phoneCall}
                            >
                                {t('+371 20 23 70 80')}
                            </Button>
                        </div>
                        <div className={cls.icons}>
                            <MailIcon className={cls.darkIcon} />
                            <Button
                                id={dark}
                                shadow
                                theme={[
                                    ThemeButton.CLEAR,
                                    theme === 'app_dark_theme'
                                        ? ThemeButton.INV_BACKGROUND
                                        : ThemeButton.BACKGROUND]}
                                className={cls.buttons}
                                onClick={sendMail}
                            >
                                {t('Brokan.qwe@gmail.com')}
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
