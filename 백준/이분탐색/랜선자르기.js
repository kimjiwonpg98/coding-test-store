const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const lines = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [n, m] = input[0].split(' ').map(Number);
    for (let line = 1; line <= n; line++) {
        lines.push(+input[line]);
    }
    lines.sort((a, b) => a + b);

    const result = cutLine(0, lines[0], lines, m);
    console.log(Math.max(...result));
    process.exit();
});

function cutLine(start, end, array, target) {
    const result = [];
    while (start <= end) {
        let count = 0;
        let mid = Math.floor((start + end) / 2);
        for (const line of array) {
            count += Math.floor(line / mid);
            if (count >= target) {
                result.push(mid);
                break;
            }
        }
        if (count < target) {
            end = mid - 1;
            continue;
        }
        start = mid + 1;
    }
    return result;
}