import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import emojipedia from "./emoji";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const result = emojipedia.map(function (props) {
  return props.meaning.substring(0, 100);
});

console.log(result);

const numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const filterNum = numbers.filter((num) => num < 10);
console.log(filterNum);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumber);

////Find - find the first item that matches from an array.
const findNumber = numbers.find((num) => num > 10);
console.log(findNumber);

////FindIndex - find the index of the first item that matches.
const findIndexNumber = numbers.findIndex((num) => num > 10);
console.log(findIndexNumber);
