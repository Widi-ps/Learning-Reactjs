//Challenge to know how to use map, filter, reduce, find and findIndex

const numbers = [3, 2, 56, 48, 5];

function double(x) {
  return x * 2;
}
//Map -Create a new array by doing something with each item in an array.
const doubleNum = numbers.map(double);
console.log(doubleNum); //[ 6, 112, 4, 96, 10 ]

//Filter - Create a new array by keeping the items that return true.
const hugeNum = numbers.filter(function (num) {
  return num > 10;
});
console.log(hugeNum);

//Reduce - Accumulate a value by doing something to each item in an array.
const totalNum = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(totalNum);

//Find - find the first item that matches from an array.
const findNum = numbers.find(function (num) {
  return num > 10;
});
console.log(findNum);

//FindIndex - find the index of the first item that matches.
const indexNum = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(indexNum);
