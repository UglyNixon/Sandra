import { screen } from '@testing-library/react';
import { Navbar } from 'widgets/Navbar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
    test('ligth theme', () => {
        renderWithTranslation(<Navbar />, { wrapper: BrowserRouter });
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
