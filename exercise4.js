function mostExpensive(obj) {
  let res = "";
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let max = values.indexOf(Math.max(...values));
  let answer = keys[max];
  res = `The most expensive one is the ${answer}`;
  return res;
}

let myJwl = {
  "Diamond Earrings": 3500,
  "Gold Watch": 400,
  "Pearl Necklace": 5100,
};

console.log(mostExpensive(myJwl));
