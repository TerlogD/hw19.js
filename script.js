// Заданий масив
const arr = [1, 2, 3, 4, 5, 6];

// Push method
const newElement = 7;
arr[arr.length] = newElement;
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]

// Pop method
const lastElement = arr[arr.length - 1];
arr.length = arr.length - 1;
console.log(arr); // Output: [1, 2, 3, 4, 5]
console.log(lastElement); // Output: 6

// Map method (multiplication by 5)
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i] * 5;
}
console.log(newArr); // Output: [5, 10, 15, 20, 25, 30]

// Filter method (selecting even numbers)
const newArrFilter = [];
let newArrIndex = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    newArrFilter[newArrIndex] = arr[i];
    newArrIndex++;
  }
}
console.log(newArrFilter); // Output: [2, 4, 6]

// Reduce method (summing up the elements of the array)
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum); // Output: 21