import { render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { BrowserRouter } from 'react-router-dom';

export function renderWithTranslation(component:ReactNode, options:RenderOptions) {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>,
        options,
    );
}