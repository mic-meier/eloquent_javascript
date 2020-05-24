const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall"
];

const buildGraph = edges => {
  let graph = Object.create(null);

  const addEdge = (from, to) => {
    if (graph[from] === undefined) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  };

  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
};

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map(p => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" }
]);
let next = first.move("Alice's House");

const runRobot = (state, robot, memory) => {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      // console.log(`Done in ${turn} turns`);
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    // console.log(`Moved to ${action.direction}`);
  }
};

const randomPick = array => {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
};

const randomRobot = state => {
  return { direction: randomPick(roadGraph[state.place]) };
};

VillageState.random = (parcelCount = 5) => {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

// runRobot(VillageState.random(), randomRobot);

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office"
];

const routeRobot = (state, memory) => {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
};

// runRobot(VillageState.random(), routeRobot, []);

const findRoute = (graph, from, to) => {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
};

const goalOrientedRobot = ({ place, parcels }, route) => {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
};

// runRobot(VillageState.random(), goalOrientedRobot, []);

const compareRobots = (robot1, memory1, robot2, memory2) => {
  const tasks = [];
  const resultsRobot1 = [];
  const resultsRobot2 = [];

  for (i = 0; i < 100; i++) {
    tasks.push(VillageState.random());
  }
  for (let task of tasks) {
    resultsRobot1.push(runRobot(task, robot1, memory1));
    resultsRobot2.push(runRobot(task, robot2, memory2));
  }

  const avg1 = resultsRobot1.reduce((a, b) => a + b) / resultsRobot1.length;
  const avg2 = resultsRobot2.reduce((a, b) => a + b) / resultsRobot2.length;

  console.log(`Robot 1 took ${avg1} turns on average`);
  console.log(`Robot 2 took ${avg2} turns on average`);
};

compareRobots(routeRobot, [], goalOrientedRobot, []);
