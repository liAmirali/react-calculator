import { FC } from "react";
import CalculatorInput from "./CalculatorInput";
import Numpad from "./Numpad";

const Calculator: FC = () => {
  return (
    <div className="w-64 h-64 flex flex-col">
      <CalculatorInput />
      <Numpad />
    </div>
  );
};

export default Calculator;
