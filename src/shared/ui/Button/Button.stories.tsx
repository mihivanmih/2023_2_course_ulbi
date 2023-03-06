import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonSize, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Текст'
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
    children: 'Текст',
    theme: ThemeButton.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    children: 'Текст',
    theme: ThemeButton.CLEAR_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Текст',
    theme: ThemeButton.OUTLINE
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    children: 'Текст',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
    children: 'Текст',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL
}

export const Border = Template.bind({})
Border.args = {
    children: 'Текст',
    theme: ThemeButton.BORDER
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
    children: 'Текст',
    theme: ThemeButton.BACKGROUND
}

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
    children: 'Текст',
    theme: ThemeButton.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: '>',
    theme: ThemeButton.OUTLINE,
    disabled: true
}
