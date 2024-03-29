// import animals, { getAnimals } from "./data";

// Destructuring Arrays
// console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);

// const [animal, makeSound] = getAnimals(cat);
// console.log(animal);
// makeSound()

// Destructuring Objects
// const { name, sound } = dog;
// console.log(name, sound); // dog woof
// const { name: catName, sound: catSound } = cat  //change name into catName and sound into catSound
// console.log(catName, catSound); //cat meow
// const { name = "Fluffy", sound = "Purr"} = cat // if there is no name and sound it will be assign into Fluffy and Purr
// console.log(name, sound); // Fluffy Purr
// const {
//   feedingRequirments: { food, water },
// } = cat;
// console.log(food); // 2

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
