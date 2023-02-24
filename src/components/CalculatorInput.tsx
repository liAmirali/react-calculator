import { useDispatch } from "react-redux";
import { setInputValue } from "../store/calculator";
import React, { ChangeEvent } from "react";
import { tokenize } from "../utils/tokenize";
import { infixToPostfix } from "../utils/infixToPostfix";

const CalculatorInput: React.FC = () => {
  // const dispatch = useDispatch();

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();

    console.log(infixToPostfix(tokenize(e.target.value)));
  };

  return (
    <input
      onChange={handleInputValueChange}
      type="text"
      name="calculator-input"
      className="p-4 border-2 border-blue-500 rounded-3xl"
    />
  );
};

export default CalculatorInput;
