function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = array[i];
    for (j = i; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
      }
    }
    array[i] = smallest;
  }
}

let myArray = [2, 7, 6, 3, 1, 0];
console.log(selectionSort(myArray));
