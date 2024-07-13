const index = require("../index.js");

test("expect the string to be capitalized", () => {
  let string = "hello world";
  expect(index.capitalize(string)).toBe("Hello world");
});

test("Expect the string to be reversed", () => {
  expect(index.reverseString("test")).toBe("tset");
});
