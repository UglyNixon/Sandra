import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';

describe('SideBar', () => {
    test('collapse false', () => {
        render(<Sidebar collapsed={false} />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
