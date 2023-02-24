import { ButtonValues } from "./ButtonValues";
import CalculatorButton from "./CalculatorButton";

const Numpad = () => {
  return (
    <div className="grid grid-rows-6 grid-cols-4 w-full h-full">
      {/* Row #0 */}
      <CalculatorButton text={ButtonValues.CLEAR} className="col-span-2 row-span-1" />
      <CalculatorButton text={ButtonValues.BACKSPACE} className="col-span-2 row-span-1" />

      {/* Row #1 */}
      <CalculatorButton text={ButtonValues.LEFT_PARENTHESES} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.RIGHT_PARENTHESES} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.POWER} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.DIVISION} className="col-span-1 row-span-1" />

      {/* Row #2 */}
      <CalculatorButton text={ButtonValues.SEVEN} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.EIGHT} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.NINE} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.MULTIPLICATION} className="col-span-1 row-span-1" />

      {/* Row #3 */}
      <CalculatorButton text={ButtonValues.FOUR} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.FIVE} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.SIX} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.MINUS} className="col-span-1 row-span-1" />

      {/* Row #4 */}
      <CalculatorButton text={ButtonValues.ONE} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.TWO} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.THREE} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.PLUS} className="col-span-1 row-span-1" />

      {/* Row #3 */}
      <CalculatorButton text={ButtonValues.PERIOD} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.ZERO} className="col-span-1 row-span-1" />
      <CalculatorButton text={ButtonValues.EQUAL_SIGN} className="col-span-2 row-span-1" />
    </div>
  );
};

export default Numpad;
