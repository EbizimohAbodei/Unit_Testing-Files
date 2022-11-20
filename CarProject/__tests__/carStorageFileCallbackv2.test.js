"use strict";

const search = require("../carStorageCallback2");

describe("Testing callback", () => {
  test("Search with licence ABC-1", () => {
    function cb(data) {
      // cb=callback function
      try {
        expect(data).toEqual([{ Model: "Bored T-Model", licence: "ABC-1" }]);
      } catch (error) {
        done(error);
      }
    }
    search("licence", "ABC-1", cb);
  });
});

describe("Testing the missing callback", () => {
  test("callback missing throws an exception", () => {
    expect(() => search("licence", "ABC-1")).toThrow(
      "callback function missing"
    );
  });
});
