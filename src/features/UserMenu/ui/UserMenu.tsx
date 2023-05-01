import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ForwardedRef,
    forwardRef, Ref, useCallback, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/authByPhoneEmail';

import cls from './UserMenu.module.scss';

interface UserMenuProps{
    className?:string,
    collapsed:boolean,
    auth:boolean,
    id?:string
}

export const UserMenu = forwardRef(({
    className, collapsed, auth, id,
}:UserMenuProps, fRef:ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [loginIsOpen, setLoginIsOpen] = useState({ open: false, login: false });
    const onCloseLoginModal = useCallback(() => {
        setLoginIsOpen({ ...loginIsOpen, open: false });
    }, [loginIsOpen]);
    const showLoginForm = useCallback(() => {
        setLoginIsOpen({ login: true, open: true });
    }, []);
    const showRegistForm = useCallback(() => {
        setLoginIsOpen({ login: false, open: true });
    }, []);
    const dark = theme === 'app_dark_theme' ? 'dark-button' : '';
    return (
        <div
            ref={fRef}
            id={id}
            data-testid="userMenu"
            className={classNames(cls.UserMenu, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={[cls.content, !collapsed && cls.show].join((' '))}>
                <LoginModal
                    login={loginIsOpen.login}
                    isOpen={loginIsOpen.open}
                    onClose={onCloseLoginModal}
                    setLogin={(isLogin:boolean) => setLoginIsOpen({ login: isLogin, open: true })}
                />

                {auth
                    ? (
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
                                {t('Профиль')}
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
                                {t('Выйти')}
                            </Button>
                        </div>
                    )
                    : (
                        <div className={cls.butContainer}>
                            <Button
                                id={dark}
                                onClick={showLoginForm}
                                shadow
                                theme={[
                                    ThemeButton.CLEAR,
                                    theme === 'app_dark_theme'
                                        ? ThemeButton.INV_BACKGROUND
                                        : ThemeButton.BACKGROUND]}
                                className={cls.buttons}
                            >
                                {t('Войти')}
                            </Button>
                            <Button
                                id={dark}
                                onClick={showRegistForm}
                                shadow
                                theme={[
                                    ThemeButton.CLEAR,
                                    theme === 'app_dark_theme'
                                        ? ThemeButton.INV_BACKGROUND
                                        : ThemeButton.BACKGROUND]}
                                className={cls.buttons}
                            >
                                {t('Зарегестрироваться')}
                            </Button>
                        </div>
                    )}

            </div>
        </div>
    );
});
function setState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}
