import { Story } from '@storybook/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOptions {
    route?:string
}

export const RouterDecorator = (StoryComponent: Story, options:renderWithRouterOptions) => {
    const { route = '/' } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoryComponent />
        </MemoryRouter>
    );
};
