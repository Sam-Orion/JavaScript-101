const fs = require("fs");



function readFilePromisified(fileName, encoding) {
  return new Promise((resolve) => fs.readFile(fileName, encoding, function (_err, data) {
    console.log(data);
  }));
}

readFilePromisified("a.txt", "utf-8");

console.log("I am done first");
