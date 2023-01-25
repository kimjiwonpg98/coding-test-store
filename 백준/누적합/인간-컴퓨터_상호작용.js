const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const result = [];
const alpabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    y: 24,
    z: 25
}

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const word = input[0].split('');
    const length = +input[1];
    const array = Array.from(Array(26), () => Array(word.length).fill(0))
    const map = new Map();
    for (let w in word) {
        const cnt = map.get(word[w]) || 0;
        cnt ? map.set(word[w], cnt + 1) : map.set(word[w], 1);
        array[alpabet[word[w]]][w] = cnt + 1;
    }
    for (let i = 0; i < length; i++) {
        const [a, first, second] = input[2 + i].split(' ');
        const start = Number(first) - 1;
        if (start < 0) {
            result.push(array[alpabet[a]][Number(second)] - array[alpabet[a]][0]);
        } else {
            result.push(array[alpabet[a]][Number(second)] - array[alpabet[a]][start]);
        }

    }
    console.log(result.join('\n'));
    process.exit();
});