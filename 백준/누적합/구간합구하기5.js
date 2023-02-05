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

    const board = input.slice(1, n + 1).map((str) => str.split(" ").map(Number));
    let dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            dp[i][j] =
                board[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
        }
    }

    for (let i = n + 1; i < input.length; i++) {
        const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
        output.push(dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1]);
    }
    console.log(output.join('\n'));
    process.exit();
});