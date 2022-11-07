const search = require("../src/search");

describe("search", () => {
  it("should return -1 if index of target it is not in nums.", () => {
    expect(search([1], 3)).toBe(-1);
  });

  it("should return the index of target if it is in nums.", () => {
    expect(search([1], 1)).toBe(0);
  });

  it("should return -1 if index of target it is not in nums.", () => {
    expect(search([1, 2], 0)).toBe(-1);
  });

  it("should return the index of target if it is in nums.", () => {
    expect(search([1, 2], 2)).toBe(1);
  });

  it("should return -1 if index of target it is not in nums.", () => {
    expect(search([2, 1], 0)).toBe(-1);
  });

  it("should return the index of target if it is in nums.", () => {
    expect(search([2, 1], 2)).toBe(0);
  });

  it("should return -1 if index of target it is not in nums.", () => {
    expect(search([1, 2, 3], 4)).toBe(-1);
  });

  it("should return the index of target if it is in nums.", () => {
    expect(search([1, 2, 3], 3)).toBe(2);
  });

  it("should return the index of target if it is in nums.", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it("should return -1 if index of target it is not in nums.", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });
});
