const search = require("../src/search");

describe("search", () => {
  it("should return -1 if index of target it is not in nums.", () => {
    expect(search([1], 3)).toBe(-1);
  });

  it("should return the index of target if it is in nums.", () => {
    expect(search([1], 1)).toBe(0);
  });
});
