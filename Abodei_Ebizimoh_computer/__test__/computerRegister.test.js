"use strict";
const computerRegistryData = require("../datastorage.json");
const computerRegister = require("../computerRegister");
const register = new computerRegister(computerRegistryData);

// Testing the Class Constructor
describe("Testing constructor", () => {
  test("Test that the missing parameter throws an exception", () => {
    expect(() => new computerRegister()).toThrow("data storage missing");
  });

  test("Just for an example - Create object with default data", () => {
    const register = new computerRegister(computerRegistryData);
    expect(register.computerData).toEqual(computerRegistryData);
  });
});

// Testing the class method - get_All_computers_By_processor
describe("Test 1: Get all computer by processor", () => {
  test("correct parameter provided", () => {
    const expectedValue = [
      {
        id: 2,
        computerName: "MaxEffect 2000",
        processor: "Selenium II",
        price: 10,
        diskspace: "500 GB",
        accessories: ["cleaning set", "coffee cup holder", "Cooling system"],
        extras: {
          model: "gold",
          consumption: "A+",
          notes: "no comments",
        },
      },
      {
        id: 3,
        computerName: "Beast II",
        processor: "Selenium II",
        price: 36,
        diskspace: "4 TB",
        accessories: ["coffee cup holder", "super power supply", "Super fan"],
        extras: {
          model: "chrome",
          consumption: "E",
          notes: "no comments",
        },
      },
    ];

    expect(register.get_All_computers_By_processor("Selenium II")).toEqual(
      expectedValue
    );
  });

  test("wrong parameter provided - no match", () => {
    expect(register.get_All_computers_By_processor("pentium one")).toEqual([]);
  });

  test("wrong parameter provided - number", () => {
    expect(register.get_All_computers_By_processor(1234)).toEqual([]);
  });

  test("wrong parameter provided - boolean", () => {
    expect(register.get_All_computers_By_processor(true)).toEqual([]);
  });

  test("missing parameter", () => {
    expect(() => register.get_All_computers_By_processor()).toThrow(
      "missing parameter"
    );
  });
});

// Testing the class method - get_diskspace_of_computer_by_computerName

describe("Test 2: Get diskspace of computer by name", () => {
  test("correct parameter provided", () => {
    expect(
      register.get_diskspace_of_computer_by_computerName("Xunil 4.7")
    ).toEqual("1 TB");
  });

  test("wrong parameter provided", () => {
    expect(
      register.get_diskspace_of_computer_by_computerName("Xerox")
    ).toBeNull();
  });

  test("wrong parameter provided", () => {
    expect(register.get_diskspace_of_computer_by_computerName(1234)).toBeNull();
  });

  test("wrong parameter provided", () => {
    expect(register.get_diskspace_of_computer_by_computerName(true)).toBeNull();
  });

  test("missing parameter", () => {
    expect(() => register.get_diskspace_of_computer_by_computerName()).toThrow(
      "missing parameter"
    );
  });
});

// Testing the class method - get_total_prices_of_computers_by_processor

describe("Test 3: Get total prices of computer by processor", () => {
  test("correct parameter provided", () => {
    expect(
      register.get_total_prices_of_computers_by_processor("Selenium II")
    ).toEqual(46);
  });

  test("wrong parameter provided", () => {
    expect(() =>
      register.get_total_prices_of_computers_by_processor("wrong parameter")
    ).toThrow("nothing found with given");
  });

  test("wrong parameter provided", () => {
    expect(() =>
      register.get_total_prices_of_computers_by_processor(1234)
    ).toThrow("nothing found with given");
  });

  test("missing parameter", () => {
    expect(() => register.get_total_prices_of_computers_by_processor()).toThrow(
      "missing parameter"
    );
  });
});

// Testing the class method - get_a_computer_matching_id

describe("Test 4: Get computer by matching id", () => {
  const testValues = [
    [1, computerRegistryData[0]],
    [2, computerRegistryData[1]],
    [3, computerRegistryData[2]],
    [4, computerRegistryData[3]],
    [5, computerRegistryData[4]],
    [6, computerRegistryData[5]],
  ];

  test.each(testValues)(
    "Checking correct inputs (%s,%s) returns %s",
    (a, b) => {
      expect(register.get_a_computer_matching_id(a)).toEqual(b);
    }
  );

  test("wrong parameter provided", () => {
    expect(register.get_a_computer_matching_id(1.2)).toBeNull();
  });

  test("wrong parameter provided", () => {
    expect(register.get_a_computer_matching_id(99)).toBeNull();
  });

  test("wrong parameter provided", () => {
    expect(register.get_a_computer_matching_id(true)).toBeNull();
  });

  test("missing parameter", () => {
    expect(() => register.get_a_computer_matching_id()).toThrow(
      "missing parameter"
    );
  });
});

// Testing the class method - get_computer_accessories

describe("Test 5: Get accessories matching id", () => {
  const testValues = [
    [1, computerRegistryData[0].accessories],
    [2, computerRegistryData[1].accessories],
    [3, computerRegistryData[2].accessories],
    [4, computerRegistryData[3].accessories],
    [5, computerRegistryData[4].accessories],
    [6, computerRegistryData[5].accessories],
  ];

  test.each(testValues)("Check valid IDs (%s,%s) returns %s", (a, b) => {
    expect(register.get_computer_accessories(a)).toEqual(b);
  });

  test("wrong parameter provided", () => {
    expect(register.get_computer_accessories(1.2)).toEqual([]);
  });

  test("wrong parameter provided", () => {
    expect(register.get_computer_accessories(99)).toEqual([]);
  });

  test("wrong parameter provided", () => {
    expect(register.get_computer_accessories(true)).toEqual([]);
  });

  test("missing parameter", () => {
    expect(register.get_computer_accessories()).toEqual([]);
  });
});
