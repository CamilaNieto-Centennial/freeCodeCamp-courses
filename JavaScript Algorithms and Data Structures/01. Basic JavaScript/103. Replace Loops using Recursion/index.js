/*
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
*/

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
let result = 0;

function sum(arr, n) {
    if(n <= 0 || n > arr.length) return 0;
    result += arr[n-1]; // Update result by adding the item before 'n' index
    // console.log(result);
    n--; // Decrease n to the previous index
    sum(arr, n) // Recursion
    return result;
}

// TEST ONE BY ONE
console.log( sum([1], 0) ); // 0
// console.log( sum([2, 3, 4], 1) ); // 2
// console.log( sum([2, 3, 4, 5], 3) ); // 9