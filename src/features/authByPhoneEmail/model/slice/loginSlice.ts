import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';

const initialState :LoginSchema = {
    login: '',
    password: '',
    error: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action:PayloadAction<string>) => {
            state.login = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
        setError: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
        setIsLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
