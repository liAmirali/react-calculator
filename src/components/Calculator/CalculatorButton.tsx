import { FC } from "react";
import { useDispatch } from "react-redux";
import { appendToInput, evaluateExpression, resetCalculator } from "../../store/calculator";
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
    else dispatch(appendToInput(props.text));
  };

  return (
    <button
      className={classNames(props.className, "border border-red-200")}
      onClick={handleButtonClick}
    >
      {props.text}
    </button>
  );
};

export default CalculatorButton;