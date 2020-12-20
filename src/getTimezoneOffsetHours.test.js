const getTimezoneOffsetHours = require("./getTimezoneOffsetHours");
console.log(getTimezoneOffsetHours());
test("getTimezoneOffsetHours reutrn -9", () => {
  expect(getTimezoneOffsetHours()).toBe(-9);
});
