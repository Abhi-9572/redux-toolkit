import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feature/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})

/**
 * configureStore is use to create store
 */