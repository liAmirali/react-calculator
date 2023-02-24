import { FC } from "react";
import CalculatorInput from "./CalculatorInput";
import Numpad from "./Numpad";

const Calculator: FC = () => {
  return (
    <div className="w-96 h-96 flex flex-col bg-white shadow-lg shadow-slate-700">
      <CalculatorInput />
      <Numpad />
    </div>
  );
};

export default Calculator;
