function primeNumber(number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

function solution(n, k) {
  let result = 0;
  let changeNumber = n.toString(k);
  const numbers = changeNumber.split("0");

  for (let number of numbers) {
    if (number === "") continue;
    if (+number === 1) continue;
    if (primeNumber(+number)) result += 1;
  }

  return result;
}
