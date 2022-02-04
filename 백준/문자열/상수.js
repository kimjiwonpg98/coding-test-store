let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let firstNum = +input[0].split("").reverse().join("");
let secNum = +input[1].split("").reverse().join("");

console.log(firstNum > secNum ? firstNum : secNum);
