function recursionFactorial(val) {
  if (val <= 1) {
    return 1;
  } else {
    return val * recursionFactorial(val - 1);
  }
}

function fibonacci(val) {
  if (val < 2) {
    return val;
  }
  return fibonacci(val - 1) + fibonacci(val - 2);
}

console.log(fibonacci(6));
