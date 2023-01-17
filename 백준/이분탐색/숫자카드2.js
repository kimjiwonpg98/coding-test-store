const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const result = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const n = +input[0];
    const arrayN = input[1].split(' ').map(Number);
    const m = +input[2];
    const arrayM = input[3].split(' ').map(Number);

    const myMap = new Map();
    arrayN.forEach(v => {
        if (myMap.has(v)) myMap.set(v, myMap.get(v) + 1);
        else myMap.set(v, 1);
    });

    arrayM.forEach(v => result.push(myMap.get(v) || 0));


    console.log(result.join(' '));
    process.exit();
})