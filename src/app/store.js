import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import listReducer from "../features/list/listSlice";
import entryReducer from "../features/entry/entrySlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
    entry: entryReducer,
  },
});
