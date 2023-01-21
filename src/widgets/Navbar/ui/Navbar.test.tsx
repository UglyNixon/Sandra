import { screen } from '@testing-library/react';
import { Navbar } from 'widgets/Navbar';
import { renderComponent } from 'shared/lib/tests/componentRender/renderComponent';

describe('Navbar', () => {
    test('ligth theme', () => {
        renderComponent(<Navbar />, { route: '/main' });
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
