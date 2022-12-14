"use strict";
const Dice = require("../dice");

describe("Test that method are defined", () => {
  const dice = new Dice();

  test("Roll is defined", () => {
    expect(dice.roll).toBeDefined();
  });

  //  always define in class
  //   test("toString is defined", () => {
  //     expect(dice.toString).toBeDefined();
  //   });
});

describe("Constructor tests", () => {
  describe("Create dice with no upper bound given", () => {
    const dice = new Dice();
    test("minimumValue is 1", () => {
      expect(dice.minimumValue).toBe(1);
    });

    test("maximumValue is 6", () => {
      expect(dice.maximumValue).toBe(6);
    });

    test("dots is 0", () => {
      expect(dice.dots).toBe(0);
    });
  });
});

describe("Create dice with upper bound 2-20", () => {
  const testValues = new Array(19).fill(2).map((num, ind) => [num + ind]);

  test.each(testValues)("Test upper bound %s", (upperBound) => {
    const dice = new Dice(upperBound);
    expect(dice.minimumValue).toBe(1);
    expect(dice.maximumValue).toBe(upperBound);
    expect(dice.dots).toBe(0);
  });
});

describe("Test Exceptions", () => {
  const testValues = [
    [0, "Upper bound too small"],
    [1, "Upper bound too small"],
    [-1, "Upper bound too small"],
    [21, "Upper bound too big"],
    ["d", "Upper bound must be an integer"],
    [2.5, "Upper bound must be an integer"],
  ];

  test.each(testValues)(
    "Upper bound %s throws an exception %s",
    (ubound, text) => {
      expect(() => new Dice(ubound)).toThrow(text);
    }
  );

  // test.each(testValues)("Test upper bound %s", (upperBound) => {
  //   const dice = new Dice(upperBound);
  //   expect(dice.minimumValue).toBe(1);
  //   expect(dice.maximumValue).toBe(upperBound);
  //   expect(dice.dots).toBe(0);
});

describe("Testing toString", () => {
  let dice;

  beforeEach(() => {
    dice = new Dice();
  });

  test("dice rolled", () => {
    dice.roll();
    expect(dice.toString()).toBe(`${dice.dots}`);
  });

  test("dice not rolled yet", () => {
    expect(dice.toString()).toBe("Dice not rolled yet");
  });
});

describe("Testing roll", () => {
  describe("Default upper bound 6", () => {
    const dice = new Dice();

    test("test when the dice is rolled", () => {
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(6);
    });
  });

  describe("Create a dice with given upperbound 2-20 and roll it", () => {
    const testCases = new Array(19).fill(2).map((val, ind) => [val + ind]);

    test.each(testCases)("Test upper bound %s", (ubound) => {
      const dice = new Dice(ubound);
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(ubound);
    });

    test.each(testCases)("Test upper stats bound %s", (ubound) => {
      const dice = new Dice(ubound);
      for (let i = 0; i < 10; i++) {
        dice.roll();
        expect(dice.dots).toBeGreaterThanOrEqual(1);
        expect(dice.dots).toBeLessThanOrEqual(ubound);
      }
    });
  });
});
