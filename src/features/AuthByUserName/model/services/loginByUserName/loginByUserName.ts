import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { User } from 'entities/User'

interface loginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
