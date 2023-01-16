import { Button } from 'shared/ui/Button/ui/Button';
import { render, screen } from '@testing-library/react';

describe('SideBar', () => {
    test('with Component', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
