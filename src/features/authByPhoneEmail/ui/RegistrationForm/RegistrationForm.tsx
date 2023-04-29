import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './RegistrationForm.module.scss';

interface RegistrationFormProps {
    className?:string,
}

export const RegistrationForm = ({ className }:RegistrationFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            Регистрация
        </div>
    );
};
