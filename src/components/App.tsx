import { FC } from "react";
import Calculator from "./Calculator/Calculator";

const App: FC = () => {
  return (
    <div className="flex items-center justify-center bg-[#191825] w-screen h-screen">
      <Calculator />
    </div>
  );
};

export default App;
