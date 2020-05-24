const util = require("util");

const arrayToList = arr => {
  let list = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    let node;
    if (i === arr.length - 1) {
      node = {
        value: arr[i],
        rest: null
      };
    } else {
      node = {
        value: arr[i],
        rest: list
      };
    }
    list = { ...node };
  }
  return list;
};

const listToArray = list => {
  const arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

const prepend = (element, list) => {
  return {
    value: element,
    rest: list
  };
};

// const nth = (list, n) => {
//   let i = 0;

//   for (let node = list; node; node = node.rest) {
//     if (i === n) {
//       return node.value;
//     }
//     i++;
//   }
//   return undefined;
// };

const nth = (list, n) => {
  if (n === 0) {
    return list.value;
  }
  const tail = list.rest;

  if (tail === null) {
    return undefined;
  }

  return nth(tail, n - 1);
};

console.log(arrayToList([10, 20]));
const list = arrayToList([1, 2, 3, 4, 5]);
console.log(util.inspect(list, false, null, true));
console.log(listToArray(list));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10]), 0));
