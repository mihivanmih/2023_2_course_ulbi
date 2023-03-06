import type { Story } from '@storybook/react'
import 'app/styles/index.scss'
import type { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import type { DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
)
