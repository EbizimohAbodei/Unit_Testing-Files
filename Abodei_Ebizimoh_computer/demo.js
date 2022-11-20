"use strict";
const computerRegistryData = require("./datastorage.json");
const computerRegister = require("./computerRegister");

const register = new computerRegister(computerRegistryData);

// console.log(register.get_All_computers_By_processor("Selenium II"));

console.log(register.get_total_prices_of_computers_by_processor(1234));
