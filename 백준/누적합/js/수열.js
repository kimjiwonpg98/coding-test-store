const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    let cnt = 0;
    const [n, k] = input[0].split(' ').map(Number);
    const array = input[1].split(' ').map(Number);
    const sums = new Array(array.length - k + 1).fill(0);

    const result = sums.map((num) => {
        for (let i = 0; i < k; i++) {
            num += array[cnt + i];
        }
        cnt++;
        return num;
    })
    console.log(Math.max(...result));
    process.exit();
});