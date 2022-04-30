function getBudgets(array) {
  let sum = 0;

  for (let arr in array) {
    sum += array[arr].budget;
  }

  return sum;
}

let array = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

console.log(getBudgets(array));
