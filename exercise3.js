function mapping(array) {
  let obj = array.reduce((acc, cur) => {
    acc[cur] = cur.toUpperCase();
    return acc;
  }, {});

  return obj;
}

let arr = ["A", "v", "Y", "z"];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].toLowerCase();
}
console.log(mapping(arr));
