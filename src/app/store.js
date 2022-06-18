import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import incomeReducer from '../features/income/incomeSlice';
import entryReducer from '../features/entry/entrySlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        income: incomeReducer,
        entry: entryReducer,
    }
});