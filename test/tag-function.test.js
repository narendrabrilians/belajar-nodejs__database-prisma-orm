const tagFunction = (array, ...args) => {
  console.info(array);
  console.info(args);
};

test("tag function", () => {
  const name1 = "Cat";
  const name2 = "Monkey";

  tagFunction`Hello ${name1} & ${name2}! How are you?`;
  tagFunction`Bye ${name1} & ${name2}! See you later`;
});

test("should first", () => {
  const name = "Cat";
  const age = 3;

  tagFunction`SELECT * FROM animals WHERE name = ${name} AND age = ${age}`;
});
