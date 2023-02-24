import { createSlice } from "@reduxjs/toolkit";
import { infixToPostfix } from "../utils/infixToPostfix";
import { tokenize } from "../utils/tokenize";
import { evaluatePostfix } from "../utils/evaluatePostfix";

type initialStateType = {
  inputValue: string;
  errorMessage: string;
};

const initialState: initialStateType = {
  inputValue: "",
  errorMessage: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    appendToInput(state, action) {
      state.inputValue += action.payload;
    },
    evaluateExpression(state) {
      try {
        const postfix = infixToPostfix(tokenize(state.inputValue));
        const result = evaluatePostfix(postfix);

        if (!result) throw new Error("Syntax error!");
        state.inputValue = result.toString();
      } catch (e) {
        if (typeof e === "string") {
          state.errorMessage = e;
        } else if (typeof e === "object" && "message" in e!) {
          state.errorMessage = e.message as string;
        }
      }
    },
    resetCalculator(state) {
      state.inputValue = "";
      state.errorMessage = "";
    },
    deleteLastChar(state) {
      state.inputValue = state.inputValue.slice(0, state.inputValue.length - 1);
    },
  },
});

export const { setInputValue, appendToInput, evaluateExpression, resetCalculator, deleteLastChar } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
