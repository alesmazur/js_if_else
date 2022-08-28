const posiSum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number ";
  }

  if (a <= 0 || b <= 0) {
    return "One of the arguments is not positive";
  }

  return a + b;
};
posiSum("abc", -5);
