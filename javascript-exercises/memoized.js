function add80ToInput() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log("From cache");
      return cache[n];
    } else {
      console.log("Calculating");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = add80ToInput();
console.log(memoized(20));
console.log(memoized(30));
console.log(memoized(20));
