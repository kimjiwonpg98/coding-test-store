const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    let max = 0;
    const [treeCnt, treeLength] = input[0].split(' ').map(Number);
    const trees = input[1].split(' ').map(Number).map((x) => {
        if (x > max) max = x;
        return x;
    });

    const result = cuttingTrees(trees, treeLength, 0, max);
    console.log(result);
    process.exit();
});

function cuttingTrees (trees, target, start, end) {
    let mid = 0;
    let result = 0;

    while (start <= end) {
        let SumWood = 0;
        mid = Math.floor((start + end) / 2);
        trees.forEach((a) => {
            let rest = a - mid;
            if (rest > 0) SumWood += rest;
        });
        if (SumWood >= target) {
            if (mid > result) result = mid;
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return result;
}


// while (start <= end) {
//     let count = 0;
//     mid = Math.floor((start + end) / 2);
//     trees.forEach((tree) => tree - mid > 0 ? count += (tree - mid) : count);
//     if (count === target) result = mid;
//
//     count > target ? start = mid + 1 : end = mid - 1;
// }