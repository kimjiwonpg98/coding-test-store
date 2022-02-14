function solution(msg) {
  const answer = [];
  let nextWord = "";
  let lastCount = 27;
  const dir = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  const s = msg.split("").reduce((acc, cur) => {
    nextWord = acc + cur;
    if (dir[nextWord] === undefined) {
      dir[nextWord] = lastCount++;
    } else {
      return acc + cur;
    }
    if (dir[acc] !== undefined) answer.push(dir[acc]);
    return cur;
  });

  answer.push(dir[s]);

  return answer;
}
