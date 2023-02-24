import { Queue } from "./Queue";
import { Stack } from "./Stack";

const isLeftAssociative = (operator: string) => {
  const leftAssociative: ReadonlyArray<string> = ["*", "/", "+", "-"];

  return leftAssociative.includes(operator);
};

export const infixToPostfix = (tokens: (string | number)[]) => {
  const symbols: ReadonlyArray<string> = ["^", "*", "/", "+", "-", "(", ")"];

  const precedenceScore = {
    "^": 4,
    "*": 3,
    "/": 3,
    "+": 2,
    "-": 2,
  };
  const queue = new Queue<number | string>();
  const stack = new Stack<number | string>();

  for (let token of tokens) {
    if (typeof token === "number") {
      queue.enqueue(token);
    } else if (symbols.includes(token)) {
      while (true) {
        const topToken = stack.top();
        if (!topToken || topToken === "(") break;

        const operator1Precedence = precedenceScore[token as keyof typeof precedenceScore];
        const operator2Precedence = precedenceScore[topToken as keyof typeof precedenceScore];

        if (
          operator1Precedence < operator2Precedence ||
          (operator1Precedence === operator2Precedence && isLeftAssociative(topToken as string))
        ) {
          queue.enqueue(topToken);
          stack.pop();
        } else break;
      }

      stack.push(token);
    } else if (token === "(") stack.push(token);
    else if (token === ")") {
      while (stack.size() !== 0 && stack.top() !== "(") queue.enqueue(stack.pop()!);

      /* If the stack runs out without finding a left parenthesis, then there are mismatched parentheses. */
      if (stack.size() === 0 || stack.top() !== "(") throw new Error("Mismatched parentheses");
      stack.pop(); // pop the left parenthesis from the operator stack and discard it
    }
  }

  /* After the loop, pop the remaining items from the operator stack into the output queue. */
  while (stack.size() !== 0) {
    if (stack.top() === "(") throw new Error("Mismatched parentheses");
    queue.enqueue(stack.pop()!);
  }

  let postfix: (string | number)[] = [];
  while (queue.size() !== 0) postfix.push(queue.dequeue()!);
  return postfix;
};
