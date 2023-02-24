import { configureStore } from "@reduxjs/toolkit";

import calculatorReducers from "./calculator";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducers,
  },
});
