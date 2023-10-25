const drink = {
  color: "brown",
  carbonated: false,
  sugar: 40,
};

//type alias
type Drink = [string, boolean, number];

//tuple,specific order of elements & max number of elements.
const pepsi: [string, boolean, number] = ["brown", false, 40];
const pepsi1: Drink = ["brown", false, 40];
const sprite: Drink = ["clear", true, 30];
const tea: Drink = ["brown", false, 0];
