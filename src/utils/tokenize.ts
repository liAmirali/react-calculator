export const tokenize = (rawStr: string) => {
  const tokens: (string | number)[] = [];
  const symbols: ReadonlyArray<string> = ["(", ")", "+", "-", "*", "/", "^"];
  const numbers: Readonly<string> = "0123456789";

  let numberToPush = "";
  let isReadingANumber = false;
  let isNegative = false;

  for (let i = 0; i < rawStr.length; i++) {
    if (symbols.includes(rawStr[i])) {
      if (isReadingANumber) {
        // Pushing the number
        tokens.pop();
        if (
          tokens[tokens.length - 1] === "-" &&
          (tokens[tokens.length - 2] === undefined ||
            symbols.includes(tokens[tokens.length - 2] as string))
        ) {
          // So the number is negative
          tokens.pop();
          isNegative = true;
        }
        tokens.push(isNegative ? -Number(numberToPush) : Number(numberToPush));

        numberToPush = "";
        isNegative = false;
        isReadingANumber = false;
      }

      tokens.push(rawStr[i]);
    } else if (numbers.includes(rawStr[i])) {
      numberToPush += rawStr[i];

      // Popping the latest read number and adding the updated one
      if (isReadingANumber) tokens.pop();

      if (
        tokens[tokens.length - 1] === "-" &&
        (tokens[tokens.length - 2] === undefined ||
          symbols.includes(tokens[tokens.length - 2] as string))
      ) {
        // So the number is negative
        tokens.pop();
        isNegative = true;
      }
      tokens.push(isNegative ? -Number(numberToPush) : Number(numberToPush));
      isReadingANumber = true;
    } else if (rawStr[i] === ".") {
      if (numberToPush.includes(".")) throw new Error("Invalid input.");

      numberToPush += ".";
    } else throw new Error("Invalid input.");
  }

  return tokens;
};
