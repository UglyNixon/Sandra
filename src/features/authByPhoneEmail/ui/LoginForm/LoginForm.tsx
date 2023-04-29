import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?:string,
}

export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={cls.input}>
                <Input placeholder="Телефон / Email" />
            </div>
            <div className={cls.input}>
                <Input placeholder="Пароль" />
            </div>
            <div className={cls.button}>
                <Button theme={[ThemeButton.ELLIPSE]}>
                    {t('Войти')}
                </Button>
            </div>
            <div />

        </div>
    );
};
