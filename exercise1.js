let res = "";

let relation = {
  "-3": ["great grandfather", "great grandmother"],
  "-2": ["grandfather", "grandmother"],
  "-1": ["father", "mother"],
  0: ["me!", "me!"],
  1: ["son", "daughter"],
  2: ["grandson", "granddaughter"],
  3: ["great grandson", "great granddaughter"],
};

const searchAnc = (number, gender) => {
  let keys = Object.keys(relation);
  for (let key of keys) {
    if (key == number.toString() && gender === "f") {
      res = relation[key][1];
    } else if (key == number.toString() && gender === "m") {
      res = relation[key][0];
    }
  }
  return res;
};
console.log(searchAnc(2, "m"));
