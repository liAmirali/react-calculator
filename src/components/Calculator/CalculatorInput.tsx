import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../store/calculator";
import { FC, ChangeEvent } from "react";
import { IRootState } from "../../store";
import { VALID_INPUT } from "./ButtonValues";
import classNames from "../../utils/classNames";

const CalculatorInput: FC = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: IRootState) => state.calculator.inputValue);
  const errorMessage = useSelector((state: IRootState) => state.calculator.errorMessage);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputValue(
        e.target.value
          .split("")
          .filter((char) => VALID_INPUT.includes(char))
          .join("")
      )
    );
  };

  return (
    <input
      onChange={handleInputValueChange}
      value={errorMessage || inputValue}
      type="text"
      name="calculator-input"
      className={classNames(
        !!errorMessage ? "bg-red-800 border-red-800" : "bg-[#865DFF]",
        "p-4 border-2 text-white outline-none border-[#865DFF] focus:border-white transition-all"
      )}
    />
  );
};

export default CalculatorInput;
