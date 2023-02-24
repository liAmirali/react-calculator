import { useDispatch } from "react-redux";
import { setInputValue } from "../store/calculator";
import React, { FormEvent } from "react";

const CalculatorInput: React.FC = () => {
  const dispatch = useDispatch();

  const handleInputValueChange = (e: FormEvent) => {
    dispatch(setInputValue(e));
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
