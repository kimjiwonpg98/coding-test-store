const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const output = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [n, m] = input[0].split(' ').map(Number);
    const numbers = input[1].split(' ').map(Number);
    const sum = new Array(numbers.length + 1).fill(0)

    numbers.forEach((v, i) => {
        sum[i+1] = sum[i] + v;
    });

    for (let i = 0; i < m; i++) {
        const [first, sec] = input[2 + i].split(' ').map(Number);
        output.push(sum[sec] - sum[first - 1]);
    }

    console.log(output.join('\n'));
    process.exit();
});