import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ThemeButton } from './Button'
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

export const Outline = Template.bind({})
Outline.args = {
    children: 'Текст',
    theme: ThemeButton.OUTLINE
}

export const Border = Template.bind({})
Border.args = {
    children: 'Текст',
    theme: ThemeButton.BORDER
}
