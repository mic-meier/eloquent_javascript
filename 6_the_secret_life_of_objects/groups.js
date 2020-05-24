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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
