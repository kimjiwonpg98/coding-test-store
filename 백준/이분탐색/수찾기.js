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

    arrayN.sort((x, y) => x - y);

    arrayM.map((num) => {
        result.push(binarySearch(arrayN, num, 0, arrayN.length - 1))
        return;
    });

    console.log(result.join('\n'));
    process.exit();
});


function binarySearch(array, target, start, end) {
    let mid = 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return 1;
        }

        if (array[mid] > target) {
            end = mid - 1;
        }

        if (array[mid] < target) {
            start = mid + 1;
        }
    }
    return 0;
}
