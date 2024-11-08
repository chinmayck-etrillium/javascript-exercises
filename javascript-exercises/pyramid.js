// My function
const pyramid = (n) => {
  mid = (n - 1) / 2;
  let end;
  let start;
  start = end = mid;
  let str = "";
  for (let i = 0; i <= mid; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= start && j <= end) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
    start--;
    end++;
    str = "";
  }
};

const baseOfPyramid = 7
// pyramid(baseOfPyramid);


// Efiicient Function

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        // Print spaces before stars
        let spaces = ' '.repeat(rows - i);
        
        // Print stars
        let stars = '*'.repeat(2 * i - 1);
        
        // Print the current row
        console.log(spaces + stars);
    }
}

// Call the function to print a pyramid with 5 rows
printPyramid(4);
