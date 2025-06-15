const readline = require("readline");

let input = [];
let result = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => input.push(line.trim())).on("close", () => {
    let maxNumber = 0;
    let consequence = 0;
    let consequenceNumber = 0;
    const numbers = [];
    const dices = input[0].split(' ');

    for (let dice of dices) {
        const diceNum = parseInt(dice);

        if (maxNumber < diceNum) {
            maxNumber = diceNum;
        }

        if (numbers.includes(diceNum)) {
            consequence++;
            consequenceNumber = diceNum;
            continue;
        }

        if (maxNumber === 0) {
            maxNumber = diceNum;
            numbers.push(diceNum);
            continue;
        }
        numbers.push(diceNum);
    }

    if (!consequence) {
        console.log(100 * maxNumber);
    }
    if (consequence === 1) {
        console.log(1000 + consequenceNumber * 100)
    }
    if (consequence === 2) {
        console.log(10000 + consequenceNumber * 1000)
    }
});
