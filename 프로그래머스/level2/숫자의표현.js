function combination(number, n) {
  for (let i = number; i <= n; i++) {
    if (number > n) break;
    if (number === n) {
      return true;
    }
    number += i + 1;
  }
}

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (2 * i + 1 > n) break;
    if (combination(i, n)) answer++;
  }
  return answer + 1;
}
