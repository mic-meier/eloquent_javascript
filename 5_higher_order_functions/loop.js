const loop = (n, test, update, body) => {
  do {
    body(n);
    n = update(n);
  } while (test(n));
};

loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
);
