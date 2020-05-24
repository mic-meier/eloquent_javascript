const deepEqual = (val1, val2) => {
  if (
    typeof val1 === "object" &&
    val1 !== null &&
    typeof val2 === "object" &&
    val2 !== null
  ) {
    if (Object.keys(val1).length !== Object.keys(val2).length) {
      return false;
    }

    for (let key in val1) {
      const res = deepEqual(val1[key], val2[key]);
      if (!res) {
        return false;
      }
    }
  } else {
    if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

let obj1 = { here: { is: "an" }, object: 2 };
let obj2 = { here: 1, object: 2 };
let obj3 = { here: { is: "an" }, object: 2 };
console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));
console.log(deepEqual("a", "a"));
console.log(deepEqual("a", "b"));
console.log(deepEqual(obj1, obj1));
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
