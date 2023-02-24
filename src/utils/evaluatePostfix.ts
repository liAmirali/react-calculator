import { Stack } from "./Stack";

export const evaluatePostfix = (postfix: (string | number)[]) => {
  const stack = new Stack<number>();

  console.log("postfix:", postfix);

  for (let item of postfix) {
    if (typeof item === "number") {
      stack.push(item);
    } else if (item === "^") {
      const num1 = stack.pop();
      const num2 = stack.pop();

      if (!num1 || !num2) throw new Error("Syntax error!");

      stack.push(Math.pow(num2, num1));
    } else if (item === "*") {
      const num1 = stack.pop();
      const num2 = stack.pop();

      if (!num1 || !num2) throw new Error("Syntax error!");

      stack.push(num2 * num1);
    } else if (item === "/") {
      const num1 = stack.pop();
      const num2 = stack.pop();

      if (!num1 || !num2) throw new Error("Syntax error!");

      stack.push(num2 / num1);
    } else if (item === "+") {
      const num1 = stack.pop();
      const num2 = stack.pop();

      if (!num1 || !num2) throw new Error("Syntax error!");

      stack.push(num2 + num1);
    } else if (item === "-") {
      const num1 = stack.pop();
      const num2 = stack.pop();

      if (!num1 || !num2) throw new Error("Syntax error!");

      stack.push(num2 - num1);
    } else throw new Error("Syntax error!");
  }

  return stack.pop();
};
