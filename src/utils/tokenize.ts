export const tokenize = (rawStr: string) => {
  const tokens: (string | number)[] = [];
  const symbols: ReadonlyArray<string> = ["(", ")", "+", "-", "*", "/", "^"];
  const numbers: Readonly<string> = "0123456789";

  let numberToPush = "";
  let isReadingANumber = false;

  for (let i = 0; i < rawStr.length; i++) {
    if (rawStr[i] in symbols) {
      if (isReadingANumber) {
        tokens.push(numberToPush);
        isReadingANumber = false;
      }

      tokens.push(rawStr[i]);
    } else if (numbers.includes(rawStr[i])) {
      isReadingANumber = true;
      numberToPush += rawStr[i];
    } else if (rawStr[i] == ".") {
      if (numberToPush.includes(".")) throw new Error("Invalid input.");

      numberToPush += ".";
    }
  }

  return tokens;
};
