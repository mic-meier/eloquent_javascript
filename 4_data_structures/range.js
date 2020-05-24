const range = (start, end, ...args) => {
  const res = [];

  if (args.length === 0) {
    for (let i = start; i <= end; i++) {
      res.push(i);
    }

    return res;
  }

  if (args[0] > 0) {
    for (let i = start; i <= end; i += args[0]) {
      res.push(i);
    }
    return res;
  }

  for (let i = start; i >= end; i -= Math.abs(args[0])) {
    res.push(i);
  }
  return res;
};

const sum = arr => {
  let res = 0;

  for (let i of arr) {
    res += i;
  }

  return res;
};

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(10, 1, -2));
console.log(range(5, 2 - 1));
