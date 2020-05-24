const reverseArray = arr => {
  const res = [];

  for (let element of arr) {
    res.unshift(element);
  }
  return res;
};

const reverseArrayInPlace = arr => {
  const l = Math.floor(arr.length / 2);

  for (let i = 0; i < l; i++) {
    let n = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = n;
  }
  return arr;
};

const myArr = [1, 2, 3, 4, 5, 6];

console.log(myArr);
console.log(reverseArray(myArr));
console.log(myArr);
console.log(reverseArrayInPlace(myArr));
console.log(myArr);
