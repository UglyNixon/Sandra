import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Counter } from 'entities/Counter';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?:string,
}

const MainPage = ({ className }:MainPageProps) => {
    const { t } = useTranslation('main');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t('Главная страница')}
            <hr />

            <Button
                shadow
                theme={[ThemeButton.CLEAR, ThemeButton.BACKGROUND]}
                onClick={() => setIsOpen(true)}
            >
                {t('Модалка')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab accusantium ad, cumque, deleniti eaque earum esse id
                laudantium molestiae nemo nobis obcaecati omnis quibusdam
                quo sapiente sequi sit ut voluptatibus?
            </Modal>
            <hr />
            <Counter />
        </div>
    );
};
export default MainPage;
