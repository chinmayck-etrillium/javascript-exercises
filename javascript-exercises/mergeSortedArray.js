/*
[1,5,30,80,98] [7,99] [1,5,7,30,80,99]
*/
const mergeSortedArray = (arr1, arr2) => {

  if (!arr1 && !arr2) {
    return 0;

  } else if (!arr1 || !arr2) {

    return arr1 + arr2;

  } else {

    const shortArr = arr1.length <= arr2.length ? arr1 : arr2;
    const longArr = arr1.length >= arr2.length ? arr1 : arr2;
    let flag = false;
    for (let i = 0; i < shortArr.length; i++) {
      for (let j = 0; j < longArr.length - 1; j++) {

        if (shortArr[i] >= longArr[j] && shortArr[i] <= longArr[j + 1]) {

          longArr.splice(j + 1, 0, shortArr[i]);
          flag = true;
          break;

        }
        if (j + 1 == longArr.length - 1 && !flag) {

          longArr.push(shortArr[i]);
          break;

        }
        flag = false;

      }
    }

    return longArr;
  }
};

// solution = mergeSortedArray([1, 5, 30, 80, 98], [1, 7, 100, 120,150,200]);
// console.log(solution);



// More efficient solution
function mergeSortedArrayEfficient(arr1,arr2){

const mergedArr=[];
let i=0;
let j=0;
let arrayItem1 = arr1[i];
let arrayItem2 = arr2[j];
if(!arrayItem1 && !arrayItem2){
  
    return arr1+arr2;
}

while(arrayItem1 || arrayItem2){
  
    if(arrayItem2==undefined || arrayItem1<arrayItem2){
        mergedArr.push(arrayItem1);
        i++;
        arrayItem1=arr1[i];
    }
    else{

        mergedArr.push(arrayItem2);
        j++;
        arrayItem2=arr2[j]
    }
}
return mergedArr;
}


solution = mergeSortedArrayEfficient([4,6,30], [0,3,4]);
console.log(solution);