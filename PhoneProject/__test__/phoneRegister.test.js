"use strict";
const phoneRegistryData = require("../phones.json");
const phoneRegister = require("../phoneRegister");

describe("Testing constructor", () => {
  test("Test that the missing parameter throws an exception", () => {
    expect(() => new phoneRegister()).toThrow("phone data missing");
  });

  test("Just for an example - Create object with default data", () => {
    const register = new phoneRegister(phoneRegistryData);
    expect(register.phoneData).toEqual(phoneRegistryData);
  });
});

describe("Testing getTypes", () => {
  test("Test 1: use default data", () => {
    const register = new phoneRegister(phoneRegistryData);
    expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
  });

  test("Test 2: persons have no phones", () => {
    const testData = [
      {
        firstname: "Leaila",
        lastname: "Hokki",
        phone: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
      },
    ];

    const register = new phoneRegister(testData);
    expect(register.getTypes()).toEqual([]);
  });

  test("No persons in phoneRegister", () => {
    const register = new phoneRegister([]);
    expect(register.getTypes()).toEqual([]);
  });

  test("Test 3: Type is missing or is an empty string", () => {
    const testData = [
      {
        firstname: "Leaila",
        lastname: "Hokki",
        phone: [
          { type: "", number: "12345677" },
          { type: "work", number: "04885577" },
          { type: "work", number: "88234444" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phone: [
          { type: "work", number: "123094477" },
          { type: "home", number: "77448233" },
          { type: "mobile", number: "88234444" },
        ],
      },
      {
        firstname: "Nathalie",
        lastname: "Jones",
        phone: [
          { number: "123094477" },
          { type: "cell", number: "38945555" },
          { type: "work", number: "57743834" },
        ],
      },
    ];
    const register = new phoneRegister(testData);
    expect(register.getTypes()).toEqual(["work", "home", "mobile", "cell"]);
  });

  test("Some phones are missing", () => {
    const testData = [
      {
        firstname: "Leaila",
        lastname: "Hokki",
        phone: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phone: [
          { type: "work", number: "123094477" },
          { type: "mobile", number: "77448233" },
          { type: "home", number: "88234444" },
        ],
      },
    ];
    const register = new phoneRegister(testData);
    expect(register.getTypes()).toEqual(["work", "mobile", "home"]);
  });
});

describe("Testing getPersonsNumberByType(firstname, lastname, type)", () => {
  const register = new phoneRegister(phoneRegistryData);

  test("Test 1: using default data", () => {
    expect(register.getPersonsNumberByType("Leaila", "Hokki", "work")).toEqual([
      "04885577",
      "88234444",
    ]);
  });

  test("Test 2A: mobile numbers of Matt River", () => {
    expect(register.getPersonsNumberByType("Matt", "River", "mobile")).toEqual([
      "88234434",
    ]);
  });

  test("Test 2B: home numbers of Matt River", () => {
    expect(register.getPersonsNumberByType("Matt", "River", "home")).toEqual([
      "77448233",
    ]);
  });

  describe("Test 3: wrong type or name returns an empty array []", () => {
    const testData = [
      ["Matt", "River", "x"],
      ["Matt", "x", "mobile"],
      ["x", "River", "mobile"],
    ];

    test.each(testData)(
      "firstname=%s, lastname=%s, type=%s returns []",
      (first, last, type) => {
        expect(register.getPersonsNumberByType(first, last, type)).toEqual([]);
      }
    );
  });

  describe("Test 4: missing parameter throws an exception", () => {
    test("one parameter missing", () => {
      expect(() => register.getPersonsNumberByType("Matt", "River")).toThrow(
        "missing parameter"
      );
    });

    test("two parameter missing", () => {
      expect(() => register.getPersonsNumberByType("Matt")).toThrow(
        "missing parameter"
      );
    });

    test("No parameter given", () => {
      expect(() => register.getPersonsNumberByType()).toThrow(
        "missing parameter"
      );
    });
  });

  test("Test 5: Data is empty (no persons found) returns []", () => {
    const emptyRegister = new phoneRegister([]);
    expect(
      emptyRegister.getPersonsNumberByType("Matt", "River", "home")
    ).toEqual([]);
  });
});

describe("Testing getAllNumbersByType", () => {
  const register = new phoneRegister(phoneRegistryData);

  test("Test 1: get all work numbers using default data", () => {
    const expectedValue = [
      {
        firstname: "Leaila",
        lastname: "Hokki",
        number: { type: "work", tel: "04885577" },
      },
      {
        firstname: "Leaila",
        lastname: "Hokki",
        number: { type: "work", tel: "88234444" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "work", tel: "123094477" },
      },
    ];
    expect(register.getAllNumbersByType("work")).toEqual(expectedValue);
  });

  test("Test 2A: get all mobile data using default data", () => {
    expect(register.getAllNumbersByType("mobile")).toEqual([
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "mobile", tel: "88234434" },
      },
    ]);
  });

  test("Test 2B: get all mobile number using default data", () => {
    expect(register.getAllNumbersByType("home")).toEqual([
      {
        firstname: "Leaila",
        lastname: "Hokki",
        number: { type: "home", tel: "12345677" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "home", tel: "77448233" },
      },
    ]);
  });

  test("Test 3: No numbers of given type found returns empty array []", () => {
    expect(register.getAllNumbersByType("x")).toEqual([]);
  });

  test("Test 4: missing parameter throws an exception", () => {
    expect(() => register.getAllNumbersByType()).toThrow("missing parameter");
  });

  test("Test 5: Person has type but the correponding number is missing returns empty array []", () => {
    const testData = [
      {
        firstname: "Vera",
        lastname: "Jones",
        phone: [
          { type: "home", number: "" },
          { type: "home" },
          { type: "home", number: "23898237" },
        ],
      },
    ];
    const editedRegister = new phoneRegister(testData);
    const expectedResult = [
      {
        firstname: "Vera",
        lastname: "Jones",
        number: { type: "home", tel: "23898237" },
      },
    ];
    expect(editedRegister.getAllNumbersByType("home")).toEqual(expectedResult);
  });
});

