import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import { useInput } from 'shared/lib/hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from 'features/authByPhoneEmail/model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?:string,
    setLogin:(isLogin:boolean)=>void,

}

export const LoginForm = memo(({ className, setLogin }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState)
    const onChangeUserLogin = useCallback((value:string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);
    const onChangeUserPassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const email = useInput(loginForm.login || '', {
        isEmpty: true, minLength: 8, maxLength: 12,
    });
    const swapHandler = () => {
        setLogin(false);
    };
    const password = useInput(loginForm.password || '', { isEmpty: true, minLength: 4, maxLength: 24 });
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={cls.input}>
                <Input
                    placeholder="Телефон / Email"
                    value={email.value}
                    onChange={(e) => {
                        onChangeUserLogin(e.target.value);
                        return email.onChange(e);
                    }}
                    errorMessage={email.errormessage}
                    onBlur={email.onBlur}
                />
            </div>
            <div className={cls.input}>
                <Input
                    placeholder="Пароль*"
                    onChange={(e) => {
                        onChangeUserPassword(e.target.value);
                        return password.onChange(e);
                    }}
                    value={password.value}
                    errorMessage={password.errormessage}
                    onBlur={password.onBlur}
                />
            </div>
            <div className={cls.button}>
                <Button
                    theme={[ThemeButton.ELLIPSE]}

                >
                    {t('Войти')}
                </Button>
            </div>
            <div className={cls.swap} onClick={swapHandler}>
                {t('Регистрация')}
            </div>

        </div>
    );
});
