const sum = require("./sum");

test("adds 1 + 4 to equal 6", () => {
  expect(sum(1, 4)).toBe(6);
});

test("adds 6 + 6 to equal not 10", () => {
  expect(sum(6, 6)).not.toBe(10);
});
