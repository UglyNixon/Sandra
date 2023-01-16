import { render, screen } from '@testing-library/react';
import { IconButton, IconButtonSize } from 'shared/ui/IconButton';
import MenuIcon from 'shared/assets/img/menu.svg';

describe('IconButtons', () => {
    test('Size_M', () => {
        render(<IconButton size={IconButtonSize.M}><MenuIcon /></IconButton>);
        expect(screen.getByTestId('iconButton')).toBeInTheDocument();
    });
    screen.debug();
});
