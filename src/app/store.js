import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import incomeReducer from '../features/income/incomeSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        income: incomeReducer,
    }
});