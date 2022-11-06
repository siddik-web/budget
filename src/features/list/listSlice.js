import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addIncome } = listSlice.actions;

export default listSlice.reducer;
