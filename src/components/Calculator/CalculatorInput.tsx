import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../store/calculator";
import { FC, ChangeEvent } from "react";
import { IRootState } from "../../store";
import { VALID_INPUT } from "./ButtonValues";

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
      className="p-4 border-2 bg-[#865DFF] text-white outline-none border-[#865DFF] focus:border-white transition-all"
    />
  );
};

export default CalculatorInput;
