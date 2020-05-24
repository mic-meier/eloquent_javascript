const flattening = arr => {
  return arr.reduce((a, b) => a.concat(b));
};

let myArr = [[1, 2, 3], [4, 5], [6]];

console.log(flattening(myArr));
