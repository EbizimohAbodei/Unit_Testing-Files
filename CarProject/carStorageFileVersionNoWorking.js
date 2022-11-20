// carStorageFileVersionNotWorking.js

"use strict";
const fs = require("fs");

const path = "./cars.json";

// cbf is a callback function
module.exports = (cbf, key, value) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      return err;
    } else {
      let found = [];
      const cars = JSON.parse(data);
      if (key && value) {
        for (let car of cars) {
          if (car[key] == value) {
            found.push(car);
          }
        }
      } else {
        found = cars;
      }
      return found;
    }
  });
};
