import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    income: []
}
export const incomeSlice = createSlice({
    name: "income",
    initialState,
    reducers: {
        addIncome: (state, action) => {
            state.income.push(action.payload)
        }
    }
});

export const {addIncome} = incomeSlice.actions;

export default incomeSlice.reducer;