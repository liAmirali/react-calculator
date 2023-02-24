import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  inputValue: string;
  result: string;
  stack: (string | number)[];
  queue: (string | number)[];
};

const initialState: initialStateType = {
  inputValue: "",
  result: "",
  stack: [],
  queue: [],
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = calculatorSlice.actions;

export default calculatorSlice.reducer;
