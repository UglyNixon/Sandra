import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

interface LoginModalProps {
    className?:string,
    isOpen:boolean,
    onClose:()=>void,
    login:boolean,
    setLogin:(isLogin:boolean)=>void

}

export const LoginModal = ({
    className, isOpen, onClose, login, setLogin,
}:LoginModalProps) => {
    const isAuth = false;
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
            border
            haveExit
        >

            {login && <LoginForm setLogin={setLogin} />}
            {!login && <RegistrationForm setLogin={setLogin} />}
        </Modal>
    );
};
