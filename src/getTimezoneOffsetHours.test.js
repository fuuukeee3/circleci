const getTimezoneOffsetHours = require("./getTimezoneOffsetHours");
test("getTimezoneOffsetHours reutrn -9", () => {
  expect(getTimezoneOffsetHours()).toBe(-9);
});
