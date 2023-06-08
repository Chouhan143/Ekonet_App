import { configureStore } from '@reduxjs/toolkit'
import coinReducer from '../redux/market/coinSlice';
export const store = configureStore({
    reducer:{
        coin:coinReducer,
    }
});