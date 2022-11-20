"use strict";

beforeAll(() => {
  console.log(`Before_All, init before all tests`);
});

afterAll(() => {
  console.log(`Before_All, cleaning after all tests`);
});

test("This is the first test", () => {
  console.log(`First test`);
});

it("This is second test", () => {
  console.log("second test");
});

describe("This is a test suite A", () => {
  beforeEach(() => {
    console.log("BeforeEach, running before each test in suit A");
  });
  afterEach(() => {
    console.log("AfterEach, running after each test in suit A");
  });

  test("First test in suite A", () => {
    // init();
    console.log("First Test in Suite A");
    // clear();
  });

  test("Second test in suite A", () => {
    console.log("Second Test in suite A");
  });
});

describe("This is  test in suite B", () => {
  beforeAll(() => {
    console.log("BeforeAllInSuiteB");
  });

  describe("This is a subSuite of B", () => {
    test("First test of subSuite A of B", () => {
      console.log("subSuite A of B");
    });
    test("Second test of subSuite A of B", () => {
      console.log("Second test of sub A of B");
    });
  });

  describe("subSuite B of B", () => {
    test("First test of subSuite B of B", () => {
      console.log("subSuite B of B");
    });
  });
});

describe("Test concatenating strings", () => {
  const concat = (partA, partB) => partA + partB;

  test('"first" and "second" results "firstsecond"', () => {
    expect(concat("first", "second")).toBe("firstsecond");
  });
  test("1 and 2 results 3", () => {
    expect(concat(1, 2)).toBe(3);
  });

  test("'1' and '2' results '12'", () => {
    expect(concat("1", "2")).toBe("12");
  });

  test("'1' and 2 results '12'", () => {
    expect(concat("1", 2)).toBe("12");
  });
});

describe("This tests for an exception", () => {
  function testFunction() {
    throw Error("This is an exception");
  }

  test("Tests if a function throws an exception", () => {
    expect(() => testFunction().toThrow("This is an exception"));
  });
});