describe("Testing getAllNumbers of persons", () => {
  const register = new phoneRegister(phoneRegistryData);

  test("Test 1: get all numbers using default data", () => {
    expect(register.getAllNumbers()).toEqual(phoneRegistryData);
  });

  test("Test 2: All phones missing", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hokki",
        number: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: [],
      },
      {
        firstname: "Vera",
        lastname: "River",
      },
    ];

    const editedRegister = new phoneRegister(testData);
    expect(editedRegister.getAllNumbers()).toEqual([]);
  });

  test("Test 3: get all numbers of persons(some missing phone numbers)", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hokki",
        phone: [
          { type: "home", number: "12345677" },
          { type: "work", number: "04885577" },
          { type: "work", number: "88234444" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: [],
      },
      {
        firstname: "Vera",
        lastname: "River",
      },
    ];

    const expectedResult = [
      {
        firstname: "Leila",
        lastname: "Hokki",
        phone: [
          { type: "home", number: "12345677" },
          { type: "work", number: "04885577" },
          { type: "work", number: "88234444" },
        ],
      },
    ];
    const editedRegister = new phoneRegister(testData);
    expect(editedRegister.getAllNumbers()).toEqual(expectedResult);
  });

  test("Test 4: All persons are missing", () => {
    const editedRegister = new phoneRegister([]);
    expect(editedRegister.getAllNumbers()).toEqual([]);
  });
});

describe("Test cases for getName", () => {
  const register = new phoneRegister(phoneRegistryData);

  test("Test 1: wrong number", () => {
    expect(register.getName("0000").toBeNull());
  });

  test("Test 2: Parameter missing", () => {
    expect(register.getName().toBeNull());
  });

  test("Test 3: get the name of the the number `77448233`", () => {
    expect(editedRegister.getName("77448233")).toEqual({
      firstname: "Matt",
      lastname: "River",
    });
  });

  describe("Test 3B: Get name of the numbers", () => {
    const testValues = [
      ["77448233", { firstname: "Matt", lastname: "River" }],
      ["12345677", { firstname: "Leaila", lastname: "Hokki" }],
      ["88234444", { firstname: "Leaila", lastname: "Hokki" }],
      ["88234434", { firstname: "Matt", lastname: "River" }],
    ];

    test.each(testValues)("number %s returns %p", (number, result) => {
      expect(register.getName(number)).toEqual(result);
    });
  });
});
