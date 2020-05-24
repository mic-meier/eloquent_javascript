const SCRIPTS = require("./scripts");

const characterScript = code => {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    )
      return script;
  }
  return null;
};

const countBy = (items, groupName) => {
  let counts = [];

  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
};

const dominantDirection = text => {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  return scripts.reduce((a, b) => {
    if (a.count > b.count) {
      return a.name;
    }
    return b.name;
  }, 0);
};

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
