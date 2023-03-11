const arr = [12, 10, 13, 20, 56, 93, 82, 19, 11, 33];
let sumArray = 0;

let min = arr[0];
let max = arr[0];
let string = "";


function findMinForLoop(arr) {
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  

  function findMaxWhileLoop(arr) {
   
    let max = arr[0];
    let i = 1;
    while (i < arr.length) {
      if (arr[i] > max) {
        max = arr[i];
      }
      i++;
    }
    return max;
  }
  
  
for ( i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "number") {
    sumArray += arr[i];
    }
    else continue;
}


console.log(min);
console.log(max);
console.log(sumArray);

for (i = 1; i <= 5; i++) {
    for ( j = 0; j < i; j++) {
        string += "#";
    }
    string += "\n";
}
console.log(string);