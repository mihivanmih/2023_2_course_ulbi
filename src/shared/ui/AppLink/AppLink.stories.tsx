import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Текст',
    theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Текст',
    theme: AppLinkTheme.SECONDARY
}

export const Red = Template.bind({})
Red.args = {
    children: 'Текст',
    theme: AppLinkTheme.RED
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Текст',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'Текст',
    theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({})
RedDark.args = {
    children: 'Текст',
    theme: AppLinkTheme.RED
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
