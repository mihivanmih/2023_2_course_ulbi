import { createSlice } from '@reduxjs/toolkit'
import type { UserSchema } from 'entities/User'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice