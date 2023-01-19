import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
};
export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    theme: [ThemeButton.CLEAR],
};
export const BackgroundClear = Template.bind({});
BackgroundClear.args = {
    children: 'Clear',
    theme: [ThemeButton.BACKGROUND, ThemeButton.CLEAR],
};
export const InvertedBackgroundClear = Template.bind({});
InvertedBackgroundClear.args = {
    children: 'Clear',
    theme: [ThemeButton.INV_BACKGROUND, ThemeButton.CLEAR],
};
export const BackgroundClearShadow = Template.bind({});
BackgroundClearShadow.args = {
    theme: [ThemeButton.BACKGROUND, ThemeButton.CLEAR],
    children: 'Clear',
    shadow: true,
    lined: false,
};
export const BackgroundClearShadowLined = Template.bind({});
BackgroundClearShadowLined.args = {
    children: 'Clear',
    theme: [ThemeButton.BACKGROUND, ThemeButton.CLEAR],
    shadow: true,
    lined: true,
};

export const DarkBackgroundClearShadowLined = Template.bind({});
DarkBackgroundClearShadowLined.args = {
    children: 'Clear',
    shadow: true,
    lined: false,
    theme: [ThemeButton.BACKGROUND, ThemeButton.CLEAR],
};

DarkBackgroundClearShadowLined.decorators = [ThemeDecorator(Theme.DARK)];
