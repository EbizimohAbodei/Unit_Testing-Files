"use strict";

const search = require("./carStorageFileRead");
// const search = require("./carStorageFileVersionNoWorking");

console.log(search());
console.log("one");
console.log(search("model", "S-Model"));
console.log("two");
console.log(search("licence", "ABC-1"));
console.log("three");
