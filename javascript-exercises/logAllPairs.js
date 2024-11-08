//log all pairs
const arr = [1, 2, 3, 4, 5];
const logAllPairs = (arr) => {
  count = 0;
  arr.forEach((i) => {
    arr.forEach((j) => {
      console.log(i, j);
      count++;
    });
  });
  console.log("Count:", count);
};

logAllPairs(arr);
