"use strict";

const search = require("./carStorageFileCallback");

search(console.log);
console.log("one");
search(console.log, "model", "S-Model"), console.log("two");
search((data) => console.log(data), "licence", "ABC-1");

function printData(data) {
  console.log("#####");
  console.log(data);
  console.log("#####");
}

printData();
