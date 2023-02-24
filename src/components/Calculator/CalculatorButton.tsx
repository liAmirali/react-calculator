import { FC } from "react";
import { useDispatch } from "react-redux";
import { appendToInput, deleteLastChar, evaluateExpression, resetCalculator } from "../../store/calculator";
import classNames from "../../utils/classNames";
import { ButtonValues } from "./ButtonValues";

type propType = {
  text: string;
  className?: string;
};

const CalculatorButton: FC<propType> = (props) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (props.text === ButtonValues.EQUAL_SIGN) dispatch(evaluateExpression());
    else if (props.text === ButtonValues.CLEAR) dispatch(resetCalculator());
    else if (props.text === ButtonValues.BACKSPACE) dispatch(deleteLastChar());
    else dispatch(appendToInput(props.text));
  };

  return (
    <button
      className={classNames(props.className, "bg-[#FFA3FD] border border-[#E384FF] text-[#191825] active:bg-[#E384FF] hover:bg-[#e693ff] transition-all")}
      onClick={handleButtonClick}
    >
      {props.text}
    </button>
  );
};

export default CalculatorButton;
