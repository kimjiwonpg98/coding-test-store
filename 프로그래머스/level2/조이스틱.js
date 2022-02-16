function alphabets() {
  const nextList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  const lastList = [
    "Z",
    "Y",
    "X",
    "W",
    "V",
    "U",
    "T",
    "S",
    "R",
    "Q",
    "P",
    "O",
    "N",
  ];
  const alphabet = nextList.reduce((d, a, i) => ((d[a] = i), d), {});
  let number = 1;
  lastList.map((x) => {
    alphabet[x] = number++;
  });
  return alphabet;
}

function solution(name) {
  const result = [];
  let candidate = [];
  let count = 0;
  let [po, maxPo] = [0, name.length - 1];
  let answer = new Array(name.length).fill("A").join("");
  const alphabet = alphabets();

  for (let i of name) result.push(alphabet[i]);
  for (let i = 1; i < result.length; i++) {
    if (result[i] !== 0) candidate.push(i);
  }

  while (true) {
    count += result[po];

    if (!candidate.length) break;

    if (po > candidate[candidate.length - 1]) {
      if (
        name.length - po + candidate[0] >=
        po - candidate[candidate.length - 1]
      ) {
        count += po - candidate[candidate.length - 1];
        po = candidate.pop();
      } else {
        count += name.length - po + candidate[0];
        po = candidate.shift();
      }
      continue;
    }

    if (
      candidate[0] - po <=
      name.length - candidate[candidate.length - 1] + po
    ) {
      count += candidate[0] - po;
      po = candidate.shift();
    } else {
      count += name.length - candidate[candidate.length - 1] + po;
      po = candidate.pop();
    }
  }
  return count;
}
