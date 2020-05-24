const every = (arr, test) => {
  for (let element of arr) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
};

const everySome = (arr, test) => {
  return !arr.some(el => !test(el));
};

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));
