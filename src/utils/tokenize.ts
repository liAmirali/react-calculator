export const tokenize = (rawStr: string) => {
  const tokens: (string | number)[] = [];
  const symbols: ReadonlyArray<string> = ["(", ")", "+", "-", "*", "/", "^"];
  const numbers: Readonly<string> = "0123456789";

  let numberToPush = "";
  let isReadingANumber = false;

  for (let i = 0; i < rawStr.length; i++) {
    if (symbols.includes(rawStr[i])) {
      if (isReadingANumber) {
        tokens.pop();
        tokens.push(+numberToPush);
        numberToPush = "";
        isReadingANumber = false;
      }

      tokens.push(rawStr[i]);
    } else if (numbers.includes(rawStr[i])) {
      numberToPush += rawStr[i];

      // Popping the latest read number and adding the updated one
      if (isReadingANumber) tokens.pop();
      tokens.push(+numberToPush);
      isReadingANumber = true;
    } else if (rawStr[i] === ".") {
      if (numberToPush.includes(".")) throw new Error("Invalid input.");

      numberToPush += ".";
    } else throw new Error("Invalid input.");
  }

  return tokens;
};
