// Using dynamic programming to solve a problem with repetation of steps

let count = 0;
function fibonacci(n) {
    // count++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciWithDynamic() {
  let cache = {};
  return function fib(n) {
    count++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const dp = fibonacciWithDynamic();
console.log(dp(35));
fibonacci(35)
console.log(count);

