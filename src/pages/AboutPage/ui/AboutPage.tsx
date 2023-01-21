import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';

interface AboutPageProps {
    children?:ReactNode
}
const AboutPage:FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('О нас')}
            <Button
                shadow
                theme={[ThemeButton.CLEAR, ThemeButton.BACKGROUND]}
            >
                {t('Стрижка')}
            </Button>
        </div>

    );
};

export default AboutPage;
