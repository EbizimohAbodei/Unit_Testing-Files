"use strict";

const { sum, subtract, divide } = require("../calclibrary");

describe("Test sum with integers one by one", () => {
  test("Test sum(1,1) returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("Test sum(2,3) returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("Test sum(12,100) returns 112", () => {
    expect(sum(12, 100)).toBe(112);
  });

  test("Test sum(2,-4) returns -2", () => {
    expect(sum(2, -4)).toBe(-2);
  });

  test("Test sum(0,0) returns 112", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("Test sum(0,3) returns 3", () => {
    expect(sum(0, 3)).toBe(3);
  });

  test("Test sum(3,0) returns 3", () => {
    expect(sum(3, 0)).toBe(3);
  });

  test("Test sum(0,-3) returns -3", () => {
    expect(sum(0, -3)).toBe(-3);
  });

  test("Test sum(-3,0) returns -3", () => {
    expect(sum(-3, 0)).toBe(-3);
  });
});

describe("Test sum with integers using test.each", () => {
  const testValues = [
    // a, b, expectedResult
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];

  test.each(testValues)("sum(%s, %s) returns %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
});

describe("Test sum with floats using test.each", () => {
  const testValues = [
    // a, b, expectedResult
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-2.5, -3, -5.5],
    [-2.5, -2.5, -5],
    [-2.5, 0, -2.5],
    [2.4, -2.5, -0.1],
  ];

  test.each(testValues)("sum(%s, %s) returns %s", (a, b, result) => {
    expect(sum(a, b)).toBeCloseTo(result);
  });
});

describe("Test that missing parameters throw an exception", () => {
  //   test('sum() throws an exception "parameter missing"', () => {
  //     expect(() => sum()).toThrow("parameter(s) missing");
  //   });

  const testValues = [[1], ["a"], [""]];

  test.each(testValues)(
    'sum(%s) throws an exception "parameter(s) missing"',
    (ex) => {
      expect(() => sum(ex).toThrow("parameter(s) missing"));
    }
  );
});

describe("Test values that are not numbers", () => {
  const testValues = [
    ['sum("1", "2")', "1", "2"],
    ['sum(1, "b")', 1, "b"],
    ['sum("a", 1)', "a", 1],
    ['sum("a", "b")', "a", "b"],
    ['sum("", "")', "", ""],
    ["sum(null, 1)", null, 1],
    ["sum(undefined, 1)", undefined, 1],
    ["sum(1, null)", 1, null],
    ["sum(1, undefined)", 1, undefined],
  ];

  test.each(testValues)(
    '%s throws an exception "Only numbers allowed"',
    (ex) => {
      expect(() => sum(a, b).toThrow("Only numbers allowed"));
    }
  );
});

// Testing the subtraction function

describe("Subtraction - Test subtraction with integers using test.each", () => {
  const testValues = [
    // a, b, expectedResult
    [2, -4, 6],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [-3, -1, -2],
    [0, -3, 3],
    [-3, 0, -3],
  ];

  test.each(testValues)(
    "subtract(%s, %s) returns %s",
    (a, b, expectedResult) => {
      expect(subtract(a, b)).toBe(expectedResult);
    }
  );
});

describe("Subtraction - Test subtraction with floats using test.each", () => {
  const testValues = [
    // a, b, expectedResult
    [2.5, 3, -0.5],
    [-2.5, 3, -5.5],
    [3, -2.5, 5.5],
    [-2.5, -3, 0.5],
    [-2.5, -2.5, 0],
    [-2.5, 0, -2.5],
    [2.4, -2.5, 4.9],
  ];

  test.each(testValues)("subtract(%s, %s) returns %s", (a, b, result) => {
    expect(subtract(a, b)).toBeCloseTo(result);
  });
});

describe("Subtraction - Test that missing parameters throw an exception", () => {
  //   test('sum() throws an exception "parameter missing"', () => {
  //     expect(() => sum()).toThrow("parameter(s) missing");
  //   });

  const testValues = [[1], ["a"], [""]];

  test.each(testValues)(
    'subtract(%s) throws an exception "parameter(s) missing"',
    (ex) => {
      expect(() => subtract(ex).toThrow("parameter(s) missing"));
    }
  );
});

describe("Subtraction - Test values that are not numbers", () => {
  const testValues = [
    ['subtract("1", "2")', "1", "2"],
    ['subtract(1, "b")', 1, "b"],
    ['subtract("a", 1)', "a", 1],
    ['subtract("a", "b")', "a", "b"],
    ['subtract("", "")', "", ""],
    ["subtract(null, 1)", null, 1],
    ["subtract(undefined, 1)", undefined, 1],
    ["subtract(1, null)", 1, null],
    ["subtract(1, undefined)", 1, undefined],
  ];

  test.each(testValues)(
    '%s throws an exception "Only numbers allowed"',
    (ex) => {
      expect(() => subtract(a, b).toThrow("Only numbers allowed"));
    }
  );
});

// Testing Division

describe("Testing division...", () => {
  const testValues = [
    [0, 0, Number.NaN],
    [2, 0, Number.POSITIVE_INFINITY],
    [-2, 0, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
  ];

  test.each(testValues)("Divide(%s,%s) returns %s", (a, b, res) => {
    expect(divide(a, b)).toBe(res);
  });
});
