import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entry: []
}
export const entrySlice = createSlice({
    name: "entry",
    initialState,
    reducers: {
        addEntry: (state, action) => {
            state.entry.push(action.payload)
        }
    }
});

export const {addEntry} = entrySlice.actions;

export default entrySlice.reducer;