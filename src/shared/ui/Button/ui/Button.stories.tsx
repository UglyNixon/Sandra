import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';

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
    theme: ThemeButton.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Clear',
    theme: ThemeButton.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
