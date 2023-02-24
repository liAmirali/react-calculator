export const infixToPostfix = (tokens: (string | number)[]) => {
  let postfix = "";

  console.log("tokens", tokens);

  for (let token of tokens) {
    console.log("token:", token);
  }

  return postfix;
};
