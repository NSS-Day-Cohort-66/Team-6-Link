// data: arrays of strings, 1 for materials & 1 for meals
const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
];
const meals = [];

// TODO: We need to review and start part 2 in the readme.
materials.push("Goat Butter", "Fresh Milk", "Cane Sugar", "Raw Bird Thigh");

// function: this is for the meals being made

// add 3rd and 4th ingredient as params, use them to determine if nothing was passed into the function in that slot so that we can decide what
// meal we are going to cook.

const twoIngredients = (firstIngredient, secondIngredient) => {
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  } else if (
    firstIngredient === "Hateno Cheese" &&
    secondIngredient === "Bird Egg"
  ) {
    meals.push("Cheesy Omlette");
  } else if (
    firstIngredient === "Tabantha Wheat" &&
    secondIngredient === "Hateno Cheese"
  ) {
    meals.push("Cheesy Hylian Pizza");
  } else if (
    firstIngredient === "Raw Prime Meat" &&
    secondIngredient === "Hylian Rice"
  ) {
    meals.push("Prime Meat and Rice Bowl");
  } else {
    meals.push("Not a recipe");
  }
};

const cook = (
  firstIngredient,
  secondIngredient,
  thirdIngredient,
  fourthIngredient
) => {
  // if we give two ingredients, we push a meal to the array
  if (thirdIngredient) {
    if (
      firstIngredient === "Raw Prime Meat" &&
      secondIngredient === "Hylian Rice" &&
      thirdIngredient === "Bird Egg"
    ) {
      meals.push("Chicken Egg Fried Rice");
    }
  } else if (fourthIngredient) {
  } else {
    twoIngredients(firstIngredient, secondIngredient);
  }
};

// invoke the above function, we are passing arguments into the function
cook(materials[0], materials[1]);
cook(materials[4], materials[5]);
cook(materials[2], materials[1]);
cook(materials[2], materials[4]);
cook(materials[3], materials[0]);
cook(materials[3], materials[0], materials[5]);

// displaying something...
console.log("MEALS:");
console.log("---------------");

// calls each item in the meals array and logs it
for (const meal of meals) {
  console.log(meal);
}
