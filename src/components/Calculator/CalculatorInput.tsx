import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../store/calculator";
import { FC, ChangeEvent, useEffect } from "react";
import { IRootState } from "../../store";

const CalculatorInput: FC = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: IRootState) => state.calculator.inputValue);
  const errorMessage = useSelector((state: IRootState) => state.calculator.errorMessage);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  useEffect(() => {
    console.log(inputValue, errorMessage);
  }, []);

  return (
    <input
      onChange={handleInputValueChange}
      value={errorMessage || inputValue}
      type="text"
      name="calculator-input"
      className="p-4 border-2 border-blue-500 rounded-3xl"
    />
  );
};

export default CalculatorInput;
