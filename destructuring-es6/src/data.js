const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirments: {
      food: 2,
      water: 3,
    },
  },
  { name: "dog", sound: "woof" },
];

function getAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { getAnimals };
