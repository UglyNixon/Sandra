import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import { useInput } from 'shared/lib/hooks/useInput';
import cls from './RegistrationForm.module.scss';

interface RegistrationFormProps {
    className?:string,
    setLogin:(value:boolean)=>void
}

export const RegistrationForm = ({ className, setLogin }:RegistrationFormProps) => {
    const { t } = useTranslation();
    const email = useInput('', {
        isEmpty: true, isEmail: true, minLength: 8, maxLength: 12,
    });
    const password = useInput('', { isEmpty: true, minLength: 4, maxLength: 24 });
    const secondPassword = useInput('', { isEmpty: true, minLength: 4, maxLength: 24 });
    const phone = useInput('+', { isEmpty: true, minLength: 4, maxLength: 24 });
    const secondName = useInput('', { isEmpty: true, minLength: 2, maxLength: 24 });
    const firstName = useInput('', { isEmpty: true, minLength: 2, maxLength: 24 });
    const buttonHandler = () => {
        setLogin(true);
    };
    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <div className={cls.input}>
                <Input
                    placeholder="Имя*"
                    value={secondName.value}
                    onChange={(e) => secondName.onChange(e)}
                    errorMessage={secondName.errormessage}
                    onBlur={secondName.onBlur}
                />
            </div>
            <div className={cls.input}>
                <Input
                    placeholder="Фамилия*"
                    value={firstName.value}
                    onChange={(e) => firstName.onChange(e)}
                    errorMessage={firstName.errormessage}
                    onBlur={firstName.onBlur}
                />
            </div>
            <div className={cls.input}>
                <Input
                    placeholder="Телефон*"
                    value={phone.value}
                    onChange={(e) => phone.onChange(e)}
                    errorMessage={phone.errormessage}
                    onBlur={phone.onBlur}
                />
            </div>
            <div className={cls.input}>
                <Input
                    placeholder="Email*"
                    value={email.value}
                    onChange={(e) => email.onChange(e)}
                    errorMessage={email.errormessage}
                    onBlur={email.onBlur}
                />
            </div>
            <div className={cls.input}>
                <Input
                    placeholder="Пароль*"
                    value={password.value}
                    onChange={(e) => password.onChange(e)}
                    errorMessage={password.errormessage}
                    onBlur={password.onBlur}
                />
            </div>
            <div className={cls.input}>
                <Input
                    placeholder="Повторите пароль*"
                    value={secondPassword.value}
                    onChange={(e) => secondPassword.onChange(e)}
                    errorMessage={secondPassword.errormessage}
                    onBlur={secondPassword.onBlur}
                />
            </div>
            <div className={cls.button}>
                <Button
                    theme={[ThemeButton.ELLIPSE]}

                >
                    {t('Регистрация')}
                </Button>
            </div>
            <div className={cls.swap} onClick={buttonHandler}>
                {t('Авторизация')}
            </div>
        </div>
    );
};
