class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }

  next() {
    if (this.i === this.group.length) return { done: true };

    let value = this.group[this.i];

    this.i++;

    return { value, done: false };
  }
}

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (!this.group.some(n => n === value)) {
      this.group.push(value);
    }
  }

  delete(value) {
    this.group.splice(this.group.indexOf(value), 1);
  }

  has(value) {
    return this.group.some(n => n === value);
  }

  static from(arr) {
    const res = new Group();

    for (let element of arr) {
      res.add(element);
    }

    return res;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.group);
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
