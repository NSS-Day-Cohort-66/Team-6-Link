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

// TODO: Need to implement the below algorithm to our cook function.

/*
    We want all meals to be printed when we provide the correct ingredients

    Add more conditionals so that we are able to add more meals to the list of meals
        conditionals: should compare the given ingredients to the required ingredients to make the meal
*/

// function: this is for the meals being made
const cook = (firstIngredient, secondIngredient) => {
  // if we give two ingredients, we push a meal to the array
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  }
  //   else {
  //     meals.push("Not a recipe");
  //   }
};

// invoke the above function, we are passing arguments into the function
cook(materials[0], materials[1]);
cook(materials[2], materials[1]);

// displaying something...
console.log("MEALS:");
console.log("---------------");

// calls each item in the meals array and logs it
for (const meal of meals) {
  console.log(meal);
}
